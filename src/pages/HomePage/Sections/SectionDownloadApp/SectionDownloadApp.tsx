import { Container, Grid } from "@mantine/core";
import "./SectionDownloadApp.scss";
import qr_code from "../../../../assets/images/download/qr_code.png";
import android from "../../../../assets/images/download/android.png";
import ios from "../../../../assets/images/download/ios.png";
import { Link } from "react-router-dom";

export default function SectionDownloadApp() {
  return (
    <Container size={"md"}>
      <div className="download-page">
        <h2>Tải APP</h2>
        <div className="download-content">
          <Grid>
            <Grid.Col span={6}>
              <div className="download-item flex-center">
                <img className="qr_code" src={qr_code} alt="" />
                <div className="name_deviced">
                  <img src={android} alt="" />
                  <span>App Android</span>
                </div>
              </div>
            </Grid.Col>

            <Grid.Col span={6}>
              <div className="download-item flex-center">
                <img className="qr_code" src={qr_code} alt="" />
                <div className="name_deviced">
                  <img src={ios} alt="" />
                  <span>App IOS</span>
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </div>
      <div className="menu_bottom">
        <div className="flex-center mt-1 text-center list-menu">
          <div>
            <Link to={""}>Điều Khoản Dịch Vụ</Link> |
          </div>{" "}
          <div>
            <Link to={""}>Chính Sách Bảo Mật </Link> |
          </div>
          <div>
            <Link to={""}>Cược Có Trách Nhiệm </Link> |
          </div>
          <div>
            <Link to={""}>Về C7Bet</Link> |
          </div>
          <div>
            <Link to={""}>Đại Lý</Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
