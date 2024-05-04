import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import "./Carousel.scss";

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel withIndicators loop>
        <Carousel.Slide>
          <img
            src="https://vnlotosoicau.com/wp-content/uploads/2024/01/trang-chu.jpg"
            alt=""
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://vnlotosoicau.com/wp-content/uploads/2023/09/Thuong-chao-mung.jpg"
            alt=""
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://vnlotosoicau.com/wp-content/uploads/2023/09/HB_Code-Tan-thu-88k.jpg"
            alt=""
          />
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}
