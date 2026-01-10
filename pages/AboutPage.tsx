import React from "react";
import Button from "../components/ui/Button";
import { Page } from "../types";

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-light-bg dark:bg-gray-900 transition-colors duration-300">
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-24 text-text-dark bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-80 dark:bg-black dark:opacity-70 transition-opacity duration-300"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-text-dark dark:text-white">
            About{" "}
            <span className="text-cta-brown block sm:inline mt-1 sm:mt-0">
              Asset Cycle Africa
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-slate-gray dark:text-gray-300">
            We are on a mission to democratize property ownership in Uganda,
            making it accessible, transparent, and secure for everyone.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1519309621146-2a47d1f7103a?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team meeting"
                className="rounded-2xl shadow-xl w-full object-cover h-[250px] sm:h-[300px] md:h-[400px]"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl md:text-3xl font-bold text-text-dark dark:text-white mb-3">
                  Our Mission
                </h2>
                <p className="text-slate-gray dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  To empower individuals to build wealth through fractional
                  property ownership. We believe that real estate is a
                  fundamental asset that should not be reserved for the wealthy
                  few.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl md:text-3xl font-bold text-text-dark dark:text-white mb-3">
                  Our Vision
                </h2>
                <p className="text-slate-gray dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  A future where every Ugandan has the opportunity to own a
                  piece of their country, fostering economic growth and
                  financial independence across the nation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-subtle-gray dark:bg-gray-800/50 py-12 md:py-20 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark dark:text-white">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Transparency",
                desc: "We operate with openness in every transaction, ensuring our investors have complete visibility into their assets.",
              },
              {
                title: "Integrity",
                desc: "We adhere to the highest ethical standards, prioritizing the security and legality of every property title.",
              },
              {
                title: "Innovation",
                desc: "We leverage technology to simplify complex processes, making real estate investment seamless and efficient.",
              },
              {
                title: "Community",
                desc: "We grow together. Our platform is built on the strength of our community of investors and property owners.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-lg md:text-xl font-bold text-cta-brown mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-gray dark:text-gray-400 text-sm md:text-base leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary-navy text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Join the Movement
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10">
            Start your journey towards financial freedom with Asset Cycle Africa
            today.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate(Page.INVEST)}
            className="w-full sm:w-auto"
          >
            Start Investing
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
