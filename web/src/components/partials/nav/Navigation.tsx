import NavItem from "./NavItem";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <NavItem href="/" label="Home" />
        <NavItem href="/about" label="About" />
        <NavItem href="/contact" label="Contact" />
      </ul>
    </nav>
  );
};

export default Navigation;
