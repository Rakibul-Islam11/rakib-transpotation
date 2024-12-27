import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./all-components/navbar/Navbar";
import "./App.css";
import "./all-components/global-css/globle.css";
import TopMiniNav from "./all-components/top-mini-nav/TopMiniNav";
// import ScrollToTop from "./all-components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <div>
        {/* <ScrollToTop /> */}
        <ScrollRestoration></ScrollRestoration>
        <TopMiniNav />
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
