import Navigation from "@components/partials/nav/Navigation";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold">My Website</h1>
      <Navigation />
    </header>
  );
};

export default Header;
