import { useParams } from "react-router-dom";
import methods from "../api/methods.data.js";
import MarkdownRenderer from "../components/MarkdownRenderer";
import CodeBox from "../components/CodeBox";
export default function MethodPage() {
    const { method } = useParams();
    const data = methods[method];

    if (!data) {
        return (
            <div className="p-8">
                <h1 className="text-xl font-semibold">Method not found</h1>
            </div>
        );
    }

    return (
        <article className="container mx-auto py-6 space-y-10 overflow-x-hidden">
            {/* Header */}
            <header className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {data.name}
                    <span className="text-gray-400">()</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg">
                    {data.description}
                </p>
            </header>

            {/* Parameters */}
            {data.params?.length > 0 && (
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Parameters</h2>

                    {/* ===== Desktop / Tablet Table ===== */}
                    <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left">
                                        Name
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        Type
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        Optional
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        Default
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        Description
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.params.map(p => (
                                    <tr
                                        key={p.name}
                                        className="border-t border-gray-200 dark:border-gray-700"
                                    >
                                        <td className="px-4 py-3 font-mono text-blue-600 dark:text-blue-400">
                                            {p.name}
                                        </td>
                                        <td className="px-4 py-3">{p.type}</td>
                                        <td className="px-4 py-3">
                                            {p.optional ? "Yes" : "No"}
                                        </td>
                                        <td className="px-4 py-3">
                                            {p.default ?? "-"}
                                        </td>
                                        <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                                            {p.description}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* ===== Mobile Card View ===== */}
                    <div className="space-y-4 md:hidden">
                        {data.params.map(p => (
                            <div
                                key={p.name}
                                className="rounded-lg border border-gray-200 dark:border-gray-700 py-4 px-3 space-y-2"
                            >
                                <div className="flex items-center justify-between">
                                    <code className="font-mono text-blue-600 dark:text-blue-400">
                                        {p.name}
                                    </code>
                                    <span className="text-xs rounded bg-gray-100 dark:bg-gray-800 px-2 py-0.5">
                                        {p.type}
                                    </span>
                                </div>

                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {p.description}
                                </p>

                                <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
                                    <span>
                                        <strong>Optional:</strong>{" "}
                                        {p.optional ? "Yes" : "No"}
                                    </span>
                                    <span>
                                        <strong>Default:</strong>{" "}
                                        {p.default ?? "-"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Returns */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Returns</h2>
                <code className="inline-block rounded bg-gray-100 dark:bg-gray-800 px-3 py-1 font-mono text-sm">
                    {data.returns}
                </code>
            </section>

            {/* Example */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Example</h2>
                <CodeBox code={data.example} />
            </section>
        </article>
    );
}
