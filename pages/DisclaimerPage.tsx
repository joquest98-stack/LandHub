import React, { useEffect } from "react";

const DisclaimerPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-light-bg dark:bg-gray-900 min-h-screen pt-24 pb-16 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-text-dark dark:text-white mb-2">
          Investment Disclaimer
        </h1>
        <p className="text-slate-gray dark:text-gray-400 mb-8">
          Important Information for Investors
        </p>

        <div className="space-y-8 text-text-dark dark:text-gray-300 leading-relaxed">
          <section className="bg-red-50 dark:bg-red-900/10 p-6 md:p-8 rounded-2xl border border-red-100 dark:border-red-900/30">
            <h2 className="text-xl font-bold text-red-800 dark:text-red-400 mb-4 flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              Risk Warning
            </h2>
            <p className="text-red-900 dark:text-red-200 font-medium">
              Investing in real estate involves a high degree of risk and may
              not be suitable for all investors. You could lose some or all of
              your invested capital.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              1. General Information
            </h2>
            <p>
              The information provided on the Asset Cycle Africa platform is for
              general informational purposes only. It does not constitute
              financial, legal, tax, or investment advice. Asset Cycle Africa is
              not a registered broker-dealer or investment advisor. You should
              consult with your own professional advisors before making any
              investment decisions.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              2. No Guarantees
            </h2>
            <p>
              Asset Cycle Africa makes no representation or warranty, express or
              implied, regarding the accuracy, completeness, or reliability of
              any information provided on the Platform. Past performance of real
              estate assets, the Ugandan market, or specific projects is not a
              guarantee or predictor of future performance.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              3. Specific Risks
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Market Risk:</strong> Real estate markets are cyclical
                and can decline due to economic conditions.
              </li>
              <li>
                <strong>Liquidity Risk:</strong> Real estate is an illiquid
                asset class. You may not be able to sell your investment quickly
                or at a desired price.
              </li>
              <li>
                <strong>Development Risk:</strong> Construction projects may
                face delays, cost overruns, or failure to complete.
              </li>
              <li>
                <strong>Regulatory Risk:</strong> Changes in laws, zoning
                regulations, or tax codes could negatively impact investment
                value.
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              4. Forward-Looking Statements
            </h2>
            <p>
              Materials on this Platform may contain forward-looking statements
              based on current expectations, estimates, and projections. These
              statements involve risks and uncertainties that could cause actual
              results to differ materially from those anticipated. Words such as
              "expect," "anticipate," "project," "intend," "plan," and "believe"
              are intended to identify forward-looking statements.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-dark dark:text-white mb-4">
              5. Due Diligence
            </h2>
            <p>
              Investors are responsible for conducting their own due diligence.
              Asset Cycle Africa provides documentation and verification for
              listings, but this does not substitute for your own independent
              analysis and verification of the information.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
