/**
 * ServiceSection - 服务介绍区
 * 包含三张服务卡片：Import / Export / Logistic Solutions
 */
import importPIC from "../../../public/importPIC.png";
import exportPIC from "../../../public/exportPIC.png";
import logisticPIC from "../../../public/logisticPIC.png";
const services = [
  {
    title: "Import Services",
    subtitle: "Sourcing & Compliance",
    content:
      "Curated Australian beef, dairy and wine. Full compliance support: specs, certificates (including HALAL), inspection & quarantine, and customs paperwork. ",
      pic: importPIC,
  },
  {
    title: "Export Services",
    subtitle: "End-to-End to Asia",
    content:
      "Farm-to-port export service to Asian markets: booking, documentation, AQIS/Biosecurity, customs declaration, and temperature-controlled handling.",
 pic: exportPIC,
    },
  {
    title: "Logistic Solutions",
    subtitle: "Cold-Chain & Tracking",
    content:
      "Sea & air options, FCL/LCL, reefer containers, insurance and real-time tracking. Last-mile coordination at destination ports.",
  pic: logisticPIC,
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
                    className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition min-h-[380px]"
                >
                    {/* 图片图标占位 */}
                  <div
  className="w-full h-30 rounded-md mb-4 flex items-center justify-center text-blue-400 bg-cover bg-center bg-no-repeat"
style={{ backgroundImage: service.pic ? `url(${service.pic.src})` : "none" }}
>
                  
                    </div>
                    <h3 className="font-semibold text-blue-700">{service.title}</h3>
                    <br />
                    <p className="text-sm font-medium">{service.subtitle}</p>
                    <p className="text-gray-600 text-sm mt-3">{service.content}</p>
            
                </div>
                ))}
            </div>
            </div>
        </section>
    );
}
