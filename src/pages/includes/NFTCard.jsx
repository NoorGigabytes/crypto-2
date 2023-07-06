import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Tilt } from "react-tilt";

export default function NFTCard({ nft }) {
  const optionsTilt = {
    max: 25,
    perspective: 4000,
  };
  const [liked, setLiked] = useState(false);
  const handleClick = (event) => {
    event.stopPropagation();
    window.open(`/nft-detail:${nft.id}`);
  };
  return (
    <Tilt options={optionsTilt}>
      <div
        className="w-max p-2 overflow-hidden rounded-xl cursor-pointer"
        onClick={handleClick}
      >
        <div className="relative text-center">
          <img
            src={nft.img}
            alt={`${nft.title} image`}
            className="object-cover w-[260px] h-[380px]"
          />
          <h4 className="font-bold mt-2">{nft.title}</h4>
          <p className="text-xs text-[#a1abb9]">{nft.description}</p>
          <div
            className="absolute p-2 rounded-full bg-white w-fit top-2 right-2"
            onClick={(e) => {
              e.stopPropagation();
              setLiked((prev) => !prev);
            }}
          >
            {liked ? <FaHeart color="red" /> : <FaRegHeart color="black" />}
          </div>
          {nft.tag != '' && <div className="absolute flex items-center justify-center w-9 h-9 rounded-full bg-secondary w-fit top-2 left-2">
           <p>{nft.tag}</p>
          </div>}
        </div>
      </div>
    </Tilt>
  );
}
