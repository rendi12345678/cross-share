import React from "react";
import useYoutubeVideos from "../../hooks/useYoutubeVideos";
import LayoutTitle from "./../ui/LayoutTitle";
import ListSocialMediaPosts from "./ListSocialMediaPosts";

const items = [
  {
    title:
      "Aku bertemu doppelager langka yang mengerikan that's not my neighbor",
    reactions: 0,
    comments: 0,
    shared: 0,
  },
  {
    title: "Instagram",
    reactions: 0,
    comments: 0,
    shared: 0,
  },
  {
    title: "Youtube",
    reactions: 0,
    comments: 0,
    shared: 0,
  },
  {
    title: "Linkedin",
    reactions: 0,
    comments: 0,
    shared: 0,
  },
];

function Youtube() {
  useYoutubeVideos();

  return (
    <>
      <LayoutTitle title="Youtube Posts" />
      <ListSocialMediaPosts items={items} />
    </>
  );
}

export default Youtube;
