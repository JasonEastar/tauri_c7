import { SimpleGrid, Tabs } from "@mantine/core";
import { Container } from "@mantine/core";

import "./SectionsLottery.scss";
import ItemLotterySectionComponent from "../../../../components/ItemLotterySectionComponent/ItemLotterySectionComponent";
import { icons } from "../../../../utils/icons";

export default function SectionsLottery() {
  return (
    <Container size={"md"}>
      <div className="section-lottery">
        <div className="heading-section">
          <h2>Xổ số</h2>
          <div className="arrow_right">
            <img src={icons.arrow_right_alt} alt="" />
          </div>
        </div>
        <div className="section-content">
          <Tabs defaultValue="today">
            <Tabs.List grow justify="space-between">
              <Tabs.Tab value="today">Hôm nay</Tabs.Tab>
              <Tabs.Tab value="liked">Yêu thích</Tabs.Tab>
            </Tabs.List>

            <div className="content-tab">
              <Tabs.Panel value="today">
                <SimpleGrid cols={2}>
                  {[1, 2, 3, 4].map((index: number) => (
                    <div key={index}>
                      <ItemLotterySectionComponent />
                    </div>
                  ))}
                  <div></div>
                </SimpleGrid>
                <div className="loadmore">
                  <img className="loadmore-img" src={icons.arrow_down} alt="" />
                </div>
              </Tabs.Panel>
              <Tabs.Panel value="liked">
                <SimpleGrid cols={2}>
                  {[1, 2, 3].map((index: number) => (
                    <div key={index}>
                      <ItemLotterySectionComponent />
                    </div>
                  ))}
                </SimpleGrid>
                {/* <div className="loadmore">
                  <img className="loadmore-img" src={icons.arrow_down} alt="" />
                </div>{" "} */}
              </Tabs.Panel>
            </div>
          </Tabs>
        </div>
      </div>
    </Container>
  );
}
