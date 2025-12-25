import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import HomePage from "./pages/HomePage";
import Docs from "./pages/Docs";
import AppLayout from "./layout/AppLayout";
import MethodPage from "./pages/MethodPage";
import NotFoundPage from "./pages/NotFoundPage";
export default function App() {
    return (
        <BrowserRouter>
        <Analytics/>
            <Routes>
                <Route path="*" element={<NotFoundPage />}></Route>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/docs/:slug" element={<Docs />} />
                    <Route path="/docs/api/:method" element={<MethodPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
