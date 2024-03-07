function useListSocialMedia() {
  const items = [
    {
      platform: "Facebook",
      reactions: 0,
      comments: 0,
      shared: 0,
    },
    {
      platform: "Instagram",
      reactions: 0,
      comments: 0,
      shared: 0,
    },
    {
      platform: "Youtube",
      reactions: 0,
      comments: 0,
      shared: 0,
    },
    {
      platform: "Linkedin",
      reactions: 0,
      comments: 0,
      shared: 0,
    },
  ];

  return { items };
}

export default useListSocialMedia;
