import Header from "../component/Header";
import LeftSidebar from "../component/LeftSidebar";
import SearchBar from "../component/SearchBar";
import "./app.css";
import "../src/app.css";
import Profile from "../component/Profile";
import Invoice from "../component/Invoice";
import Revenue from "../component/Revenue";
import SalesHistory from "../component/SalesHistory";
import Datex from "../component/Datex";

export function App() {
  return (
    <div className="container">
      <Header></Header>
      <LeftSidebar></LeftSidebar>
      <SearchBar></SearchBar>
      <Datex></Datex>
      <Profile></Profile>
      <Revenue></Revenue>
      <Invoice></Invoice>
      <SalesHistory></SalesHistory>
    </div>
  );
}
