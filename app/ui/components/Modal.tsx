"use client";
import { useEffect, useRef } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      prev?.focus?.();
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* 遮罩层 */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      {/* 主内容 */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative z-10 w-[92vw] sm:w-[600px] lg:w-[800px] max-h-[85vh] rounded-2xl bg-white shadow-xl focus:outline-none"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="rounded p-1.5 hover:bg-gray-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* 内容区 */}
        <div className="px-5 py-4 overflow-y-auto max-h-[70vh]">
          {children}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
