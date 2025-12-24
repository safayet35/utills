import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function MarkdownRenderer({ content }) {
    return (
        <ReactMarkdown
            components={{
                code({ inline, className, children }) {
                    const match = /language-(\w+)/.exec(className || "");

                    if (!inline && match) {
                        return (
                            <div className="relative my-4 overflow-x-auto max-w-full rounded-lg">
                                <SyntaxHighlighter
                                    language={match[1]}
                                    PreTag="div"
                                    customStyle={{
                                        margin: 0,

                                        padding: "1rem",
                                        minWidth: "100%"
                                    }}
                                    codeTagProps={{
                                        style: {
                                            whiteSpace: "pre"
                                        }
                                    }}
                                >
                                    {String(children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                            </div>
                        );
                    }

                    return (
                        <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">
                            {children}
                        </code>
                    );
                }
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
