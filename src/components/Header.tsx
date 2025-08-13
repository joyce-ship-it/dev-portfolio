type HeaderPropType = {
  theme: string;
  toggle: () => void;
  dateInfo: string[];
};

import { IoIosMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";

export default function Header({ theme, toggle, dateInfo }: HeaderPropType) {
  return (
    <div className="border-black-400 sticky top-0 mx-auto flex max-w-[900px] justify-between border-b-2 p-6 backdrop-blur-md">
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
      <a href="#projects" className="text-[1.1rem]">
        Projects
      </a>
    </div>
  );
}
