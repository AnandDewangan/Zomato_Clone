import React from 'react';
import "./topBrands.css";
import NextArrow from '../../../Common/Carousel/nextArrow';
import PrevArrow from '../../../Common/Carousel/prevArrow';
import Slider from 'react-slick';

const brandList = [
  {
    id:1,
    title: "McDonald's",
    time: "29 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp"
  },
  {
    id:2,
    title: "Burger King",
    time: "30 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp"
  },
  {
    id:3,
    title: "Subway",
    time: "33 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp"
  },
  {
    id:4,
    title: "Haldiram's",
    time: "35 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp"
  },
  {
    id:5,
    title: "KFC",
    time: "41 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp"
  },
  {
    id:6,
    title: "Kaleva",
    time: "27 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ff3d2543b65456e19d204cd385ecbb63_1605093994.png?output-format=webp"
  },
  {
    id:7,
    title: "Bikanervala",
    time: "33 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp"
  },
  {
    id:8,
    title: "La Pino'z Pizza",
    time: "39 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160307.png?output-format=webp"
  },
  {
    id:9,
    title: "Chaayos Chai+Snacks=Relax",
    time: "27 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155060.png?output-format=webp"
  },
  {
    id:10,
    title: "Theobroma",
    time: "21 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179220.png?output-format=webp"
  }
]

const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>
};
export default function TopBrands() {
  return (
    <div className='top-brands max-width'>
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {brandList.map((item)=>{
          return <div>
          <div className="delivery-item-cover">
            <img
              src={item.cover}
              alt={item.title}
              className="delivery-item-image"
            />
          </div>
          <div className="delivery-item-title absolute-center brand-title">{item.title}</div>
          <div className="delivery-item-title absolute-center brand-time">{item.time}</div>
        </div>
        })}
      </Slider>
    </div>
  )
}
