import { NextRequest, NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY || '',
  apiSecret: process.env.MAILJET_SECRET_KEY || ''
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Vérification de la configuration Mailjet
    if (!process.env.MAILJET_API_KEY || !process.env.MAILJET_SECRET_KEY) {
      console.log('Configuration Mailjet manquante, simulation d\'envoi...');
      
      // Simulation pour les tests
      console.log('Email simulé:', {
        from: `${name} <${email}>`,
        to: process.env.MAILJET_TO_EMAIL || 'your-email@example.com',
        subject: `Nouveau message de ${name}`,
        message: message
      });

      return NextResponse.json({
        success: true,
        message: 'Email simulé avec succès (configuration Mailjet manquante)'
      });
    }

    // Envoi de l'email via Mailjet
    await mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: process.env.MAILJET_FROM_EMAIL,
              Name: process.env.MAILJET_FROM_NAME || 'Portfolio Contact'
            },
            To: [
              {
                Email: process.env.MAILJET_TO_EMAIL,
                Name: 'Ilias Assadki'
              }
            ],
            Subject: `Nouveau message de ${name} - Portfolio`,
            TextPart: `
Nouveau message reçu via le formulaire de contact du portfolio:

Nom: ${name}
Email: ${email}

Message:
${message}

---
Envoyé depuis votre portfolio
            `,
            HTMLPart: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #4361EE; margin-bottom: 20px;">Nouveau message - Portfolio</h2>
                
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                  <p><strong>Nom:</strong> ${name}</p>
                  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                </div>

                <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 10px;">
                  <h3 style="color: #495057; margin-top: 0;">Message:</h3>
                  <p style="line-height: 1.6; color: #6c757d;">${message}</p>
                </div>

                <hr style="margin: 30px 0; border: none; border-top: 1px solid #e9ecef;">
                <p style="color: #6c757d; font-size: 14px; text-align: center;">
                  Envoyé depuis votre portfolio - <a href="https://votre-domaine.com" style="color: #4361EE;">votre-domaine.com</a>
                </p>
              </div>
            `,
            ReplyTo: {
              Email: email,
              Name: name
            }
          }
        ]
      });

    return NextResponse.json({
      success: true,
      message: 'Email envoyé avec succès'
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi de l\'email',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
