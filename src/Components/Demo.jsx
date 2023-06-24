import React from "react";
import { useEffect, useState } from "react";

import { copy, linkIcon, loader, tick } from "../assets";

import {
  useGetSummaryMutation,
  useGetSummaryFromTextMutation,
} from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
    text: "",
  });

  const [getSummary, { isLoading, isError, isSuccess }] =
    useGetSummaryMutation();

  const [getSummaryFromText, textStatus] =
    useGetSummaryFromTextMutation();

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    const postData = new URLSearchParams({
      text: article.text,
      percentage: "40",
    });
    const { data } = await getSummaryFromText(postData);

    if (data?.summary) {
      setArticle({ ...article, summary: data.summary });
    }

    console.log(data.summary);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = new URLSearchParams({
      url: article.url,
      percentage: "10",
    });
    const { data } = await getSummary(postData);

    if (data?.summary) {
      setArticle({ ...article, summary: data.summary });
    }

    console.log(data.summary);
  };
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2 items">
        <form
          action=""
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a url:"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
            className="url_input peer"
            required
          ></input>
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            Extract ↵
          </button>
        </form>
        <h3 className="blue_gradient font-bold self-center text-xl">OR</h3>

        <form
          action=""
          className="relative flex flex-col "
          onSubmit={handleTextSubmit}
        >
          <div className="flex flex-row relative justify-center items-center">
            <img
              src={copy}
              alt="link"
              className="absolute my-2 left-0 ml-3 w-5"
            />

            <textarea
              placeholder="Paste article text"
              className=" url_input w-full"
              value={article.text}
              onChange={(e) => {
                setArticle({ ...article, text: e.target.value });
              }}
              required
            ></textarea>
          </div>
          <button type="Submit" className="black_btn self-center my-5">
            Summarise
          </button>
        </form>
      </div>

      <div className="my-10 max-w-full flex justify-center items-center">
        {isLoading || textStatus.isLoading ? (
          <img
            src={loader}
            alt="loader"
            className="w-20 h-20 object-contain"
          ></img>
        ) : isError || textStatus.isError ? (
          <p className="font-inter font-bold text-black text-center">
            Error
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3 h-2">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article <span className="orange_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p>{article.summary}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
