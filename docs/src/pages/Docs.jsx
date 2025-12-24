import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import MarkdownRenderer from "../components/MarkdownRenderer";

export default function Docs() {
    const { slug } = useParams();
    const [content, setContent] = useState("");

    useEffect(() => {
        import(`../docs/${slug}.md?raw`)
            .then(res => setContent(res.default))
            .catch(() => setContent("# Not Found"));
    }, [slug]);

    return (
      

                <MarkdownRenderer content={content} />
          
      
    );
}
