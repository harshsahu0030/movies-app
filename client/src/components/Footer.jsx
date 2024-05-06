import { Link } from "react-router-dom";
import { footerData } from "../data/footerData";
import Language from "./Language";

const Footer = () => {
  return footerData ? (
    <div className="footer_section">
      <div className="wrapper">
        <span>
          Questions? Call <Link>{footerData.call}</Link>
        </span>

        <ul>
          {footerData.links.map((item, i) => (
            <li key={i}>
              <Link>{item.name}</Link>
            </li>
          ))}
        </ul>

        <Language />

        <span>Netflix India</span>
      </div>
    </div>
  ) : (
    "Loding..."
  );
};

export default Footer;
