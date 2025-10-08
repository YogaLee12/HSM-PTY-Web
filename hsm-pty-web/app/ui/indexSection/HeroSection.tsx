/**
 * HeroSection - 首页顶部横幅部分
 * 包含标题、简介、按钮和背景图片（地球、卡车、飞机、轮船）
 */
export default function HeroSection() {
    return (
        <section className="w-full bg-blue-800 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* 左侧文字区 */}
            <div className="space-y-4 md:w-1/2">
            <h1 className="text-4xl font-bold leading-tight">
                HSM AUS
                <br />
                PTY LTD
            </h1>
            <p className="text-sm text-blue-100 max-w-md">
                A professional Australian agricultural exporter, delivering premium
                beef, dairy, and wine to Asian markets.
                </p>
                <button className="mt-4 bg-white text-blue-800 font-semibold py-2 px-4 rounded hover:bg-blue-100">
                More Info
            </button>
            </div>
    
            {/* 右侧图片占位区 */}
            <div className="relative md:w-1/2 mt-8 md:mt-0">
            {/* 此处应放置背景图（世界地图 + 飞机 + 卡车 + 轮船） */}
            <div className="w-full h-64 bg-blue-700 rounded-lg flex items-center justify-center text-blue-200">
              {/* 图片占位符 */}
                <span className="text-sm">[ 这里预留地球与运输图像区域 ]</span>
                </div>
            </div>
            </div>
        </section>
    );
    }
  