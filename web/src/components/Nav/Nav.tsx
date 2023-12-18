import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      {/* Thêm các liên kết khác nếu cần */}
    </nav>
  );
};

export default Nav;
