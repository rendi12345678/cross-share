import React from 'react';
import ListSocialMediaPosts from '../container/ListSocialMediaPosts';
import LayoutTitle from '../ui/LayoutTitle';

const items = [
  {
    title: "Aku bertemu doppelager langka yang mengerikan that's not my neighbor",
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
  return (
    <>
      <LayoutTitle title="Youtube Posts" />
      <ListSocialMediaPosts items={items}/>
    </>
  );
}

export default Youtube;
