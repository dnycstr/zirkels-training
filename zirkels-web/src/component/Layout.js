import "../App.css";
import { useState } from "react";

function Layout() {
  const [name, setName] = useState("Initial Name");
  const [lastname, setLastName] = useState("Initial Last Name");

  const readName = () => {
    var nameValue = name;

    alert(nameValue);
  };

  return (
    <div>
      <Header />

      <input
        className="app-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <button className="app-button" onClick={() => readName()}>
        Button
      </button>
    </div>
  );
}

function Header() {
  return (
    <div className="green-header">
      <div className="header-title">ZIRKELS</div>
    </div>
  );
}

export default Layout;
