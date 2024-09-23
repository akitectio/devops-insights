import { Menubar } from "primereact/menubar";

const MasterMenu = () => {
  const items = [
    { label: "Home", icon: "pi pi-fw pi-home" },
    { label: "Products", icon: "pi pi-fw pi-shopping-cart" },
    { label: "Contact", icon: "pi pi-fw pi-phone" },
  ];

  return <Menubar model={items} />;
};

export default MasterMenu;
