type HeaderPropType = {
  theme: string;
  toggle: () => void;
  dateInfo: string[];
  projectRef: React.RefObject<HTMLHeadingElement | null>;
};

import { IoIosMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";

export default function Header({
  theme,
  toggle,
  dateInfo,
  projectRef,
}: HeaderPropType) {
  const getHeaderLinkClasses = (theme: string) => {
    const baseClasses =
      "text-[1.1rem] transition-colors delay-75 duration-200 ease-in-out cursor-pointer";
    const themeClasses =
      theme === "dark"
        ? "text-header-text-dark hover:text-header-text-dark-hover"
        : "text-header-text-white hover:text-header-text-white-hover";

    return `${baseClasses} ${themeClasses}`;
  };
  return (
    <div className="border-black-400 sticky top-0 z-4 mx-auto flex max-w-[900px] justify-between rounded-md border-b-2 p-6 backdrop-blur-sm">
      <div className="flex justify-between gap-4">
        <div className="flex gap-2">
          <span> {dateInfo[0]}</span>
          <span>{dateInfo[2]}</span> <span>{dateInfo[1]}</span>
        </div>
        <button onClick={toggle} className="cursor-pointer">
          {theme === "dark" ? (
            <IoIosMoon size={26} />
          ) : (
            <IoSunnyOutline size={26} />
          )}
        </button>
      </div>
      <button
        onClick={() => {
          projectRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
        className={`${getHeaderLinkClasses(theme)}`}
      >
        Projects
      </button>
    </div>
  );
}
