import { useState } from "react";

const AvatarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <img
        onClick={() => setIsOpen(!isOpen)}
        className="inline-block h-10 w-10 rounded-full"
        src="/path/to/avatar.jpg"
        alt="User avatar"
      />
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            My Profile
          </a>
          {/* Additional dropdown items */}
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
