"use client";

import Theme from "./plugins/Theme";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode } from "@lexical/rich-text";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot } from "lexical";
import React, { useEffect } from "react";


function OnChangePlugin({ onChange }: { onChange: (text: string) => void }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const unregister = editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const root = $getRoot();
        const text = root.getTextContent(); // Extract plain text content
        onChange(text); // Update parent state with the editor's content
      });
    });

    return () => {
      unregister();
    };
  }, [editor, onChange]);

  return null;
}

function Placeholder() {
  return <div className="editor-placeholder">Start typing...</div>;
}

export function Editor({ setEditValue}: any) {
  const editorConfig = {
    namespace: "Editor",
    nodes: [HeadingNode],
    theme: Theme,
    onError: (error: Error) => {
      console.error("Lexical Error:", error);
    },
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container size-full">
        <ToolbarPlugin />

        <div className="editor-inner h-full">
         <OnChangePlugin onChange={setEditValue} />
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="editor-input h-full" />
            }
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}
