// import styles from '../styles/Home.module.css'
import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoPlaySpeed: 3000,
    className: "h-max-screen",
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://api.choparpizza.uz/storage/sliders/2022/04/29/bC5piYoW0M2NSuGXKuWJgERvY0nIccPxZxl87kHP.jpg" />
      </div>
      <div>
        <img src="https://api.choparpizza.uz/storage/sliders/2022/04/29/bC5piYoW0M2NSuGXKuWJgERvY0nIccPxZxl87kHP.jpg" />
      </div>
      <div>
        <img src="https://api.choparpizza.uz/storage/sliders/2022/04/29/bC5piYoW0M2NSuGXKuWJgERvY0nIccPxZxl87kHP.jpg" />
      </div>
      <div>
        <img src="https://api.choparpizza.uz/storage/sliders/2022/04/29/bC5piYoW0M2NSuGXKuWJgERvY0nIccPxZxl87kHP.jpg" />
      </div>
    </Slider>
  )
}
