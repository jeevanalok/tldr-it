import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidAPIKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://text-summarize-pro.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidAPIKey);
      headers.set("X-RapidAPI-Host", "text-summarize-pro.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.mutation({
      query(body) {
        return { url: `/summarizeFromUrl`, method: "POST", body };
      },
    }),
    getSummaryFromText: builder.mutation({
      query(body) {
        return { url: `/summarizeFromText`, method: "POST", body };
      },
    }),
  }),
});

export const { useGetSummaryMutation,useGetSummaryFromTextMutation } = articleApi;
