// wee add here are all available methods
// contributor add your method information like this pattern

// we can add a array of object but it's okay ;)

const methods = {
    randomId: {
        name: "randomId",
        description: "Generate a cryptographically secure random ID.",
        params: [
            {
                name: "options",
                type: "object",
                optional: true,
                default: "{}",
                description: "Optional configuration object"
            },
            {
                name: "options.length",
                type: "number",
                optional: true,
                default: 16,
                description: "Length of the generated ID"
            },
            {
                name: "options.charset",
                type: "string",
                optional: true,
                default: "a-zA-Z0-9",
                description: "Custom characters set to generate the ID"
            },
            {
                name: "options.safe",
                type: "boolean",
                optional: true,
                default: false,
                description:
                    "Removes visually confusing characters (0, O, l, I)"
            }
        ],
        returns: "string",
        example: `import { randomId } from "utills";

const id1 = randomId();
const id2 = randomId({ length: 10 });
const id3 = randomId({ safe: true });`
    },

    timeAgo: {
        name: "timeAgo",
        description: "Convert a date to human-readable time.",
        params: [
            {
                name: "date",
                type: "Date",
                optional: false,
                description: "Input date"
            }
        ],
        returns: "string",
        example: `import { timeAgo } from "utills"

timeAgo(new Date());`
    },

    generateSecret: {
        name: "generateSecret",
        description:
            "Generate a cryptographically secure random secret string using a predefined alphanumeric character set. Works in both browser and Node.js environments.",
        params: [
            {
                name: "length",
                type: "number",
                optional: true,
                default: 32,
                description:
                    "Length of the generated secret. Must be greater than 0."
            }
        ],
        returns: "string",

        example: `import { generateSecret } from "utills"

const secret1 = generateSecret()
const secret2 = generateSecret(32)
const secret3 = generateSecret(64)`
    },
    timePeriod: {
        name: "timePeriod",
        description:
            "Automatically returns the current period of the day based on time. Useful for greetings, themes, and time-based UI logic.",
        params: [
            {
                name: "date",
                type: "Date",
                optional: true,
                default: "current date & time",
                description:
                    "Optional date object. Defaults to current date & time."
            }
        ],
        returns: `"morning" | "afternoon" | "evening" | "night"`,
        example: `import { timePeriod } from "utills"

timePeriod()
timePeriod(new Date("2025-01-01T18:30:00"))`
    }
};

export default methods;
