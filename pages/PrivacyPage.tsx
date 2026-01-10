import React, { useEffect } from "react";

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-light-bg dark:bg-gray-900 min-h-screen pt-24 pb-16 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-text-dark dark:text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-slate-gray dark:text-gray-400 mb-8">
          Last Updated: October 26, 2023
        </p>

        <div className="space-y-8 text-text-dark dark:text-gray-300 leading-relaxed">
          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information that identifies, relates to, describes, or
              could reasonably be linked, directly or indirectly, with you
              ("Personal Data"). This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Identity Data:</strong> Name, government ID number, date
                of birth.
              </li>
              <li>
                <strong>Contact Data:</strong> Email address, phone number,
                mailing address.
              </li>
              <li>
                <strong>Financial Data:</strong> Bank account details, payment
                card information, transaction history.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our
                website and services, including IP address and browser type.
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p>We use your Personal Data for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                To provide and maintain our Service, including managing your
                investments.
              </li>
              <li>
                To verify your identity in compliance with KYC (Know Your
                Customer) and AML (Anti-Money Laundering) regulations.
              </li>
              <li>
                To communicate with you about your account, updates, and
                promotional offers.
              </li>
              <li>To improve our Platform and customer experience.</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              3. Information Sharing
            </h2>
            <p>
              We do not sell your Personal Data. We may share your information
              with:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Service Providers:</strong> Third-party vendors who
                perform services on our behalf (e.g., payment processing, data
                analytics).
              </li>
              <li>
                <strong>Legal Obligations:</strong> When required by law,
                subpoena, or other legal process.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, sale, or asset transfer.
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              4. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              Personal Data. This includes encryption, secure servers, and
              access controls. However, no method of transmission over the
              Internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              5. Your Rights
            </h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>
                Request deletion of your data (subject to legal retention
                requirements).
              </li>
              <li>Withdraw consent for marketing communications.</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:privacy@assetcycleafrica.com"
                className="text-cta-brown hover:underline"
              >
                privacy@assetcycleafrica.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
