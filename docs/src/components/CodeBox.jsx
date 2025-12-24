import { useState } from "react";
import { Copy, Check } from "lucide-react";
const CodeBox = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="rounded-xl border bg-card overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/50">
                <span className="text-sm font-mono text-muted-foreground">
                    example.ts
                </span>

                <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-secondary hover:bg-secondary/80 transition"
                >
                    {copied ? (
                        <>
                            <Check size={16} /> Copied
                        </>
                    ) : (
                        <>
                            <Copy size={16} /> Copy
                        </>
                    )}
                </button>
            </div>

            {/* Code */}
            <pre className="overflow-x-auto p-5 text-sm font-mono leading-relaxed">
                {code.split("\n").map((line, i) => (
                    <div key={i} className="grid grid-cols-[2.5rem_1fr] gap-2">
                        <span className="text-right text-muted-foreground select-none">
                            {i + 1}
                        </span>

                        <code className="min-w-0 whitespace-pre">
                            {renderLine(line)}
                        </code>
                    </div>
                ))}
            </pre>
        </div>
    );
};

export default CodeBox;

function renderLine(line) {
    // Comment
    if (line.trim().startsWith("//")) {
        return <span className="text-muted-foreground italic">{line}</span>;
    }

    return line.split(/(\s+)/).map((word, i) => {
        if (["import", "from", "const", "if"].includes(word)) {
            return (
                <span key={i} className="text-primary font-medium">
                    {word}
                </span>
            );
        }

        if (["timePeriod", "enableDarkMode", "console.log"].includes(word)) {
            return (
                <span key={i} className="text-blue-600 dark:text-blue-400">
                    {word}
                </span>
            );
        }

        if (
            word.startsWith('"') ||
            word.startsWith("'") ||
            word.startsWith("`")
        ) {
            return (
                <span key={i} className="text-green-600 dark:text-green-400">
                    {word}
                </span>
            );
        }

        return <span key={i}>{word}</span>;
    });
}
