import React from "react";
import "./collections.css";
import Slider from "react-slick";
import NextArrow from "../Carousel/nextArrow";
import PrevArrow from "../Carousel/prevArrow";

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function Collection({ list }) {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collections</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </div>
          <div className="collection-location absolute-center">
            <div>All collections in Delhi NCR</div>
            <i class="bx bx-caret-right absolute-center"></i>
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item) => (
            <>
              <div className="collection-cover">
                <img
                  src={item.cover}
                  alt={item.titile}
                  className="collection-image"
                />
                <div className="gradient-bg"></div>
                <div className="collection-card-title">{item.titile}</div>
                <div className="collection-card-subtitle">
                    <div>{item.places}</div>
                    <i class="bx bx-caret-right absolute-center"></i>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
}
