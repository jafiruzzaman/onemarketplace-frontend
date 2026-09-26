import {
  ItalicIcon,
  LeftToRightListBulletIcon,
  LeftToRightListNumberIcon,
  QuoteUpIcon,
  Redo02Icon,
  TextBoldIcon,
  Undo02Icon,
} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";
import type {Editor} from "@tiptap/react";

interface BlogEditorToolbarProps {
  editor: Editor | null;
}

export const EditorToolbar = ({editor}: BlogEditorToolbarProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-border p-2">
      {/* Bold */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`rounded-md p-2 transition-colors hover:bg-muted ${
          editor.isActive("bold") ? "bg-muted" : ""
        }`}
      >
        <HugeiconsIcon icon={TextBoldIcon} size={18} />
      </button>

      {/* Italic */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`rounded-md p-2 transition-colors hover:bg-muted ${
          editor.isActive("italic") ? "bg-muted" : ""
        }`}
      >
        <HugeiconsIcon icon={ItalicIcon} size={18} />
      </button>

      {/* Bullet List */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`rounded-md p-2 transition-colors hover:bg-muted ${
          editor.isActive("bulletList") ? "bg-muted" : ""
        }`}
      >
        <HugeiconsIcon icon={LeftToRightListBulletIcon} size={18} />
      </button>

      {/* Numbered List */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`rounded-md p-2 transition-colors hover:bg-muted ${
          editor.isActive("orderedList") ? "bg-muted" : ""
        }`}
      >
        <HugeiconsIcon icon={LeftToRightListNumberIcon} size={18} />
      </button>

      {/* Blockquote */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`rounded-md p-2 transition-colors hover:bg-muted ${
          editor.isActive("blockquote") ? "bg-muted" : ""
        }`}
      >
        <HugeiconsIcon icon={QuoteUpIcon} size={18} />
      </button>

      {/* Undo */}
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        className="rounded-md p-2 transition-colors hover:bg-muted"
      >
        <HugeiconsIcon icon={Undo02Icon} size={18} />
      </button>

      {/* Redo */}
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        className="rounded-md p-2 transition-colors hover:bg-muted"
      >
        <HugeiconsIcon icon={Redo02Icon} size={18} />
      </button>
    </div>
  );
};
