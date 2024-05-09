import Sidebar from "../components/Sidebar";

const Main = () => {
  console.log(import.meta.env.VITE_TEST);
  return (
    <div className="main_section">
      <div className="wrapper">
        <div className="left">
          <Sidebar />
          <h1></h1>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Main;
