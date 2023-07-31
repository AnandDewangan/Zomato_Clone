import React from 'react';
import "./deliveryCollections.css";
import NextArrow from '../../../Common/Carousel/nextArrow';
import PrevArrow from '../../../Common/Carousel/prevArrow';
import Slider from 'react-slick';
import DeliveryItems from './DeliveryItems/index';

const deliveryItems = [
    {
        id: 1,
        title: 'North Indian',
        cover: "https://b.zmtcdn.com/data/dish_photos/f54/c2b76008f0c789d10862a1d92e342f54.jpg"
    },
    {
        id: 2,
        title: 'South Indian',
        cover: "https://b.zmtcdn.com/data/dish_photos/e24/3cd983b03e7c6b304786e5b3a3053e24.jpg"
    },
    {
        id: 3,
        title: 'Paratha',
        cover: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
    },
    {
        id: 4,
        title: 'Sandwich',
        cover: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
    },
    {
        id: 6,
        title: 'Idli',
        cover: "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png"
    },
    {
        id: 7,
        title: 'Tea',
        cover: "https://b.zmtcdn.com/data/o2_assets/a2163bedb069e3069db0a88d7a3c848f1676534399.png"
    },
    {
        id: 8,
        title: 'Dosa',
        cover: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },
    {
        id: 9,
        title: 'Chhole Bhature',
        cover: "https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png"
    },
    {
        id: 10,
        title: 'Coffee',
        cover: "https://b.zmtcdn.com/data/o2_assets/09a9b82b5bdda939b78f3daeb6c3911c1676032839.png"
    },
    {
        id: 11,
        title: 'Vada',
        cover: "https://b.zmtcdn.com/data/o2_assets/bf4bde7b78d517ac8460ea03d4c64a7f1632716550.png"
    },
    {
        id: 12,
        title: 'Cold Coffee',
        cover: "https://b.zmtcdn.com/data/o2_assets/9c1dfe59035bbbcb1e06328f621917051632716659.png"
    },
    {
        id: 13,
        title: 'Continental Breakfast',
        cover: "https://b.zmtcdn.com/data/dish_photos/5d4/35ad2b9abc687edb8ffd5dd56f2335d4.jpg"
    }

]

const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

export default function DeliveryCollections() {
  return (
    <div className='delivery-collection'>
        <div className="max-width">
            <div className='collection-title'>Inspiration for your first order</div>
            <Slider {...settings}>
                {deliveryItems.map((item)=>{
                    return <DeliveryItems item={item}/>
                })}
            </Slider>
        </div>
    </div>
  )
}
