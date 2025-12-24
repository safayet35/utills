import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Docs from "./pages/Docs";
import AppLayout from "./layout/AppLayout";
import MethodPage from "./pages/MethodPage";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<div>Not found</div>}></Route>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/docs/:slug" element={<Docs />} />
                    <Route path="/docs/api/:method" element={<MethodPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
