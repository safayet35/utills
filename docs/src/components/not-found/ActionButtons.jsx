import Button from "../Button";
import { Home } from "lucide-react";
const ActionButtons = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-medium group"
                as="link"
                href="/"
            >
                Back to home
                <Home className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
    );
};

export default ActionButtons;
