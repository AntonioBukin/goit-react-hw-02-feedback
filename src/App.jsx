import Navbar from "./modules/Navbar/Navbar";
import Vote from "./Vote/Vote";
// import ToggleButton from "components/ToggleButton/TogleButton";

import navbarMenuItems from "./data/navbarMenuItems.json";

import "./styles/styles.scss";

function App() {
  return (
    <>
    <Navbar menuItems={navbarMenuItems} />
    <div className="container">
    {/* <ToggleButton text="Click me"/> */}
    <Vote/>
    </div>
    </>
  );
}

export default App;

