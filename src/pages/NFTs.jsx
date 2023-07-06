import React, { useEffect, useState } from "react";
import NFTCard from "./includes/NFTCard";
import nftList from "../static/json/nfts.json";
import Pagination from "./includes/Pagination";
import CategoryPills from "../components/CategoryPills";

export default function NFTs() {
  const [cards] = useState(nftList);
  const [filteredCards, setFilteredCards] = useState(cards);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState(null);
  const categories = [
    "All",
    "Addams Family",
    "Anime",
    "DC",
    "Disney",
    "Harry Potter",
    "Marvel",
    "Star Wars",
    "The Matrix",
  ];

  useEffect(() => {
    let filteredCards = cards;

    if (selectedCategory !== "All") {
      filteredCards = filteredCards.filter((card) => card.category === selectedCategory);
    }

    if (selectedTag) {
      filteredCards = filteredCards.filter((card) => card.tag === selectedTag);
    }

    setFilteredCards(filteredCards);
  }, [selectedCategory, selectedTag, cards]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedTag(null); // Reset selected tag
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <section className="container mx-auto max-w-screen-xl px-6 lg:pt-20 pt-12 pb-16">
      <div className="mb-10 mt-3 flex flex-wrap gap-5 justify-center">
        {categories.map((category) => (
          <CategoryPills
            key={category}
            category={category}
            selected={category === selectedCategory}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
      <ul className="flex flex-wrap justify-center text-xs sm:text-base gap-x-4">
        <li className="">
          <a
            className={`transition-all duration-300 ease-in-out cursor-pointer ${
              selectedTag === null ? "text-primary" : ""
            }`}
            onClick={() => {
              handleTagClick(null);
            }}
          >
            All
          </a>
        </li>

        <li className="">
          <a
            className={`transition-all duration-300 ease-in-out cursor-pointer ${
              selectedTag === "new" ? "text-primary" : ""
            }`}
            onClick={() => handleTagClick("new")}
          >
            New
          </a>
        </li>

        <li className="">
          <a
            className={`transition-all duration-300 ease-in-out cursor-pointer ${
              selectedTag === "sale" ? "text-primary" : ""
            }`}
            onClick={() => handleTagClick("sale")}
          >
            Sale
          </a>
        </li>
      </ul>
      {filteredCards?.length > 0 ? (
        <>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 mb-24 mt-10">
            {currentCards.map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </div>
          <Pagination
            postsPerPage={cardsPerPage}
            totalPosts={filteredCards.length}
            paginate={paginate}
          />
        </>
      ) : (
        <div className="flex flex-col items-center mb-32 mt-44 gap-16">
          <p className="text-center text-[#a1abb9] text-4xl">Nothing to show</p>
        </div>
      )}
    </section>
  );
}
