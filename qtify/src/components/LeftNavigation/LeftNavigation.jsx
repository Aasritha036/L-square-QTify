import "./LeftNavigation.css";
import leftArrow from "../../assets/left.svg";

const LeftNavigation = () => {
  return (
    <button className="custom-prev navBtn">
      <img src={leftArrow} alt="left" />
    </button>
  );
};

export default LeftNavigation;