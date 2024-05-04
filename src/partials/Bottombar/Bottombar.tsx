import { icons } from "../../utils/icons";
import "./BottomBar.scss";

import { Link } from "react-router-dom";

export default function Bottombar() {
  return (
    <div className="bottombar-wrapper">
      <ul className="list-menu flex-center">
        <li className="menu-item">
          <Link to={""} className="active">
            <img src={icons.home} alt="" />
            <span>Trang chủ</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to={""}>
            <img src={icons.games} alt="" />
            <span>Trò chơi</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to={""}>
            <img src={icons.stars} alt="" />
            <span>Khuyến mãi</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to={""}>
            <img src={icons.money_bag} alt="" />
            <span>Thanh toán</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
