import React, { Dispatch, SetStateAction } from "react";
import { Sun, Moon } from "lucide-react";

interface DarkModeToggleProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      {darkMode ? <Sun size={24} color="yellow" aria-label="Sun Icon" /> : <Moon size={24} color="gray" aria-label="Moon Icon" />}
    </button>
  );
};

export default DarkModeToggle;
