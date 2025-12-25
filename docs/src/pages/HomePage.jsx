import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import HeroSection from "../components/home/HeroSection.jsx";
import FeatureHighlight from "../components/home/FeatureHighlight.jsx";
import CodeExampleSection from "../components/home/CodeExampleSection";
import Roadmap from "../components/home/Roadmap.jsx";
import Footer from "../components/footer/Footer";

const HomePage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        // Check if there is a hash in the URL (e.g., #my-target-section)
        if (hash) {
            // Find the element by the ID (remove the '#' from the hash)
            const element = document.getElementById(hash.replace("#", ""));

            if (element) {
                // Scroll to the element smoothly
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash]);

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
