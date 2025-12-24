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
    }
};

export default methods;
