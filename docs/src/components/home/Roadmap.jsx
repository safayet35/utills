import { Clock, Type, Calendar, CheckCircle, Layers, Code2 } from "lucide-react";

const Roadmap = () => {
  const roadmapItems = [
    {
      title: "timePeriod",
      description: "Returns the current period of the day based on time",
      icon: Clock,
      status: "available",
    },
    {
      title: "String Utilities",
      description: "Capitalize, truncate, slugify, and more string helpers",
      icon: Type,
      status: "coming",
    },
    {
      title: "Date Utilities",
      description: "Format dates, calculate differences, parse relative time",
      icon: Calendar,
      status: "coming",
    },
    {
      title: "Validation Helpers",
      description: "Email, URL, phone number, and custom validators",
      icon: CheckCircle,
      status: "coming",
    },
    {
      title: "Array/Object Utilities",
      description: "Deep clone, merge, pick, omit, and array operations",
      icon: Layers,
      status: "coming",
    },
    {
      title: "Code Helpers",
      description: "Debounce, throttle, memoize, and async utilities",
      icon: Code2,
      status: "coming",
    },
  ];

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Roadmap
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're just getting started. Here's what's coming next to make your 
            development workflow even smoother.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapItems.map((item) => {
            const Icon = item.icon;
            const isAvailable = item.status === "available";

            return (
              <div
                key={item.title}
                className={`relative p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                  isAvailable
                    ? "bg-secondary border-primary/20 hover:border-primary/40"
                    : "bg-card border-border hover:border-muted-foreground/30"
                }`}
              >
                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-medium ${
                    isAvailable
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {isAvailable ? "Available" : "Coming Soon"}
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    isAvailable
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;