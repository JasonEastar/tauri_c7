import { useNavigate } from "react-router-dom";
import LoginFormComponent from "../../components/LoginFormComponent/LoginFormComponent";
import logo_color from "../../assets/images/logo_color.png";
import "./LoginPage.scss";
import HeadingControlComponent from "../../components/HeadingControlComponent/HeadingControlComponent";
import { Container } from "@mantine/core";

export default function LoginPage() {
  const navigate = useNavigate();
  const onBlack = () => {
    navigate("/");
  };
  return (
    <Container size={"sm"}>
      <div className="login-page">
        <div className="black-page">
          <HeadingControlComponent onBlack={onBlack} />
        </div>
        <div className="login-container flex-center">
          <div className="logo">
            <img src={logo_color} alt="" />
          </div>
          <LoginFormComponent />
        </div>
      </div>
    </Container>
  );
}
