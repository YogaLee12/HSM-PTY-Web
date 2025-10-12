"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import logo from "../../public/LOGO.png";

/**
 * 顶部导航（含：hash 高亮、移动端全屏菜单、视口变化监听）
 * 改进点：
 * 1) 移动端菜单与 header 分离渲染，避免 backdrop/fixed 冲突
 * 2) 监听 `matchMedia("(min-width: 768px)")`，当切到桌面视口自动关闭移动端菜单
 * 3) 仅在移动端菜单打开时锁定滚动（并在视口变化时自动恢复）
 */
export default function Header() {
  const [currentHash, setCurrentHash] = useState<string>("");
  const [open, setOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { name: "Home", href: "#home" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],
    []
  );

  // —— 工具：是否为桌面端（>= md）
  const isDesktop = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 768px)").matches;

  // Hash 高亮
  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash || "#home");
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // 锁定滚动（仅在移动端菜单打开时）
  useEffect(() => {
    if (open && !isDesktop()) {
      const root = document.documentElement;
      const prev = root.style.overflow;
      root.style.overflow = "hidden";
      return () => {
        root.style.overflow = prev;
      };
    }
  }, [open]);

  // ESC 关闭
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // —— 核心：监听视口变化（切到桌面端时，自动关闭移动菜单 & 恢复滚动）
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(min-width: 768px)");

    // 直接使用媒体查询变化事件（优于 window.resize 节流）
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        // 进入桌面端
        setOpen(false);
        document.documentElement.style.overflow = ""; // 保险恢复
      }
    };

    // 初始也兜底一次
    if (mql.matches) {
      setOpen(false);
      document.documentElement.style.overflow = "";
    }

    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <>
      {/* 头部 */}
      <header className="w-full bg-white/95 md:backdrop-blur shadow-sm fixed top-0 left-0 z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6">
          {/* LOGO */}
          <a href="#" className="flex items-center">
            <Image
              src={logo}
              alt="HSM AUS PTY LTD Logo"
              priority
              className="h-7 w-auto sm:h-8 md:h-10"
            />
          </a>

          {/* 桌面菜单 */}
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

          {/* 移动端汉堡 */}
          <button
            type="button"
            aria-label="Open navigation"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* 移动端全屏菜单（与 header 为兄弟节点渲染） */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* 背景遮罩 */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          {/* 面板 */}
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

            {/* 底部 */}
            <div className="px-6 py-4 text-center text-sm text-gray-500 border-t">
              © {new Date().getFullYear()} HSM AUS PTY LTD
            </div>
          </div>
        </div>
      )}
    </>
  );
}



