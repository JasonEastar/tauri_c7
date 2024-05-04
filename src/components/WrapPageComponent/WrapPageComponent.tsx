import classNames from "classnames";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { icons } from "../../utils/icons";
import "./WrapPageComponent.scss";

function WrapPageComponent(props: any) {
  const { title, children, isShow, onClose} = props;
  // const { darkmode } = useSelector((state: any) => state.theme);
  const [container, setContainer] = useState<any>(null);

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    if (!wrapper) return; // Kiểm tra nếu wrapper là null
    
    const div = document.createElement("div");
    wrapper.appendChild(div);
    setContainer(div);
  
    return () => {
      wrapper.removeChild(div);
    };
  }, []);
  
  if (!container) return null;

  return ReactDOM.createPortal(
    <div
      className={classNames(" wrap-page w-screen ", {
        show: !isShow,
        close: isShow,
      })}
    >
      <div className="w-full px-4 py-2 flex items-center justify-between bg-white dark:bg-surfaceDark">
        <button className="w-10 h-10" type="button" onClick={onClose}>
          <img src={icons.arrow_back} className="w-6 h-6" alt="" />
        </button>
        <span className="text-base text-black dark:text-white font-semibold">
          {title}
        </span>
        {/* {isFilter ? (
          <button
            className="w-10 h-10 flex items-center justify-center"
            type="button"
            onClick={showFilter}
          >
            <img src={icons.arrow_back} className="w-6 h-6" alt="" />
          </button>
        ) : (
          <div className="w-10 h-10"></div>
        )} */}
      </div>
      <div className="w-full h-full bg-transparent">{children}</div>
    </div>,
    container
  );
}

export default WrapPageComponent;
