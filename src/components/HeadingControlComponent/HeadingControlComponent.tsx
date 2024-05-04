import { icons } from "../../utils/icons";
import "./HeadingControl.scss";
interface IHeadingControl {
  title?: string;
  onBlack: () => void;
  onAction?: () => void;
}
export default function HeadingControlComponent(props: IHeadingControl) {
  const { title, onBlack, onAction } = props;
  return (
    <div className="heading-control">
      <div className="left-control" onClick={onBlack}>
        <img src={icons.arrow_back} alt="" />
      </div>
      <div className="heading">{title}</div>
      <div className="right-control">
        {onAction && <img src={icons.arrow_back} alt="" />}
      </div>
    </div>
  );
}
