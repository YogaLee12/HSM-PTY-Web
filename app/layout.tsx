import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";

export const metadata = {
  title: "HSM AUS PTY LTD",
  description: "Official website for HSM AUS PTY LTD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* 全局导航栏 */}
        <Header />

        {/* 页面主体内容 */}
        {children}

        {/* 页脚 */}
        <Footer />
      </body>
    </html>
  );
}
