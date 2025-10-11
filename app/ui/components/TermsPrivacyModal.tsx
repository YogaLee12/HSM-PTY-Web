"use client";
import { useState, useEffect } from "react";
import Modal from "./Modal";

interface TermsPrivacyModalProps {
  open: boolean;
  onClose: () => void;
  defaultTab?: "terms" | "privacy";
}

export default function TermsPrivacyModal({
  open,
  onClose,
  defaultTab = "terms",
}: TermsPrivacyModalProps) {
  const [tab, setTab] = useState<"terms" | "privacy">(defaultTab);

  useEffect(() => setTab(defaultTab), [defaultTab]);

  return (
    <Modal open={open} onClose={onClose} title="Legal">
      {/* Tab 按钮 */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setTab("terms")}
          className={`px-3 py-2 rounded border text-sm ${
            tab === "terms"
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
        >
          Terms of Service
        </button>
        <button
          onClick={() => setTab("privacy")}
          className={`px-3 py-2 rounded border text-sm ${
            tab === "privacy"
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
        >
          Privacy Policy
        </button>
      </div>

      {/* 内容区 */}
      {tab === "terms" ? (
        <div className="prose prose-sm max-w-none text-gray-800">
          <h2 className="text-xl font-semibold mb-1">Terms of Service</h2>
          <p className="text-sm text-gray-500 mb-4">Effective Date: 11/10/2025</p>
          <p>
            Welcome to <strong>HSM AUS PTY LTD</strong> (“we,” “our,” or “us”). By accessing or using our website or contacting us through our online forms, you agree to be bound by these Terms of Service. Please read them carefully before using our site.
          </p>

          <h3 className="font-semibold mt-6 mb-2">1. Use of Our Website</h3>
          <ul className="list-disc list-inside">
            <li>Comply with all applicable local and international laws.</li>
            <li>Do not send unauthorized promotional materials or spam.</li>
            <li>Do not attempt to gain unauthorized access to our systems or data.</li>
          </ul>

          <h3 className="font-semibold mt-6 mb-2">2. Service Information</h3>
          <p>
            All product and logistics information on this site is for general reference only. We do not guarantee absolute accuracy or completeness.
          </p>

          <h3 className="font-semibold mt-6 mb-2">3. Limitation of Liability</h3>
          <p>
            We are not liable for indirect or consequential losses arising from the use of our website or services, including loss of data or profit.
          </p>

          <h3 className="font-semibold mt-6 mb-2">4. Intellectual Property</h3>
          <p>
            All content, logos, and graphics belong to HSM AUS PTY LTD and may not be reused without written consent.
          </p>
        </div>
      ) : (
        <div className="prose prose-sm max-w-none text-gray-800">
          <h2 className="text-xl font-semibold mb-1">Privacy Policy</h2>
          <p className="text-sm text-gray-500 mb-4">Effective Date: 11/10/2025</p>

          <p>
            This Privacy Policy explains how <strong>HSM AUS PTY LTD</strong> (“we,” “our,” or “us”) collects, uses, and protects your personal data when you visit or contact us.
          </p>

          <h3 className="font-semibold mt-6 mb-2">1. Information We Collect</h3>
          <ul className="list-disc list-inside">
            <li>Personal details like name, email, phone, and company when submitting forms.</li>
            <li>Usage data such as IP, browser, and visited pages.</li>
          </ul>

          <h3 className="font-semibold mt-6 mb-2">2. How We Use Information</h3>
          <ul className="list-disc list-inside">
            <li>Respond to inquiries and provide services.</li>
            <li>Improve our website experience.</li>
            <li>Comply with regulations and legal obligations.</li>
          </ul>

          <h3 className="font-semibold mt-6 mb-2">3. Your Rights</h3>
          <p>
            You can request access or deletion of your personal data by contacting{" "}
            <a
              href="mailto:yumin56.ab@gmail.com"
              className="text-blue-600 underline"
            >
              yumin56.ab@gmail.com
            </a>.
          </p>
        </div>
      )}
    </Modal>
  );
}
