import React, { useState } from "react";
import Button from "../ui/Button";
import { Page } from "../../types";
import { useTheme } from "../../contexts/ThemeContext";

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const NAV_LINKS = [
  { name: "Dashboard", page: Page.DASHBOARD },
  { name: "Home", page: Page.HOME },
  { name: "How It Works", page: Page.HOW_IT_WORKS },
  { name: "Buy Properties", page: Page.BUY_PROPERTIES },
  { name: "About", page: Page.ABOUT },
  { name: "Contact", page: Page.CONTACT },
];

const Logo: React.FC<{ onNavigate: (page: Page) => void }> = ({
  onNavigate,
}) => (
  <div
    className="flex items-center space-x-2 cursor-pointer"
    onClick={() => onNavigate(Page.HOME)}
  >
    <div className="p-1.5 bg-accent-green rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    </div>
    <span className="text-2xl font-bold text-text-dark dark:text-white">
      <span className="hidden sm:inline">Asset Cycle Africa</span>
      <span className="sm:hidden">ACA</span>
    </span>
  </div>
);

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <div className="max-w-7xl mx-auto bg-white/80 dark:bg-gray-900/90 backdrop-blur-md rounded-full shadow-lg border border-white/30 dark:border-gray-700">
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(Page.HOME);
              }}
            >
              <Logo onNavigate={onNavigate} />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <a
                    key={link.name}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.page);
                    }}
                    className={`font-medium px-4 py-2 rounded-full transition-colors duration-300 ${
                      isActive
                        ? "bg-gray-200 dark:bg-gray-700 text-text-dark dark:text-white"
                        : "text-text-dark dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>

            <Button
              onClick={() => onNavigate(Page.GET_STARTED)}
              variant="secondary"
              size="md"
              className="rounded-lg"
            >
              Log Out
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-text-dark dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-text-dark"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 dark:border-gray-700 overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.page);
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-text-dark dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="px-5 py-4">
            <Button
              onClick={() => {
                onNavigate(Page.GET_STARTED);
                setIsMobileMenuOpen(false);
              }}
              variant="secondary"
              className="w-full rounded-lg"
            >
              Log Out
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
