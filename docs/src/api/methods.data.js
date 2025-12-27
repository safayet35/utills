// wee add here are all available methods
// contributor add your method information like this pattern

// we can add a array of object but it's okay ;)

const methods = {
    randomId: {
        name: "randomId",
        description: "Generate a random unique ID.",
        params: [
            {
                name: "length",
                type: "number",
                optional: true,
                default: 8,
                description: "Length of the ID"
            }
        ],
        returns: "string",
        example: `
import { randomId } from "utills";

const id = randomId(10);
`
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
const secret3 = generateSecret(64)

console.log(secret1)`
    }
};

export default methods;
