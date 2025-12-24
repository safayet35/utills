import { useState } from "react";
import { Copy,Check } from "lucide-react";
const InstallCommand = () => {
    const [copied, setCopied] = useState(false);
    const installCommand = "npm install utills";

    const handleCopy = async () => {
        await navigator.clipboard.writeText(installCommand);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-card border border-border font-mono text-sm">
            <span className="text-muted-foreground">$</span>
            <span className="text-foreground">{installCommand}</span>
            <button
                onClick={handleCopy}
                className="ml-2 p-1.5 rounded-md hover:bg-muted transition-colors"
                aria-label="Copy install command"
            >
                {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                ) : (
                    <Copy className="h-4 w-4 text-muted-foreground" />
                )}
            </button>
        </div>
    );
};

export default InstallCommand;
