import React from "react";
import nftList from "../../static/json/nfts.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NFTCard from "./NFTCard";

const SaleSlider = () => {
  const saleNFTList = nftList.filter((nft) => nft.tag === "sale");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 617,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container px-4">
      <Slider {...settings}>
        {saleNFTList.map((nft) => (
          <div key={nft.id}>
            <NFTCard nft={nft} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SaleSlider;
