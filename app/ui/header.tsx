"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/LOGO.png";

/**
 * 顶部导航栏（响应式：移动端汉堡 + 全屏菜单）
 */
export default function Header() {
  const [currentHash, setCurrentHash] = useState<string>("");
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  // 监听 URL hash 变化
  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // 打开菜单时锁定背景滚动 + ESC 关闭
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // 点击菜单项后关闭
  const handleNavClick = () => setOpen(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur shadow-sm fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6">
        {/* 左：LOGO（移动端缩小） */}
        <a href="#" className="flex items-center">
          <Image
            src={logo}
            alt="HSM AUS PTY LTD Logo"
            priority
            className="h-7 w-auto sm:h-8 md:h-10"
          />
        </a>

        {/* 右：桌面菜单 */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-800">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`transition-colors hover:text-[#19538b] ${
                  currentHash === item.href ? "text-[#19538b] font-semibold" : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* 右：移动端汉堡按钮 */}
        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
        >
          {/* 汉堡图标 */}
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>

      {/* 移动端全屏菜单（覆盖层） */}
      {open && (
        <div className="fixed inset-0 z-[60]">
          {/* 背景遮罩 */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          {/* 菜单面板 */}
          <div className="absolute inset-0 bg-white flex flex-col">
            {/* 顶部：logo + 关闭 */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b">
              <a href="#" onClick={() => setOpen(false)} className="flex items-center">
                <Image src={logo} alt="HSM AUS PTY LTD Logo" className="h-7 w-auto sm:h-8" />
              </a>
              <button
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="rounded-md p-2.5 hover:bg-gray-100"
              >
                {/* X 图标 */}
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
                </svg>
              </button>
            </div>

            {/* 菜单项 */}
            <ul className="flex-1 flex flex-col items-center justify-center gap-6 text-xl font-medium text-gray-800">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className={`block px-4 py-2 rounded hover:bg-gray-100 ${
                      currentHash === item.href ? "text-[#19538b] font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* 底部：版权/社交占位（可删） */}
            <div className="px-6 py-4 text-center text-sm text-gray-500 border-t">
              © {new Date().getFullYear()} HSM AUS PTY LTD
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

