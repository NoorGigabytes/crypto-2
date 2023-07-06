import React, { useState } from "react";
import { FaTelegramPlane, FaDiscord, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <div className="text-[#a1abb9] md:container mx-auto pb-14 pt-32 px-5">
      <div className="mb-10 flex flex-wrap justify-around gap-16">
        <div className="w-min">
          <h1 className="font-headings md:text-4xl text-3xl text-primary pb-5">
            <span className="text-secondary">Company</span>Logo
          </h1>
          <p className="pb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, rerum iusto, fugiat, eum nobis aliquid facilis pariatur esse.
          </p>
        </div>
        <div>
            <h3 className="text-white font-medium pb-3 text-lg">Important Links</h3>
            <ul className="">
                <li className="pb-1 hover:text-primary transition-all duration-300 ease-in-out">
                    <Link to="/">Homepage</Link>
                </li>
                <li className="pb-1 hover:text-primary transition-all duration-300 ease-in-out">
                    <Link to="/about">About</Link>
                </li>
                <li className="pb-1 hover:text-primary transition-all duration-300 ease-in-out">
                    <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li className="pb-1 hover:text-primary transition-all duration-300 ease-in-out">
                    <Link to="/privacy-policy">Private Policy</Link>
                </li>
            </ul>
        </div>
        <div>
            <h3 className="text-white font-medium pb-3 text-lg">Explore</h3>
            <ul className="">
                <li className="pb-1 hover:text-primary transition-all duration-300 ease-in-out">
                    <Link to="/">Catalogue</Link>
                </li>
                <li className="pb-1 hover:text-primary transition-all duration-300 ease-in-out">
                    <Link to="/">New Products</Link>
                </li>
                <li className="pb-1 hover:text-primary transition-all duration-300 ease-in-out">
                    <Link to="/">Payment</Link>
                </li>
            </ul>
        </div>
        <div className="text-3xl flex items-center gap-4 mx-auto sm:m-0 text-primary">
            <a href="/" className="transition-all duration-300 ease-in-out"><FaTelegramPlane/></a>
            <a href="/" className="transition-all duration-300 ease-in-out"><FaDiscord/></a>
            <a href="/" className="transition-all duration-300 ease-in-out"><FaFacebook/></a>
            <a href="/" className="transition-all duration-300 ease-in-out"><FaInstagram/></a>
            <a href="/" className="transition-all duration-300 ease-in-out"><FaTwitter/></a>
        </div>
      </div>
      <div className="border-t border-[#53585f] pt-5 flex flex-wrap gap-x-12 gap-y-4 items-center justify-between">
        <div className="mx-auto sm:m-0"><p>©2023 Company. All rights reserved.</p></div>
        <div className="my-auto">
          <form onSubmit={handleSubmit}>
            <div>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="font-content py-2 px-3 focus:outline-none rounded-l-full sm:text-base text-sm bg-[#272727] focus:border-primary border-primary"/>
              <button type="submit" className="border border-l-0 border-primary text-primary font-content py-2 px-3 rounded-r-full sm:text-base text-sm hover:text-white hover:bg-primary transition-all duration-300 ease-in-out">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
