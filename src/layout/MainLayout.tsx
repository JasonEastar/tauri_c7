import "./MainLayout.scss";
import { HeaderComponent } from "../partials/Header/Header";
import Bottombar from "../partials/Bottombar/Bottombar";

function MainLayout(props: any) {
  const { children, type } = props;

  return (
      <div className={`wrapper`}>
        {!type && <HeaderComponent />}
        <div>{children}</div>
        {!type && <Bottombar />}
      </div>
  );
}

export default MainLayout;
