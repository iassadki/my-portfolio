import ButtonPrimary from "../ui/ButtonPrimary";
import ButtonSecondary from "../ui/ButtonSecondary";
import fields from '@/app/data/fields.json';

const Hero: React.FC = () => { 
    const { hero } = fields;

    return (
        <section id="hero" className="relative w-full pt-12">
            <div
                className="relative flex h-[600px] w-full flex-col items-center bg-cover bg-center bg-no-repeat px-4 pt-40 text-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(248, 247, 255, 0.88) 0%, rgba(203, 193, 255, 0.42) 58%, rgba(255, 255, 255, 0.9) 100%), url(${hero.imagePath})`,
                }}
            >
                <h1 className="relative z-10 font-jakarta text-4xl font-bold leading-[1.1] text-black sm:text-[52px]">
                    {hero.title}
                </h1>

                <h1 className="relative z-10 font-jakarta text-4xl font-bold leading-[1.1] text-primary underline sm:text-[52px]">
                    {hero.title_primary}
                </h1>

                <h4 className="relative z-10 mt-10 font-jakarta text-base font-medium text-black sm:text-[24px]">
                    {hero.description}{" "}
                    <span className="text-primary underline">{hero.description_primary}</span>
                </h4>

                <div className="relative z-10 mt-14 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
                    <ButtonPrimary href="/projects">Voir mes projets</ButtonPrimary>
                    <ButtonSecondary href="#contact">Me contacter</ButtonSecondary>
                </div>
            </div>
        </section>
    );
};

export default Hero;