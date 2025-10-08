/**
 * ServiceSection - 服务介绍区
 * 包含三张服务卡片：Import / Export / Logistic Solutions
 */

const services = [
    {
        title: "Import Services",
        subtitle: "Title",
        content:
            "Lorem ipsum placeholder for UI demos and wireframes, showcasing spacing, rhythm, and visual balance across responsive breakpoints.",
    },
    {
        title: "Export Services",
        subtitle: "Title",
        content:
            "Lorem ipsum placeholder for UI demos and wireframes, showcasing spacing, rhythm, and visual balance across responsive breakpoints.",
    },
    {
        title: "Logistic Solutions",
        subtitle: "Title",
        content:
            "Lorem ipsum placeholder for UI demos and wireframes, showcasing spacing, rhythm, and visual balance across responsive breakpoints.",
    },
    ];
    
    export default function ServiceSection() {
        return (
        <section className="w-full bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                {services.map((service, index) => (
                <div
                    key={index}
                    className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                >
                    {/* 图片图标占位 */}
                    <div className="w-full h-20 bg-blue-100 rounded-md mb-4 flex items-center justify-center text-blue-400">
                    <span className="text-xs">[ 图标占位 ]</span>
                    </div>
                    <h3 className="font-semibold text-blue-700">{service.title}</h3>
                    <p className="text-sm font-medium">{service.subtitle}</p>
                    <p className="text-gray-600 text-sm mt-3">{service.content}</p>
                    <p className="text-sm mt-3 text-gray-500">此处为介绍业务文本</p>
                </div>
                ))}
            </div>
            </div>
        </section>
    );
}
