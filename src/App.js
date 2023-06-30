import "./style.css";
import "./reset.css";
import Header from "./layouts/Header";
import MainSection from "./layouts/Main";
import SidebarLeft from "./layouts/SidebarLeft";
import SidebarRight from "./layouts/SidebarRight";
import About from "./layouts/About";
import Work from "./layouts/Work";
import Project from "./layouts/Project";
import Contact from "./layouts/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <SidebarLeft />
      <SidebarRight />
      <div className="padding100 padding50">
        <MainSection />
        <About />
        <Work />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
