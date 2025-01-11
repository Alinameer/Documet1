import MarkdownEditor from "@/components/editor/MarkdownEditor";
import React from "react";

async function fetchInitialContent() {
  // Fetch or generate server-side content
  return "Welcome to Markdown Previewer!";
}

const Home = async () => {
  const initialContent = await fetchInitialContent();

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl text-black font-bold text-center mb-6">
        Markdown Previewer
      </h1>
      {/* Pass server-side data to the client component */}
      <MarkdownEditor initialContent={initialContent} />
    </div>
  );
};

export default Home;
