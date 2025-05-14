import { type FooterProps, type FooterLink } from "../../interfaces/common";


const Footer = ({ copyright, links }: FooterProps) => {
  return (
    <footer className="bg-white rounded-lg shadow-sm  dark:bg-gray-800" id="app-footer">
      <div className="w-full  px-8 py-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        {copyright}
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {links.map((link : FooterLink, index : number) => (
            <li key={index}>
              <a href={link.href} className="hover:underline me-4 md:me-6">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;