import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/video", text: "Video" },
  { path: "/videos", text: "Videos" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-900 text-white p-2 m-2 ronded px-8 text-lg">
      <Link href={"/"} className="flex items-center">
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>
      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
};
