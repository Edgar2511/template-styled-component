import { SectionTitle } from "../../Styled/SectionTitle/SectionTitle";
import "./About.css";

export const About = () => {
  return (
    <div className="About">
      <div className="aboutTitle">
        <p>
          <SectionTitle title={"ABOUT THE CAFE"} />
        </p>
      </div>
      <div className="aboutDescription">
        <p>
          The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          In addition to our full espresso and brew bar menu, we serve fresh
          made-to-order breakfast and lunch sandwiches, as well as a selection
          of sides and salads and other good stuff.
        </p>
        <div className="leftBar">
          <p>
            "Use products from nature for what it's worth - but never too early,
            nor too late." Fresh is the new sweet.
          </p>
          <p>Chef, Coffeeist and Owner: Liam Brown</p>
        </div>
      </div>
      <div className="aboutImage">
        <img src="https://www.w3schools.com/w3images/coffeeshop.jpg" alt="#" />
      </div>
      <div className="aboutFooter">
        <p>
          <strong>Opening hours:</strong> everyday from 6am to 5pm.
        </p>
        <p>
          <strong>Address:</strong> 15 Adr street, 5015, NY
        </p>
      </div>
    </div>
  );
};
