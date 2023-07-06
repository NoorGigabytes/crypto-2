import React, { useEffect, useState } from "react";
import cardHero1 from "../static/img/cards/4.jpg";
import cardHero2 from "../static/img/cards/14.jpg";
import cardHero3 from "../static/img/cards/22.jpg";
import cardHero4 from "../static/img/cards/3.jpg";
import cardHero5 from "../static/img/cards/26.jpg";
import cardHero6 from "../static/img/cards/18.jpg";
import cardHero7 from "../static/img/cards/24.jpg";
import nftsList from "../static/json/nfts.json";
import CurrencySlider from "./includes/CurrencySlider";
import { Tilt } from "react-tilt";
import CountUp from "react-countup";
import NFTCard from "./includes/NFTCard";

function Home() {
  const [randomNFTs, setRandomNFTs] = useState([]);
  const [randomNFTs2, setRandomNFTs2] = useState([]);
  const optionsTilt = {
    max: 25,
    perspective: 4000,
  };

  const getRandomIndices = (count, max) => {
    const indices = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  };

  useEffect(() => {
    const randomIndices1 = getRandomIndices(6, nftsList.length);
    const randomNFTs1 = randomIndices1.map(index => nftsList[index]);
    const randomIndices2 = getRandomIndices(6, nftsList.length);
    const randomNFTs2 = randomIndices2.map(index => nftsList[index]);
    setRandomNFTs(randomNFTs1);
    setRandomNFTs2(randomNFTs2);
  }, [nftsList]);

  return (
    <>
      <section className="container mx-auto max-w-screen-xl px-6 lg:pt-16 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 px-5">
          <div className="mx-auto my-auto">
            <p className="font-headings text-2xl">
              Marketplace<span className="text-secondary">NFT</span>
            </p>
            <h1 className="mb-8 md:leading-relaxed leading-tight">
              Company Here
            </h1>
            <p className="text-[#a1abb9]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur beatae rem ipsum repudiandae! Rem ea odio doloremque.
              Neque, deleniti velit nemo vel impedit facilis!
            </p>
            <button
              type="button"
              className="mt-8 px-4 py-2 font-content font-bold rounded-full border-primary bg-gradient-to-b from-secondary to-primary transition-all duration-300 ease-in-out"
            >
              Explore NFTs
            </button>
            <div className="grid lg:grid-cols-6 grid-cols-3 md:gap-x-16 gap-x-5 mt-8">
              <div className="text-center">
                <p>Users</p>
                <p className="font-headings text-xl">
                  <CountUp end={4351} duration={4} />
                </p>
              </div>
              <div className="text-center">
                <p>NFTs</p>
                <p className="font-headings text-xl">
                  <CountUp end={943} duration={4} />
                </p>
              </div>
              <div className="text-center">
                <p>Pools</p>
                <p className="font-headings text-xl">
                  <CountUp end={435} duration={4} />
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full py-36">
            <div className="relative">
              <Tilt options={optionsTilt}>
                <div className="absolute right-[6%] top-[-120px]">
                  <img
                    src={cardHero3}
                    alt="hero section card"
                    className="rounded-xl object-cover w-40 h-48 border-2 border-primary"
                  />
                </div>
              </Tilt>
              <Tilt options={optionsTilt}>
                <div className="absolute right-[33%] top-[-50px]">
                  <img
                    src={cardHero2}
                    alt="hero section card"
                    className="rounded-xl object-cover w-40 h-48 border-2 border-primary"
                  />
                </div>
              </Tilt>
              <Tilt options={optionsTilt}>
                <div className="absolute right-[13%]">
                  <img
                    src={cardHero1}
                    alt="hero section card"
                    className="rounded-xl object-cover w-40 h-48 border-2 border-primary"
                  />
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-screen-xl px-6 lg:pt-16 pt-12 pb-16">
        <h2 className="mb-12 md:text-4xl text-3xl text-center font-bold pb-12">
          Collect Characters as NFTs
        </h2>
        <div className="items-center md:flex hidden justify-around gap-x-5">
          <div className="grid grid-cols-2 lg:gap-16 md:gap-12 gap-6">
            <Tilt options={optionsTilt}>
              <img
                src={cardHero4}
                alt="hero section card"
                className="rounded-xl object-cover w-40 h-48 border-2 border-primary"
              />
            </Tilt>
            <Tilt options={optionsTilt}>
              <img
                src={cardHero5}
                alt="hero section card"
                className="rounded-xl object-cover w-40 h-48 border-2 border-primary"
              />
            </Tilt>
            <Tilt options={optionsTilt}>
              <img
                src={cardHero6}
                alt="hero section card"
                className="rounded-xl object-cover w-40 h-48 border-2 border-primary"
              />
            </Tilt>
            <Tilt options={optionsTilt}>
              <img
                src={cardHero7}
                alt="hero section card"
                className="rounded-xl object-cover w-40 h-48 border-2 border-primary"
              />
            </Tilt>
          </div>
          <div className="w-1/2">
            <p className="mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              quia perferendis corrupti veritatis dicta placeat vero hic
              sapiente molestias. Ex consequatur iure eius impedit et dolores,
              ratione numquam itaque fugit?
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              quia perferendis corrupti veritatis dicta placeat vero hic
              sapiente molestias. Ex consequatur iure eius impedit et dolores,
              ratione numquam itaque fugit?
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              quia perferendis corrupti veritatis dicta placeat vero hic
              sapiente molestias. Ex consequatur iure eius impedit et dolores,
              ratione numquam itaque fugit?
            </p>
            <button
              type="button"
              className="lg:mt-8 mt-4 px-4 py-2 font-content font-bold rounded-full border-primary bg-gradient-to-b from-secondary to-primary transition-all duration-300 ease-in-out"
            >
              Collect More
            </button>
          </div>
        </div>
        <div className="items-center md:hidden grid grid-cols-2 justify-center gap-x-5 gap-y-10">
          <Tilt options={optionsTilt}>
            <img
              src={cardHero4}
              alt="hero section card"
              className="rounded-xl object-cover w-40 h-48 mx-auto border-2 border-primary"
            />
          </Tilt>
          <p className="mb-5 text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            quia perferendis corrupti veritatis dicta placeat vero hic sapiente
            molestias. Ex consequatur iure eius impedit et dolores, ratione
            numquam itaque fugit?
          </p>
          <p className="mb-5 text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            quia perferendis corrupti veritatis dicta placeat vero hic sapiente
            molestias. Ex consequatur iure eius impedit et dolores, ratione
            numquam itaque fugit?
          </p>
          <Tilt options={optionsTilt}>
            <img
              src={cardHero5}
              alt="hero section card"
              className="rounded-xl object-cover w-40 h-48 mx-auto border-2 border-primary"
            />
          </Tilt>
          <Tilt options={optionsTilt}>
            <img
              src={cardHero6}
              alt="hero section card"
              className="rounded-xl object-cover w-40 h-48 mx-auto border-2 border-primary"
            />
          </Tilt>
          <p className="mb-5 text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            quia perferendis corrupti veritatis dicta placeat vero hic sapiente
            molestias. Ex consequatur iure eius impedit et dolores, ratione
            numquam itaque fugit?
          </p>
          <button
            type="button"
            className=" text-xs lg:mt-8 mt-4 px-4 py-2 w-32 mx-auto font-content font-bold rounded-full border-primary bg-gradient-to-b from-secondary to-primary transition-all duration-300 ease-in-out"
          >
            Collect More
          </button>

          <Tilt options={optionsTilt}>
            <img
              src={cardHero7}
              alt="hero section card"
              className="rounded-xl object-cover w-40 h-48 mx-a\ border-2 border-primary"
            />
          </Tilt>
        </div>
      </section>

      <section className="px-6 py-16">
        <CurrencySlider />
      </section>

      <section className="container mx-auto max-w-screen-xl px-6 lg:pt-16 pt-12 pb-16">
        <h2 className="md:text-4xl text-3xl text-center font-bold pb-12">
          Regular Updates
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-8">
          <p className="text-[#a1abb9] sm:text-base text-xs">Voluptatem perspiciatis soluta at vel minus cupiditate aliquid accusamus eligendi numquam culpa dicta delectus dolorem totam doloribus porro, eaque adipisci? Nemo, minus.</p>
          <p className="text-[#a1abb9] sm:text-base text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem perspiciatis soluta at vel minus cupiditate aliquid accusamus eligendi numquam culpa dicta.</p>
          <p className="text-[#a1abb9] sm:text-base text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem perspiciatis soluta at vel delectus dolorem totam doloribus porro, eaque adipisci? Nemo, minus.</p>
        </div>
        <div className="mt-16 flex justify-center flex-wrap gap-x-16 gap-y-10">
          {randomNFTs.map(nft => <NFTCard key={nft.id} nft={nft}/>)}
        </div>
      </section>

      <section className="px-6 py-16">
        <CurrencySlider />
      </section>

      <section className="container mx-auto max-w-screen-xl px-6 lg:pt-16 pt-12 pb-16">
        <h2 className="md:text-4xl text-3xl text-center font-bold pb-12">
          Special Offers
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-8">
          <p className="text-[#a1abb9] sm:text-base text-xs">Voluptatem perspiciatis soluta at vel minus cupiditate aliquid accusamus eligendi numquam culpa dicta delectus dolorem totam doloribus porro, eaque adipisci? Nemo, minus.</p>
          <p className="text-[#a1abb9] sm:text-base text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem perspiciatis soluta at vel minus cupiditate aliquid accusamus eligendi numquam culpa dicta.</p>
          <p className="text-[#a1abb9] sm:text-base text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem perspiciatis soluta at vel delectus dolorem totam doloribus porro, eaque adipisci? Nemo, minus.</p>
        </div>
        <div className="mt-16 flex justify-center flex-wrap gap-x-16 gap-y-10">
          {randomNFTs2.map(nft => <NFTCard key={nft.id} nft={nft}/>)}
        </div>
      </section>

      <section className="container mx-auto max-w-screen-xl px-6 lg:pt-16 pt-12 pb-16">
        <h2 className="md:text-4xl text-3xl text-center font-bold pb-12">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10">
          <div className="">
            <h4 className="font-bold mb-4">Secure and Convenient Payment Options</h4>
            <p className="text-[#a1abb9]">At CompanyName, we prioritize secure and convenient payment options. We offer trusted platforms and encrypted gateways to protect your financial information. With our seamless payment process, shop with confidence knowing your personal details are safeguarded.</p>
            <button
              type="button"
              className="mt-8 px-4 py-2 font-content font-bold rounded-full border-primary bg-gradient-to-b from-secondary to-primary transition-all duration-300 ease-in-out"
            >
              Payment
            </button>
          </div>
          <div className="">
            <h4 className="font-bold mb-4">Wide Selection of High-Quality NFTs</h4>
            <p className="text-[#a1abb9]">Discover endless possibilities with our diverse collection of high-quality NFTs. From stunning artwork to immersive virtual experiences, we curate unique digital assets created by talented artists. Find something special, whether you're an art enthusiast, collector, or seeking unique digital assets.</p>
            <button
              type="button"
              className="mt-8 px-4 py-2 font-content font-bold rounded-full border-primary bg-gradient-to-b from-secondary to-primary transition-all duration-300 ease-in-out"
            >
              Catalogue
            </button>
          </div>
          <div className="">
            <h4 className="font-bold mb-4">Regularly Updated Inventory</h4>
            <p className="text-[#a1abb9]">At CompanyName, we keep things fresh and exciting. Our inventory is regularly updated, ensuring you always find new and captivating digital assets. From limited editions to exclusive drops, explore our regularly updated inventory to stay ahead of the curve. Unlock a world of endless possibilities.</p>
            <button
              type="button"
              className="mt-8 px-4 py-2 font-content font-bold rounded-full border-primary bg-gradient-to-b from-secondary to-primary transition-all duration-300 ease-in-out"
            >
              New Products
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
