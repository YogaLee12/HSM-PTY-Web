"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/LOGO.png";
/**
 * 顶部导航栏组件（锚点跳转）
 * 包含 LOGO 与三个菜单项（Home, Services, Contact）
 */
export default function Header() {
    const [currentHash, setCurrentHash] = useState<string>("");

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];

    // 监听 URL hash 变化
    useEffect(() => {
        const handleHashChange = () => {
        setCurrentHash(window.location.hash);
        };

        window.addEventListener("hashchange", handleHashChange);
        handleHashChange(); // 初始化时也更新一次

        return () => {
        window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    return (
        <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-3">
            {/* 左侧LOGO区域 */}
            <div className="text-2xl font-bold text-blue-800">
            <a href="#"><Image  src={logo} alt="HSM PTY LTD Logo" width={150} height={50} /></a>
            </div>

            {/* 右侧菜单项 */}
            <ul className="flex space-x-8 text-gray-800">
            {navItems.map((item) => (
                <li key={item.href}>
                <a
                    href={item.href}
                    className={`hover:text-[#19538b] ${
                    currentHash === item.href ? "text-[#19538b] font-semibold" : ""
                    }`}
                >
                    {item.name}
                </a>
                </li>
            ))}
            </ul>
        </nav>
        </header>
    );
}
