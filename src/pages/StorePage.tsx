import Body from "@components/Body";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import "./storePage.css";
const StorePage: React.FC = () => {
  return (
    <div className="storePage">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
};

export default StorePage;
