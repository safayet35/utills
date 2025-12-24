import methods from "./methods.data.js";

// Sidebar auto generate from method data.
const apiLinks = Object.keys(methods).map(name => ({
    label: name,
    slug: `api/${name}`
}));

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
