import "primereact/resources/themes/lara-light-cyan/theme.css";
import Footer from "../src/pages/partials/Footer";
import Header from "../src/pages/partials/Header";
import Sidebar from "../src/pages/partials/Sidebar";
import "./App.css"; // Import any custom styles here
import BreadcrumbNav from "./components/Layout/Breadcrumb";
import SliderMenu from "./components/Layout/SliderMenu";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <main>
          <BreadcrumbNav />
          <h1>Welcome to the website</h1>
          <SliderMenu />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
