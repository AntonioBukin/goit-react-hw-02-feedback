import Navbar from "./modules/Navbar/Navbar";

import navbarMenuItems from "./data/navbarMenuItems.json";

import "./styles/styles.scss";

function App() {
  return (
   <Navbar menuItems={navbarMenuItems} />
  );
}

export default App;

