import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
  return (
    <li>
      <Link
        className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
        href={href}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
