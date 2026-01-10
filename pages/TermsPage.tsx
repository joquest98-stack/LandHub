import React, { useEffect } from "react";
import { Page } from "../types";

const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-light-bg dark:bg-gray-900 min-h-screen pt-24 pb-16 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-text-dark dark:text-white mb-2">
          Terms of Service
        </h1>
        <p className="text-slate-gray dark:text-gray-400 mb-8">
          Last Updated: October 26, 2023
        </p>

        <div className="space-y-8 text-text-dark dark:text-gray-300 leading-relaxed">
          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Asset Cycle Africa platform
              ("Platform"), you agree to comply with and be bound by these Terms
              of Service ("Terms"). If you do not agree to these Terms, you may
              not access or use the Platform. These Terms constitute a legally
              binding agreement between you and Asset Cycle Africa.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              2. User Accounts
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You must be at least 18 years old to create an account.</li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
              <li>
                You agree to provide accurate, current, and complete information
                during the registration process.
              </li>
              <li>
                Asset Cycle Africa reserves the right to suspend or terminate
                accounts that violate these Terms or engage in fraudulent
                activity.
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              3. Investment Services
            </h2>
            <p className="mb-4">
              Asset Cycle Africa provides a platform for fractional property
              ownership. By investing through the Platform, you acknowledge
              that:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                You are acquiring a beneficial interest in a property trust or
                legal entity holding the property.
              </li>
              <li>
                Past performance of any property is not indicative of future
                results.
              </li>
              <li>
                Property values can fluctuate, and investments may lose value.
              </li>
              <li>
                Liquidity is not guaranteed, and selling your shares may take
                time via our secondary market (when available).
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              4. Fees and Payments
            </h2>
            <p>
              We charge fees for our services, which are disclosed prior to any
              investment. These may include:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Platform Fee:</strong> A percentage of the investment
                amount to cover operational costs.
              </li>
              <li>
                <strong>Management Fee:</strong> An annual fee for the
                maintenance and administration of the property.
              </li>
              <li>
                <strong>Performance Fee:</strong> Applicable on capital
                appreciation upon exit, if specific hurdles are met.
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              5. Intellectual Property
            </h2>
            <p>
              The Platform, including its text, graphics, logos, and software,
              is the property of Asset Cycle Africa and is protected by
              copyright and other intellectual property laws. You may not
              reproduce, distribute, or create derivative works from any content
              on the Platform without our express written permission.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Asset Cycle Africa shall
              not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including loss of profits,
              data, or goodwill, arising out of or in connection with your use
              of the Platform.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              7. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of Uganda. Any disputes arising under these Terms shall
              be subject to the exclusive jurisdiction of the courts of Uganda.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
