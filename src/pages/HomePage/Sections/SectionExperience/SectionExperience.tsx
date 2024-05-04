import "./SectionExperience.scss";
import gift from "../../../../assets/images/feed/gift.png";
import group from "../../../../assets/images/feed/group.png";
import mobile_friendly from "../../../../assets/images/feed/mobile_friendly.png";
import security from "../../../../assets/images/feed/security.png";
import { Container, Grid } from "@mantine/core";

export default function SectionExperience() {
  return (
    <Container size={"md"}>
      <div className="experience-page">
        <Grid className="heading-table">
          <Grid.Col span={3} className="">
            <div className="img-experience ">
              <img src={mobile_friendly} alt="" />
            </div>
          </Grid.Col>
          <Grid.Col span={9} className="content-experience">
            <div className="text-left">
              <h4>Trải nghiệm người dùng</h4>
              <p>
                Giao diện thân thiện với người dùng , giúp người dùng dễ tiếp
                cận
              </p>
            </div>
          </Grid.Col>
          <Grid.Col span={3} className="">
            <div className="img-experience flex-center">
              <img src={group} alt="" />
            </div>
          </Grid.Col>
          <Grid.Col span={9} className="content-experience">
            <div className="text-left">
              <h4>Trò chơi đa dạng</h4>
              <p>
                Đa dạng các trò chơi , cược cho người chơi lựa chọn và tham gia.
              </p>
            </div>
          </Grid.Col>
          <Grid.Col span={3} className="">
            <div className="img-experience flex-center">
              <img src={gift} alt="" />
            </div>
          </Grid.Col>
          <Grid.Col span={9} className="content-experience">
            <div className="text-left">
              <h4>Quyền lợi phong phú</h4>
              <p>Những khuyến mãi độc quyền từ C7bet và dễ dàng nhận thưởng.</p>
            </div>
          </Grid.Col>
          <Grid.Col span={3} className="">
            <div className="img-experience flex-center">
              <img src={security} alt="" />
            </div>
          </Grid.Col>
          <Grid.Col span={9} className="content-experience">
            <div className="text-left">
              <h4>An toàn & Bảo mật</h4>
              <p>C7bet luôn có chính sách bảo mật an toàn cao nhất</p>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </Container>
  );
}
