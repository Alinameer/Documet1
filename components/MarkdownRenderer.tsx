import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/monokai-sublime.css';


const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <div className="prose bg-white">
      
    <ReactMarkdown
      remarkPlugins={[remarkGfm]} // Enables GitHub-flavored markdown
      rehypePlugins={[rehypeHighlight]} // Enables syntax highlighting
    >
      {content}
    </ReactMarkdown>
  </div>

  );
};

export default MarkdownRenderer;
