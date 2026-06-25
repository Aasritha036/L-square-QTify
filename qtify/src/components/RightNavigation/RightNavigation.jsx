import "./RightNavigation.css";
import rightArrow from "../../assets/right.svg";

const RightNavigation = () => {
  return (
    <button className="custom-next navBtn next">
      <img src={rightArrow} alt="right" />
    </button>
  );
};

export default RightNavigation;