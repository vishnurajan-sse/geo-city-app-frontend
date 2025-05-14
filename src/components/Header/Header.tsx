import type { HeaderProps } from "../../interfaces/common";

const Header = ({ appName }: HeaderProps)=> {
  return (
    <header className="bg-white shadow dark:bg-gray-800" id="app-header">
    <div className="px-8 py-4">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">{appName}</h1>
    </div>
  </header>
  );
};

export default Header;



