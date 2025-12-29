// wee add here are all available methods
// contributor add your method information like this pattern

const methods = [
    {
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

    {
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

     {
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
     {
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
    },
    
     {
  name: "readTime",
  description: "Estimates how long it will take to read a piece of text.",
  params: [
    {
      name: "input",
      type: "string | string[]",
      optional: false,
      description: "The text content to calculate reading time for"
    },
    {
      name: "options",
      type: "{ wordsPerMinute?: number }",
      optional: true,
      description: "Optional configuration such as reading speed"
    }
  ],
  returns: "{ words: number; minutes: number; text: string }",
  example: `import { readTime } from "utills"

readTime("My blog post content");`
},

{
  name: "fuzzySearch",
  description: "Performs an advanced fuzzy search on arrays with support for multiple and nested keys.",
  params: [
  {
    name: "list",
    type: "Array<object>",
    optional: false,
    description: "The array of objects to perform search on"
  },
  {
    name: "query",
    type: "string",
    optional: false,
    description: "The search text used to find matching items"
  },
  {
    name: "options",
    type: "object",
    optional: true,
    default: "{}",
    description: "Optional configuration object for advanced search control"
  },
  {
    name: "options.keys",
    type: "string[]",
    optional: true,
    default: "undefined",
    description:
      "List of keys to search on. Supports multiple keys and nested keys using dot notation (e.g. 'author.name')"
  },
  {
    name: "options.caseSensitive",
    type: "boolean",
    optional: true,
    default: "false",
    description:
      "If true, search will be case-sensitive. If false, search ignores letter casing"
  },
  {
    name: "options.threshold",
    type: "number",
    optional: true,
    default: 0.4,
    description:
      "Controls how strict the fuzzy matching is. Value must be between 0 and 1 (lower is stricter, higher is looser)"
  }
],
  returns: "Array<object>",
  example: `import { fuzzySearch } from "utills"

fuzzySearch(users, "john", { keys: ["profile.username", "email"] });`
},
 {
  name: "paginate",
  description: "Generates frontend pagination data from an array.",
  params: [
    {
      name: "list",
      type: "Array<any>",
      optional: false,
      description: "The full list of items to paginate"
    },
    {
      name: "options",
      type: "object",
      optional: true,
      default: "{}",
      description: "Optional pagination configuration"
    },
    {
      name: "options.page",
      type: "number",
      optional: true,
      default: 1,
      description: "Current page number (1-based index)"
    },
    {
      name: "options.pageSize",
      type: "number",
      optional: true,
      default: 10,
      description: "Number of items per page"
    }
  ],
  returns: "{ data: any[]; page: number; pageSize: number; totalItems: number; totalPages: number; hasNext: boolean; hasPrev: boolean }",
  example: `import { paginate } from "utills"

paginate(items, { page: 1, pageSize: 10 });`
},
 {
  name: "debounce",
  description: "Creates a debounced function that delays execution until after a wait time.",
  params: [
    {
      name: "fn",
      type: "Function",
      optional: false,
      description: "The function to debounce"
    },
    {
      name: "delay",
      type: "number",
      optional: false,
      description: "Delay in milliseconds before invoking the function"
    }
  ],
  returns: "Function & { cancel(): void; flush(): void }",
  example: `import { debounce } from "utills";

// Step 1: Debounce a function
const debouncedSearch = debounce((value: string) => {
  console.log("Search query:", value);
}, 300);

// debouncedSearch is now a function, but it also has two extra methods:
// 1. cancel() → cancels any pending execution
// 2. flush() → immediately executes the function


// Step 2: Use the debounced function (simulate typing)
debouncedSearch("react");    // won't call immediately
debouncedSearch("react j");  // previous timer canceled, new timer starts
debouncedSearch("react js"); // timer reset again

// After 300ms, it will log:
/// Search query: react js

// Step 3: Flush to execute immediately
debouncedSearch.flush(); 
/// Search query: react js (if 300ms hasn't passed yet)

// Step 4: Cancel to prevent execution
debouncedSearch.cancel(); 
/// Function execution canceled, nothing will be printed`
}
    
    
]

export default methods;
