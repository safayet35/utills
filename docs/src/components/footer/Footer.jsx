import { Github, Package, BookOpen } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const links = [
        {
            label: "GitHub",
            href: "https://github.com/safayet35/utills",
            icon: Github
        },
        {
            label: "npm",
            href: "https://www.npmjs.com/package/utills",
            icon: Package
        },
        {
            label: "Docs",
            href: "/docs/installation",
            icon: BookOpen
        }
    ];

    return (
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="flex flex-col items-center sm:items-start gap-2">
                        <span className="text-lg font-bold text-foreground">
                            utills
                        </span>
                        <span className="text-sm text-muted-foreground">
                            © {currentYear} utills. MIT License.
                        </span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        {links.map(link => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    <Icon className="h-5 w-5" />
                                    <span className="text-sm font-medium">
                                        {link.label}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
