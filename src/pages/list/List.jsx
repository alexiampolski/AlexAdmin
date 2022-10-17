import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

export const List = () => {
  return (

      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          List
        </div>
      </div>

  );
};
