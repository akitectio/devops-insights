import { BreadCrumb } from "primereact/breadcrumb";

const BreadcrumbNav = () => {
  const items = [
    { label: "Home", url: "/" },
    { label: "Products", url: "/products" },
    { label: "Details" },
  ];

  return <BreadCrumb model={items} />;
};

export default BreadcrumbNav;
