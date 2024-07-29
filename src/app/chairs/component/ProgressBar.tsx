import React from 'react';

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div 
        className="bg-orange-400 h-2.5 rounded-full" 
        style={{ width: `${percentage}%` }} 
      ></div>
    </div>
  );
};

export default ProgressBar;
