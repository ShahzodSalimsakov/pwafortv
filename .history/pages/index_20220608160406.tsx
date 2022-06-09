// import styles from '../styles/Home.module.css'
import Slider from "react-slick";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/templates/first"));

export default function Home() {
  const items = [
    {
      id: 1,
      type: "image",
      title: "title 1",
      description: "description 1",
      url: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
    },
    {
      id: 2,
      type: "template",
      title: "title 2",
      description: "description 2",
      template_name: "first",
      url: "https://api.choparpizza.uz/storage/sliders/2022/04/29/bC5piYoW0M2NSuGXKuWJgERvY0nIccPxZxl87kHP.jpg",
      template_prods: [
        [
          {
            id: 1,
            name: "Пицца",
            price: "100",
          },
        ],
      ]
    },
  ]
  items.map((item) => {
    if (item.type === "template") {
      const DynamicComponent = dynamic(() => import("../components/templates/" + item.template_name));
    }
  })

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
