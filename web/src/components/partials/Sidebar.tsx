import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md"; // Importing icons from Material Design

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-gray-800 ${isCollapsed ? "w-20" : "w-64"}`}>
      <button
        onClick={toggleSidebar}
        className="text-gray-300 hover:text-white"
      >
        {isCollapsed ? (
          <MdMenu className="h-5 w-5" />
        ) : (
          <MdClose className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
