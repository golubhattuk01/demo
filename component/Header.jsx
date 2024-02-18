import "../src/app.css";
import "../src/styles/header.css";

const Header = () => {
  return (
    <div className="header_class">
      <div className="left_head">
        <img
          src="https://images.emojiterra.com/google/android-12l/512px/1f4a1.png"
          alt="idea"
        />
        <h3>DEMO</h3>
      </div>
      <div className="right_head">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1200px-United-states_flag_icon_round.svg.png"
          alt="country"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1827/1827301.png"
          alt="notification"
        />
        <h3>Gaurav Bhatt</h3>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          alt="user_profile"
        />
      </div>
    </div>
  );
};
export default Header;
