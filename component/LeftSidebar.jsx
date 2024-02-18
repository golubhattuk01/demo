import "../src/app.css";
import "../src/styles/sideBar.css";
import LeftSidebarItem from "./LeftSidebarItem";
const LeftSidebar = () => {
  let sideTitle = [
    "DashBoard",
    "Student Info",
    "Fees Collection",
    "Online Course",
    "Multi Branch",
    "Gmeet Live Classes",
    "Zmeet Live Classes",
    "Behavior Records",
    "Income",
    "Expences",
  ];
  return (
    <div className="left_side_bar">
      {sideTitle.map((titleItem) => (
        <LeftSidebarItem
          titleItem={titleItem}
          key={titleItem}
        ></LeftSidebarItem>
      ))}
    </div>
  );
};
export default LeftSidebar;
