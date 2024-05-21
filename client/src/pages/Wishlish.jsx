import Sidebar from "../components/Sidebar";

const Wishlish = () => {
  return (
    <div className="main_section">
      <div className="wrapper">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <div className="section_b">
            <h2>Your Wishlist</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlish;
