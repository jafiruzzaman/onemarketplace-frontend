import {EditorContent, useEditor} from "@tiptap/react";
import {StarterKit} from "@tiptap/starter-kit";
import {EditorToolbar} from "./editor-toolbar";

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {
      attributes: {
        class: "min-h-[400px] px-4 py-4 outline-none prose prose-sm max-w-none",
      },
    },
  });
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background">
      {/*tooltip*/}
      <div className="border-b border-border p-2">
        <EditorToolbar editor={editor} />
      </div>
      <EditorContent
        editor={editor}
        className="
        min-h-[400px]
        px-4
        py-4

        [&_.ProseMirror]:min-h-[400px]
        [&_.ProseMirror]:outline-none

        [&_.ProseMirror_ul]:list-disc
        [&_.ProseMirror_ul]:pl-6

        [&_.ProseMirror_ol]:list-decimal
        [&_.ProseMirror_ol]:pl-6

        [&_.ProseMirror_blockquote]:border-l-4
        [&_.ProseMirror_blockquote]:border-border
        [&_.ProseMirror_blockquote]:pl-4
        [&_.ProseMirror_blockquote]:italic
        [&_.ProseMirror_blockquote]:text-text-muted
      "
      />
    </div>
  );
};
