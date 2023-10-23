import { SectionTitle } from "../../Styled/SectionTitle/SectionTitle";
import "./Where.css";

export const Where = () => {
  return (
    <div className="Where">
      <div className="whereTitle">
        <p>
          <SectionTitle title={"WHERE TO FIND US"} />
        </p>
      </div>
      <div className="findPlace">
        <p>Find us at some address at some place.</p>
        <img src="https://www.w3schools.com/w3images/map.jpg" alt="#" />
        <p>
          <span>FYI!</span>
          We offer full-service catering for any event, large or small. We
          understand your needs and we will cater the food to satisfy the
          biggerst criteria of them all, both look and taste.
        </p>
      </div>
      <div>
        <p className="formTitle">
          Reserve a table, ask for today's special or just send us a message:
        </p>
        <form className="form">
          <input name="name" type="text" placeholder="Name" />
          <input name="" type="text" placeholder="How many people" />
          <input
            type="datetime-local"
            required
            name="date"
            value={"2020-11-16T20:00"}
          />
          <input type="text" placeholder="Message / Speacial requirement" />
          <button>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};
