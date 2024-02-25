import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex bg-gray-900 p-2 px-8 text-lg">
      <Link href={"/"} className="flex items-center">
        <span>Videoflix</span>
      </Link>
    </nav>
  );
};
