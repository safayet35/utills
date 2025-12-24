import { Clock, Sun, Sunset, Moon } from "lucide-react";
import TimeInfoExample from "./TimeInfoExample";
const FeatureHighlight = () => {
  
    // dummy data of timePeriods

    const timePeriods = [
        {
            period: "morning",
            icon: Sun,
            color: "text-amber-500",
            bg: "bg-amber-50 dark:bg-amber-900/20"
        },
        {
            period: "afternoon",
            icon: Sun,
            color: "text-yellow-500",
            bg: "bg-yellow-50 dark:bg-yellow-900/20"
        },
        {
            period: "evening",
            icon: Sunset,
            color: "text-orange-500",
            bg: "bg-orange-50 dark:bg-orange-900/20"
        },
        {
            period: "night",
            icon: Moon,
            color: "text-indigo-400",
            bg: "bg-indigo-50 dark:bg-indigo-900/20"
        }
    ];

    return (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Featured Utility
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Meet{" "}
                        <code className="px-2 py-1 rounded bg-secondary text-secondary-foreground font-mono text-base">
                            timePeriod
                        </code>{" "}
                        — a smart function that knows what time of day it is.
                        This is just a small example. We have many more small
                        methods like this.
                    </p>
                </div>

                {/* Feature Card */}
                <div className="bg-card border border-border rounded-2xl p-8 sm:p-10">
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Left: Description */}
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
                                <Clock className="h-4 w-4" />
                                Time Utility
                            </div>

                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                timePeriod()
                            </h3>

                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Automatically returns the current period of the
                                day based on the time. Perfect for dynamic
                                greetings, theme switching, or time-based UI
                                adjustments.
                            </p>

                            <div className="space-y-3">
                                <TimeInfoExample />
                            </div>
                        </div>

                        {/* Right: Visual */}
                        <div className="flex-1 flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                                {timePeriods.map(
                                    ({ period, icon: Icon, color, bg }) => (
                                        <div
                                            key={period}
                                            className={`${bg} rounded-xl p-6 text-center transition-transform hover:scale-105`}
                                        >
                                            <Icon
                                                className={`h-8 w-8 ${color} mx-auto mb-2`}
                                            />
                                            <span className="text-sm font-medium text-foreground capitalize">
                                                {period}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureHighlight;
