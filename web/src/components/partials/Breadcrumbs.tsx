interface Path {
  href: string;
  label: string;
}

interface BreadcrumbsProps {
  paths: Path[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ paths }) => {
  return (
    <nav className="text-gray-700" aria-label="Breadcrumb">
      <ol className="list-reset flex">
        {paths.map((path, index) => (
          <li key={"i_" + index}>
            {index > 0 && <span className="mx-2">/</span>}
            <a href={path.href} className="text-gray-700 hover:text-gray-900">
              {path.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
