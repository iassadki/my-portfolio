import Header from "../components/layout/Header2";
import Footer from "../components/layout/Footer";
import Resume from "../components/sections/Resume";

export default function CvPage() {
    return (
        <div className="pt-28">
            <Header />
            <Resume />
            <Footer />
        </div>
    );
}
