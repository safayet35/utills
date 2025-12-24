import { Clock, Sun, Sunset, Moon } from "lucide-react";

const TimeInfoExample = () => {
    return (
        <div>
            <div className="flex items-center gap-3 text-muted-foreground">
                <Sun className="h-5 w-5 text-amber-500" />
                <span>
                    <strong className="text-foreground">morning</strong> — 5:00
                    AM to 11:59 AM
                </span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
                <Sun className="h-5 w-5 text-yellow-500" />
                <span>
                    <strong className="text-foreground">afternoon</strong> —
                    12:00 PM to 4:59 PM
                </span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
                <Sunset className="h-5 w-5 text-orange-500" />
                <span>
                    <strong className="text-foreground">evening</strong> — 5:00
                    PM to 8:59 PM
                </span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
                <Moon className="h-5 w-5 text-indigo-400" />
                <span>
                    <strong className="text-foreground">night</strong> — 9:00 PM
                    to 4:59 AM
                </span>
            </div>
        </div>
    );
};

export default TimeInfoExample;
