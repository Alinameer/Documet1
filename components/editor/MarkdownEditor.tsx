"use client";
import { useState } from "react";
import React from "react";
import { Editor } from "@/components/editor/Editor";
import MarkdownRenderer from "./MarkdownRenderer";
import { Button } from "../ui/button";

const MarkdownEditor = ({ initialContent }: { initialContent: string }) => {
  const [editValue, setEditValue] = useState(initialContent);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <div className="flex justify-center mb-4">
        <Button
          onClick={() => setShowPreview((prev) => !prev)}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          {showPreview ? "Editor Only" : "Preview"}
        </Button>
      </div>


      <div
        className={`${
          showPreview
            ? "grid grid-cols-1 md:grid-cols-2 gap-6"
            : "flex flex-col"
        } items-center w-full max-w-7xl mx-auto`}
      >
        {/* Editor */}
        <div
          className={`editor-container overflow-hidden h-full  border rounded bg-white shadow-md ${
            showPreview ? "w-full" : "w-full h-[80vh]"
          }`}
        >
          <Editor setEditValue={setEditValue} initialHtml={editValue} />
        </div>

        {/* Markdown Preview */}
        {showPreview && (
          <div className="preview-container h-full border rounded p-4 bg-white shadow-md w-full">
            <h2 className="text-lg font-semibold text-black mb-2">Preview</h2>
            <MarkdownRenderer className=" break-words  " content={editValue} />
          </div>
        )}
      </div>
    </>
  );
};

export default MarkdownEditor;
