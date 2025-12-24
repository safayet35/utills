import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "../Button";
import ThemeSwitcher from "../ThemeSwitcher";
import { Link } from "react-router";
const Header = ({ setSidebarOpen }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavToggle = () => {
        setSidebarOpen(prev => !prev);
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="z-10 sticky top-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-md border border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold text-foreground">
                        utills
                    </Link>

                    {/* Actions */}
                    <div className="flex items-center gap-4 md:gap-5">
                        <ThemeSwitcher />

                        <Button
                            variant=""
                            size="icon"
                            className="lg:hidden"
                            onClick={handleNavToggle}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
