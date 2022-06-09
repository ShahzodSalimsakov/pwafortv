// import styles from '../styles/Home.module.css'
import Slider from "react-slick";
import dynamic from "next/dynamic";
import React from "react";

export default function Home() {
  const items = [
    {
      id: 1,
      type: "image",
      title: "title 1",
      description: "description 1",
      url: "https://scontent.ftas1-1.fna.fbcdn.net/v/t39.30808-6/283499938_2128439487330645_2788892691574415145_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=uSkiK01JQ3gAX_lXNtn&_nc_ht=scontent.ftas1-1.fna&oh=00_AT9zFlOHOZ_yqOlu-WwLvSZmb6kPN1tZDp-Mbsw7QbaFmg&oe=62A6FE8F",
    },
    {
      id: 2,
      type: "template",
      title: "title 2",
      description: "description 2",
      template_name: "first",
      url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.30808-6/285609488_2135246046649989_8694009277665708482_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=a2ds2Ze1_JkAX8om5FA&_nc_ht=scontent.ftas2-2.fna&oh=00_AT9iBrgp0eNFSHxxYZipQKmrjYir2-VFx6yMslXuN4T8_g&oe=62A7341E",
      template_prods: [
        [
          {
            id: 1,
            name: "gavayskiy",
            price: "96000",
            url: "https://api.choparpizza.uz/storage/products/2022/03/03/OtNBcIQZPzRggQgkXi28R0BpXs8Ce1HDpth3NfhT.webp"
          },
        ],
        [
          {
            id: 1,
            name: "Pepperoni",
            price: "54000",
          },
          {
            id: 2,
            name: "Kombo",
            price: "86000",
          },
        ],
      ]
    },
  ]

  let DynamicComponent: any = {};
  items.map((item) => {
    if (item.type === "template" && item.template_name) {
      DynamicComponent[item.template_name] = dynamic(() => import("../components/templates/" + item.template_name));
    }
  })

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoPlaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id} className="overflow-y-hidden overflow-hidden">
          {item.type === "image" ? (
            <div key={item.id}>
              <div className="bg-cover bg-no-repeat w-full h-screen" style={{ backgroundImage: `url("${item.url}")` }}></div>
            </div>
          ) : (
            item.template_name ? (React.createElement(DynamicComponent[item.template_name], {
              template_prods: item.template_prods,
              background: items,
            })) : (<div></div>)
          )}
        </div>
      ))}
    </Slider>
  )
}
