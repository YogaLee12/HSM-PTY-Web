/**
 * ContactSection - 联系我们区域
 * 包含联系表单和右侧图片占位
 */
export default function ContactSection() {
    return (
        <section className="w-full bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* 左侧表单 */}
            <div className="bg-white rounded-2xl shadow p-8">
                <h2 className="text-xl font-semibold mb-2">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-6">
                Please fill in the form below to get in touch with us.
                </p>
    
                <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input
                    type="text"
                    placeholder="First name"
                    className="border p-2 rounded"
                    />
                    <input
                    type="text"
                    placeholder="Last name"
                    className="border p-2 rounded"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <input
                    type="email"
                    placeholder="Email address"
                    className="border p-2 rounded"
                    />
                    <input
                    type="tel"
                    placeholder="Phone number"
                    className="border p-2 rounded"
                    />
                </div>
                <textarea
                    placeholder="Message"
                    rows={4}
                    className="border p-2 rounded w-full"
                />
                <div className="flex items-center space-x-2 text-sm">
                    <input type="checkbox" className="border" />
                    <label>
                    I've read and agree with{" "}
                    <a href="#" className="underline">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline">
                        Private Policy
                    </a>
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                >
                    Submit
                </button>
                </form>
            </div>
    
            {/* 右侧图片区域 */}
            <div className="rounded-2xl h-96 bg-blue-700 flex items-center justify-center text-blue-100">
                {/* 占位图片说明 */}
                <span className="text-sm">[ 图片内容：Pictures and other content ]</span>
            </div>
            </div>
        </section>
    );
}
