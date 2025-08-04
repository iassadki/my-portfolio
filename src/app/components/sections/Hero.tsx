import Image from "next/image";
import ButtonPrimary from "../ui/ButtonPrimary";
import ButtonSecondary from "../ui/ButtonSecondary";

const Hero: React.FC = () => {    
    return (
        <section id="hero" className="relative w-full">
            <div className="relative w-full h-[600px]">
                <Image
                    src="/gradient.png"
                    fill
                    className="object-cover"
                    alt="Hero banner"
                />

                {/* First phrase */}
                <h1 className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-jakarta font-bold text-h1 text-black">
                    Votre développeur
                </h1>

                {/* Second phrase */}
                <h1 className="absolute top-[47%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-jakarta font-bold text-h1 text-primary underline">
                    de rêve
                </h1>

                {/* Third phrase */}
                <h4 className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-jakarta font-medium text-h4 text-black">
                    Je contribue à créer des applications performantes et{" "}
                    <span className="text-primary underline">intuitives</span>
                </h4>

                {/* Button container */}
                <div className="absolute top-[73%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
                    <ButtonPrimary>Voir mes projets</ButtonPrimary>
                    <ButtonSecondary>Me contacter</ButtonSecondary>
                </div>
            </div>
        </section>
    );
};

export default Hero;