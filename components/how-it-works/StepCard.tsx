import React from "react";

interface StepCardProps {
  stepNumber: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 flex flex-col items-center">
      <div className="relative mb-6">
        <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-subtle-gray dark:bg-gray-700">
          {icon}
        </div>
        <div className="absolute -top-3 -right-3 flex items-center justify-center h-8 w-8 rounded-full bg-cta-brown text-white font-bold text-sm border-4 border-white dark:border-gray-800">
          {stepNumber}
        </div>
      </div>
      <h3 className="text-xl font-bold text-text-dark dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-slate-gray dark:text-gray-400 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default StepCard;
