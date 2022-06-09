// import styles from '../styles/Home.module.css'
import Slider from "react-slick";

export default function Home() {
  const items = [
    {
      id: 1,
      title: "title 1",
      description: "description 1",
      url: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
    },
    {
      id: 2,
      title: "title 2",
      description: "description 2",
      url: "https://api.choparpizza.uz/storage/sliders/2022/04/29/bC5piYoW0M2NSuGXKuWJgERvY0nIccPxZxl87kHP.jpg",
    },
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoPlaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id}>
          <div className="bg-cover bg-no-repeat w-full h-screen" style={{ backgroundImage: `url("${item.url}")` }}></div>
        </div>
      ))}
    </Slider>
  )
}
