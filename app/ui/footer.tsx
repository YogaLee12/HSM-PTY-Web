/**
 * Footer - 页脚组件
 * 包含公司名、联系信息、版权信息
 */
export default function Footer() {
    return (
        <footer className="w-full bg-[#3074b3] text-white py-6 px-6 mt-10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4 text-sm">
            {/* 公司信息 */}
            <div>
                <h3 className="font-bold text-lg">HSM AUS PTY LTD</h3>
                <p className="text-blue-200">Working hours: 11:00-8:00</p>
            </div>
    
            {/* 联系方式 */}
            <div>
                <h4 className="font-semibold mb-1">Contact</h4>
                <p> yumin56.ab@gmail.com</p>
            </div>
    
            {/* 版权信息 */}
            <div className="md:text-right text-blue-200">
                © 2025 HSM AUS PTY LTD. All rights reserved.
            </div>
            </div>
        </footer>
    );
}
