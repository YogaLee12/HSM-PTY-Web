"use client";

/**
 * ContactSection - 联系我们区域（手机 & 平板上图下表单）
 * - 手机/平板：图片在上，自动比例
 * - 桌面：左右排列，等高布局
 */
import { useState } from "react";
import ShipPic from "../../../public/Ship.png";
import TermsPrivacyModal from "../components/TermsPrivacyModal";

export default function ContactSection() {
  const [openLegal, setOpenLegal] = useState(false);
  const [defaultTab, setDefaultTab] = useState<"terms" | "privacy">("terms");
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!email || !message || !agree) {
      setStatus({ ok: false, msg: "Please complete required fields and accept the Terms & Privacy Policy." });
      return;
    }

    // TODO: 在这里接入 EmailJS / API 调用
    setStatus({ ok: true, msg: "Submitted locally. Hook your email/API logic in onSubmit." });
    e.currentTarget.reset();
    setAgree(false);
  };

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-1 lg:grid-cols-2
          gap-8
          items-stretch
        "
      >
        {/* 图片区（小屏在上） */}
        <div
          className="
            order-1 lg:order-2
            rounded-2xl overflow-hidden
            bg-cover bg-center bg-no-repeat
            w-full
            aspect-[16/10] sm:aspect-[16/9]
            lg:aspect-auto lg:h-auto
            flex-1
          "
          style={{ backgroundImage: `url(${ShipPic.src})` }}
          aria-label="Logistics ship photo"
          role="img"
        />

        {/* 表单区（小屏在下） */}
        <div className="order-2 lg:order-1 bg-white rounded-2xl shadow p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-1.5">Send Us a Message</h2>
          <p className="text-gray-500 text-sm mb-6">
            Please fill in the form below to get in touch with us.
          </p>

          <form className="space-y-4 sm:space-y-5" onSubmit={onSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="sr-only" htmlFor="firstName">First name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First name"
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                autoComplete="given-name"
              />
              <label className="sr-only" htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last name"
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                autoComplete="family-name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="sr-only" htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address *"
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                autoComplete="email"
                required
              />
              <label className="sr-only" htmlFor="phone">Phone number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone number"
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                autoComplete="tel"
              />
            </div>

            <label className="sr-only" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message *"
              rows={4}
              className="border p-2 rounded w-full resize-y focus:outline-none focus:ring-2 focus:ring-blue-500/60"
              required
            />

            <div className="flex items-start gap-2 text-sm">
              <input
                id="agree"
                type="checkbox"
                className="mt-1.5 border rounded"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                required
              />
              <label htmlFor="agree" className="text-gray-600">
                I have read and agree with{" "}
                <button
                  type="button"
                  className="underline text-blue-600"
                  onClick={() => { setDefaultTab("terms"); setOpenLegal(true); }}
                >
                  Terms of Service
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="underline text-blue-600"
                  onClick={() => { setDefaultTab("privacy"); setOpenLegal(true); }}
                >
                  Privacy Policy
                </button>.
              </label>
            </div>

            {status && (
              <p className={`text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>
                {status.msg}
              </p>
            )}

            <div className="pt-1">
              <button
                type="submit"
                className="w-full sm:w-auto bg-black text-white px-6 py-2.5 rounded hover:bg-gray-800 transition-colors disabled:opacity-60"
                disabled={!agree}
                aria-disabled={!agree}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 条款 / 隐私 弹窗 */}
      <TermsPrivacyModal
        open={openLegal}
        onClose={() => setOpenLegal(false)}
        defaultTab={defaultTab}
      />
    </section>
  );
}


