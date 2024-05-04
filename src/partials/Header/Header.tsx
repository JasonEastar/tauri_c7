import "./Header.scss";
import { Container } from "@mantine/core";
import { Fragment, useEffect, useState } from "react";
import { icons } from "../../utils/icons";

export function HeaderComponent() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 100); // Đặt giá trị cụ thể tùy thuộc vào yêu cầu của bạn
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <Container
        size={"sm"}
        className={`header-wrapper ${isSticky ? "sticky" : ""}`}
      >
        <div className="header">
          <div className="header-left flex-center">
            <img src={icons.menu} alt="" />
          </div>
          <div className="header-logo flex-center">
            <img src={icons.logo} alt="" />
          </div>
          <div className="header-right flex-center">
            <img src={icons.user} alt="" />
          </div>
        </div>
      </Container>

      {/* <WrapPageComponent
        title="hie"
        isShow={isShow}
        onClose={() => setIsShow(false)}
      >
        <h1>hello</h1>
      </WrapPageComponent> */}
    </Fragment>
  );
}
