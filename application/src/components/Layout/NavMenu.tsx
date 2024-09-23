import { Menu } from "primereact/menu";

const NavMenu = () => {
  const items = [
    { label: "Dashboard", icon: "pi pi-fw pi-home" },
    { label: "Settings", icon: "pi pi-fw pi-cog" },
    { label: "Profile", icon: "pi pi-fw pi-user" },
  ];

  return <Menu model={items} />;
};

export default NavMenu;
