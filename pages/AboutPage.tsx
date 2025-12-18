import React from "react";
import Button from "../components/ui/Button";
import { Page } from "../types";

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-light-bg">
      {/* Hero Section */}
      <section
        className="relative pt-40 pb-24 text-text-dark bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-80"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-dark">
            About <span className="text-cta-brown">Asset Cycle Africa</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-slate-gray">
            We are on a mission to democratize Properties ownership in Uganda,
            making it accessible, transparent, and secure for everyone.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                alt="Team meeting"
                className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-text-dark">Our Mission</h2>
              <p className="text-slate-gray text-lg leading-relaxed">
                To empower individuals to build wealth through fractional
                Properties ownership. We believe that Properties is a
                fundamental asset that should not be reserved for the wealthy
                few. By breaking down barriers to entry, we enable anyone to
                invest in their future, one square foot at a time.
              </p>

              <h2 className="text-3xl font-bold text-text-dark pt-4">
                Our Vision
              </h2>
              <p className="text-slate-gray text-lg leading-relaxed">
                A future where every Ugandan has the opportunity to own a piece
                of their country, fostering economic growth and financial
                independence across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-subtle-gray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Transparency",
                desc: "We operate with openness in every transaction, ensuring our investors have complete visibility into their assets.",
              },
              {
                title: "Integrity",
                desc: "We adhere to the highest ethical standards, prioritizing the security and legality of every Properties title.",
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
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-cta-brown mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-gray">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-navy text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Start your journey towards financial freedom with Asset Cycle Africa
            today.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate(Page.INVEST)}
          >
            Start Investing
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
