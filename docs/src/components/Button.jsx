import {Link } from "react-router"

export default function Button({
    children,
    variant = "primary", // primary | outline
    size = "md", // md | lg
    as = "button", // button | a
    href,
    target,
    rel,
    className = "",
    iconRight,
    iconLeft,
    ...props
}) {
    const base =
        "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
            "border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900"
    };

    const sizes = {
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-4 text-lg"
    };

    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    if (as === "link") {
        return (
            <Link
                to={href}
                target={target}
                rel={rel}
                className={classes}
                {...props}
            >
                {iconLeft && <span className="mr-2">{iconLeft}</span>}
                {children}
                {iconRight && (
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                        {iconRight}
                    </span>
                )}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {iconLeft && <span className="mr-2">{iconLeft}</span>}
            {children}
            {iconRight && (
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                    {iconRight}
                </span>
            )}
        </button>
    );
}
