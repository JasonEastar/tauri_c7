import {  Popover } from "@mantine/core";
import "./ItemLotterySection.scss";
import { icons } from "../../utils/icons";
export default function ItemLotterySectionComponent() {

  return (
    <div className="item-lottery">
      <div className="item-lottery-heading">
        <p className="title">
          Xổ Số Bạc Liêu {Math.floor(10 + Math.random() * 99)}
        </p>

        <Popover
          position="bottom-start"
          withArrow
          arrowOffset={50}
          arrowSize={8}
          offset={{ mainAxis: 0 }}
          arrowRadius={3}
        >
          <Popover.Target>
            <img src={icons.dots} alt="" />
          </Popover.Target>
          <Popover.Dropdown>Action</Popover.Dropdown>
        </Popover>
      </div>
      
      <div className="item-lottery-desc">
        <p>19/04/24 (Thứ 6) - 3:15 PM</p>
      </div>
      <div className="item-lottery-issue">
        <div className="button-issue">
          <span>20200419</span>
          <img className="arrow_dropdown" src={icons.arrow_dropdown} alt="" />
        </div>

        {/* <Select
          variant="filled"
          checkIconPosition="right"
          placeholder="20200419"
          data={["20200419", "20120419", "21110419", "20289819"]}
          defaultValue="20200419"
        /> */}
      </div>
      <div className="item-lottery-winnumber">
        <div className="item-winnumer">{Math.floor(1 + Math.random() * 9)}</div>
        <div className="item-winnumer">{Math.floor(1 + Math.random() * 9)}</div>
        <div className="item-winnumer">{Math.floor(1 + Math.random() * 9)}</div>
        <div className="item-winnumer">{Math.floor(1 + Math.random() * 9)}</div>
        <div className="item-winnumer">{Math.floor(1 + Math.random() * 9)}</div>
      </div>
      <div className="item-lottery-bottom">
        <p>Kế tiếp: {Math.floor(10000000 + Math.random() * 90000)}</p>
        <div className="timmer">
          <p>10 : 10 : 60</p>
        </div>
      </div>
    </div>
  );
}
