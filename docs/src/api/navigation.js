import methods from "./methods.data.js";

// Sidebar auto generate from method data.
const apiLinks = methods.map(method => ({
    label: method.name,
    slug: `api/${method.name}`
}));

console.log(apiLinks);
const navigation = [
    {
        title: "Getting Started",
        items: [
            { label: "Introduction", slug: "introduction" },
            { label: "Installation", slug: "installation" }
        ]
    },
    {
        title: "API Reference",
        items: apiLinks
    }
];

export default navigation;
