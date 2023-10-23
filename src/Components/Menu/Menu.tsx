import { SectionTitle } from "../../Styled/SectionTitle/SectionTitle";
import "./Menu.css";
import { eats } from "../../data/eats/eats";
import { drinks } from "../../data/drinks/drinks";
import { useState } from "react";

export const Menu = () => {
  const [menuType, setMenuType] = useState("eats");

  const handleMenuChange = (type: any) => {
    setMenuType(type);
  };

  return (
    <div className="MenuConytainer">
      <div className="menuTitle">
        <p>
          <SectionTitle title={"THE MENU"} />
        </p>
      </div>
      <div className="menu">
        <button
          className="eatMenuButton"
          onClick={() => handleMenuChange("eats")}
          style={{
            backgroundColor: menuType === "eats" ? "#616161" : "#fff",
          }}
        >
          Eat
        </button>
        <button
          className="eatMenuButton"
          onClick={() => handleMenuChange("drinks")}
          style={{
            backgroundColor: menuType === "eats" ? "#fff" : "#616161",
          }}
        >
          Drink
        </button>
      </div>
      <div className="eatsMenu">
        <div
          id="eats"
          className="eatsMenu"
          style={{
            display: menuType === "eats" ? "block" : "none",
            backgroundColor: menuType === "eats" ? "#616161" : "#fff",
          }}
        >
          {eats.map((eat) => (
            <div className="menuItem">
              <p className="eat">{eat.name}</p>
              <p className="composition">{eat.composition}</p>
            </div>
          ))}
        </div>
        <div
          id="drinks"
          className="drinksMenu"
          style={{
            display: menuType === "drinks" ? "block" : "none",
          }}
        >
          {drinks.map((drink) => (
            <div className="menuItem">
              <p className="drink">{drink.name}</p>
              <p className="composition">{drink.composition}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="menuImage">
        <img
          src="https://www.w3schools.com/w3images/coffeehouse2.jpg"
          alt="#"
        />
      </div>
    </div>
  );
};
