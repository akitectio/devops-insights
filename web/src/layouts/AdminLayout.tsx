import React from "react";
import AvatarDropdown from "@components/partials/AvatarDropdown";
import Footer from "@components/partials/Footer";
import Sidebar from "@components/partials/Sidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="flex justify-between p-4 border-b">
          {/* Breadcrumbs component can be rendered here */}
          <AvatarDropdown />
        </header>
        <main className="flex-1 overflow-x-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
