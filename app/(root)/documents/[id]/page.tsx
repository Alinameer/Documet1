"use client";
import { useState } from "react";
import React from "react";
import MarkdownRenderer from "@/components/editor/MarkdownRenderer";
import { Editor } from "@/components/editor/Editor";

const Home = () => {
  const [editValue, setEditValue] = useState("");
  const [showPreview, setShowPreview] = useState(false); // Default: Preview hidden

  return (
    <div className="min-h-screen p-6 bg-gray-50 ">
      <h1 className="text-2xl text-black font-bold text-center mb-6">
        Markdown Previewer
      </h1>

      {/* Toggle Button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowPreview((prev) => !prev)}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          {showPreview ? "Editor Only" : "Preview Markdown"}
        </button>
      </div>

      {/* Editor and Preview Section */}
      <div
        className={`${
          showPreview
            ? "grid grid-cols-1 md:grid-cols-2 gap-6"
            : "flex flex-col"
        } items-center w-full max-w-7xl mx-auto`}
      >
        {/* Editor */}
        <div
          className={`editor-container border rounded p-4 bg-white shadow-md ${
            showPreview ? "w-full" : "w-full h-[80vh]"
          }`}
        >
          <h2 className="text-lg font-semibold mb-2">Markdown Editor</h2>
          <Editor setEditValue={setEditValue} initialHtml={editValue} />
        </div>

        {/* Markdown Preview */}
        {showPreview && (
          <div className="preview-container h-full border rounded p-4 bg-white shadow-md w-full">
            <h2 className="text-lg font-semibold text-black mb-2">Preview</h2>
            <MarkdownRenderer content={editValue} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
