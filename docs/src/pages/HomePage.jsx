import HeroSection from "../components/home/HeroSection.jsx";
import FeatureHighlight from "../components/home/FeatureHighlight.jsx";
import CodeExampleSection from "../components/home/CodeExampleSection";
import Roadmap from "../components/home/Roadmap.jsx";
import Footer from "../components/footer/Footer";

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <FeatureHighlight />
            <CodeExampleSection />
            <Roadmap />
            <Footer />
        </div>
    );
};

export default HomePage;
