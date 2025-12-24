import { ArrowRight } from "lucide-react";
import Button from "../Button";
import InstallCommand from "./InstallCommand";
const HeroSection = () => {
    return (
        <section className="pt-18 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center max-w-4xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Open Source
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
                    utills
                </h1>

                {/* Tagline */}
                <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
                    Essential utilities for everyday web development
                </p>

                {/* Description */}
                <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-md">
                    A lightweight collection of utility functions that simplify
                    common tasks. Clean, tested, and ready for production.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-medium group"
                        as="link"
                        href="/docs/installation"
                    >
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg" className=" text-lg">
                        <a
                            href="https://www.npmjs.com/package/utills"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on npm
                        </a>
                    </Button>
                </div>
                {/* Install Command */}
                <InstallCommand />
            </div>
        </section>
    );
};

export default HeroSection;
