"use client";
import { useState } from "react";
import React from "react";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Editor } from "@/components/editor/Editor";

const Home = () => {

  const [editValue, setEditValue] = useState("");

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl text-black font-bold text-center mb-6">
        Markdown Previewer
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="editor-container border rounded p-4 bg-white shadow-md">
          <h2 className="text-lg font-semibold mb-2">Markdown Editor</h2>
          <Editor setEditValue={setEditValue} initialHtml={editValue} />
        </div>

        {/* Markdown Preview */}
        <div className="preview-container border rounded p-4 bg-white shadow-md">
          <h2 className="text-lg font-semibold text-black mb-2">Preview</h2>
          <MarkdownRenderer  content={editValue} />
        </div>
      </div>
    </div>
  );
};

export default Home;
