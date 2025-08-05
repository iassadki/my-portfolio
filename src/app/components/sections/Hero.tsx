import ButtonPrimary from "../ui/ButtonPrimary";
import ButtonSecondary from "../ui/ButtonSecondary";
import fields from '@/app/data/fields.json';

const Hero: React.FC = () => { 
    const { hero } = fields;

    return (
        <section id="hero" className="relative w-full">
            <div 
                className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${hero.imagePath})` }}
            >

                {/* First phrase */}
                <h1 className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-jakarta font-bold text-h1 text-black">
                    {hero.title}{" "}
                </h1>

                {/* Second phrase */}
                <h1 className="absolute top-[47%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-jakarta font-bold text-h1 text-primary underline">
                    {hero.title_primary}
                </h1>

                {/* Third phrase */}
                <h4 className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-jakarta font-medium text-h4 text-black">
                    {hero.description}{" "}
                    <span className="text-primary underline">{hero.description_primary}</span>
                </h4>

                {/* Button container */}
                <div className="absolute top-[73%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
                    <ButtonPrimary href="#projects">Voir mes projets</ButtonPrimary>
                    <ButtonSecondary href="#contact">Me contacter</ButtonSecondary>
                </div>
            </div>
        </section>
    );
};

export default Hero;