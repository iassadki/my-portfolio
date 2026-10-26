import { NextResponse } from "next/server";
import Mailjet from "node-mailjet";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
    }

    // Champ piège : rempli uniquement par les bots
    if (typeof body.website === "string" && body.website.trim() !== "") {
        return NextResponse.json({ ok: true });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !message || !EMAIL_REGEX.test(email)) {
        return NextResponse.json({ error: "Champs manquants ou invalides" }, { status: 400 });
    }
    if (name.length > 100 || email.length > 200 || subject.length > 200 || message.length > 5000) {
        return NextResponse.json({ error: "Message trop long" }, { status: 400 });
    }

    const {
        MAILJET_API_KEY,
        MAILJET_SECRET_KEY,
        MAILJET_FROM_EMAIL,
        MAILJET_FROM_NAME,
        MAILJET_TO_EMAIL,
    } = process.env;

    if (!MAILJET_API_KEY || !MAILJET_SECRET_KEY || !MAILJET_FROM_EMAIL || !MAILJET_TO_EMAIL) {
        console.error("Configuration Mailjet manquante");
        return NextResponse.json({ error: "Service indisponible" }, { status: 500 });
    }

    const mailjet = Mailjet.apiConnect(MAILJET_API_KEY, MAILJET_SECRET_KEY);

    try {
        await mailjet.post("send", { version: "v3.1" }).request({
            Messages: [
                {
                    From: { Email: MAILJET_FROM_EMAIL, Name: MAILJET_FROM_NAME || "Portfolio" },
                    To: [{ Email: MAILJET_TO_EMAIL }],
                    ReplyTo: { Email: email, Name: name },
                    Subject: `[Portfolio] ${subject || `Nouveau message de ${name}`}`,
                    TextPart: `Nom : ${name}\nEmail : ${email}\nSujet : ${subject || "-"}\n\n${message}`,
                },
            ],
        });
    } catch (error) {
        console.error("Erreur Mailjet :", error);
        return NextResponse.json({ error: "Envoi impossible" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}
