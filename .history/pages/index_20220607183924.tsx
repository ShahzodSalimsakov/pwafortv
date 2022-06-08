// import styles from '../styles/Home.module.css'
import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-blue-500 text-4xl">
      <Slider {...settings}>
        <div>
          <a href="https://www.google.com" />
        </div>
      </Slider>
    </div>
  )
}
