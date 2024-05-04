import { Container, Grid } from "@mantine/core";

import "./SectionsSport.scss";
import { Fragment } from "react/jsx-runtime";
import { icons, images } from "../../../../utils/icons";
export default function SectionsSport() {
  return (
    <Container size={"md"}>
      <div className="section-sport">
        <div className="section-heading">
          <h2>Thể Thao</h2>
          <div className="arrow_right">
            <img src={icons.arrow_right_alt} alt="" />
          </div>
        </div>
        <div className="section-content">
          <div className="football_match">
            <Grid className="heading-table">
              <Grid.Col span={3}>
                <div className="text-center">
                  <strong className="title-heading">Trận đấu</strong>
                </div>
              </Grid.Col>
              <Grid.Col span={9}>
                <div className="text-center">
                  <strong className="title-heading">Trận đấu</strong>
                </div>
              </Grid.Col>
            </Grid>
            <Grid className="content-table">
              {[1, 2, 3, 4].map((index: number) => (
                <Fragment key={index}>
                  <Grid.Col span={3} className="content-left">
                    <div className="text-center">
                      <img src={images.champions} alt="" />
                    </div>
                  </Grid.Col>
                  <Grid.Col span={9} className="content-right">
                    <img src={images.aston_lilla} alt="" />
                    <div className="club">
                      <p>Aston Villa vs Liverpool</p>
                      <p>03 May 2024 | 12:00</p>
                    </div>
                    <img src={images.liverpool} alt="" />
                  </Grid.Col>
                </Fragment>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </Container>
  );
}
