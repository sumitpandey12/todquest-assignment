import Carousel from "react-bootstrap/Carousel";
import image from "../../assets/image.jpg";
import "bootstrap/dist/css/bootstrap.css";

function Banner() {
  return (
    <Carousel className="w-2/3 mx-auto">
      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={image} alt="Image One" />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={image} alt="Image Two" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
