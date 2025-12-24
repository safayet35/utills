import CodeBox from "../CodeBox"
export default function CodeExampleSection() {
    const codeExample = `import { timePeriod } from "utills";

// Get the current time period
const period = timePeriod();
console.log(period);

// Dynamic greeting
const greeting = \`Good \${period}!\`;

if (period === "night" || period === "evening") {
  enableDarkMode();
}`;

    return (
        <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-3">Quick Start</h2>
                    <p className="text-muted-foreground">
                        Simple usage example of <b>utills</b>
                    </p>
                </div>

                {/* Code box */}
                <CodeBox code={codeExample} />
            </div>
        </section>
    );
}
