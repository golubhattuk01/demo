import "../src/app.css";
import "../src/styles/sideBar.css";
const LeftSidebarItem = ({ titleItem }) => {
  return (
    <div className="sideSection">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        alt="Dashboard"
      />
      <h3>{titleItem}</h3>
    </div>
  );
};
export default LeftSidebarItem;
