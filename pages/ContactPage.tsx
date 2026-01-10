import React, { useState } from "react";
import Button from "../components/ui/Button";
import { Page } from "../types";

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="bg-light-bg dark:bg-gray-900 min-h-screen w-full transition-colors duration-300">
      <section
        className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 text-text-dark bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-white/80 dark:bg-black/70 backdrop-blur-sm transition-opacity duration-300"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-text-dark dark:text-white">
            Get in <span className="text-cta-brown">Touch</span>
          </h1>
          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-slate-gray dark:text-gray-300">
            Have questions about investing or listing properties? We're here to
            help you every step of the way.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-dark dark:text-white mb-4">
                  Contact Information
                </h2>
                <p className="text-slate-gray dark:text-gray-400 text-base md:text-lg leading-relaxed">
                  Fill out the form or reach out to us directly via phone or
                  email.
                </p>
              </div>

              <div className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm lg:bg-transparent lg:shadow-none lg:border-0 lg:p-0">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-cta-brown/10 dark:bg-cta-brown/20 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-cta-brown"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-dark dark:text-white">
                      Phone
                    </h3>
                    <p className="text-slate-gray dark:text-gray-400 mt-1 text-sm sm:text-base">
                      +256 700 123 456
                      <br />
                      +256 772 987 654
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-cta-brown/10 dark:bg-cta-brown/20 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-cta-brown"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-dark dark:text-white">
                      Email
                    </h3>
                    <p className="text-slate-gray dark:text-gray-400 mt-1 text-sm sm:text-base break-all">
                      support@assetcycleafrica.com
                      <br />
                      info@assetcycleafrica.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 md:p-10 transition-colors duration-300">
              <h2 className="text-2xl font-bold text-text-dark dark:text-white mb-6">
                Send us a Message
              </h2>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-600 dark:text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-text-dark dark:text-white">
                    Message Sent!
                  </h3>
                  <p className="text-slate-gray dark:text-gray-400">
                    Thank you for contacting us. We will get back to you
                    shortly.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setStatus("idle")}
                    className="mt-4 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-gray dark:text-gray-400 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cta-brown/20 focus:border-cta-brown outline-none transition-all text-text-dark dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-gray dark:text-gray-400 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cta-brown/20 focus:border-cta-brown outline-none transition-all text-text-dark dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-gray dark:text-gray-400 mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 text-base bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cta-brown/20 focus:border-cta-brown outline-none transition-all appearance-none text-text-dark dark:text-white"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="investment">Investment Inquiry</option>
                      <option value="selling">Selling Property</option>
                      <option value="support">Customer Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-gray dark:text-gray-400 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-base bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cta-brown/20 focus:border-cta-brown outline-none transition-all resize-none text-text-dark dark:text-white"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className={`w-full ${
                      status === "submitting"
                        ? "opacity-75 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
