import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/jeevanalok")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Just TLDR Boring Articles with <br className="max-md:hidden" />
        <span className="blue_gradient">OpenAI GPT</span>
      </h1>
      <h2 className="desc">
        An article too long! too boring! Leave the hassle to TlDR-It ,open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
