const search = (type, search, page) => {
  return fetch(
    `https://api.github.com/search/${encodeURIComponent(type)}?q=${encodeURIComponent(search)}&page=${encodeURIComponent(page)}`,
    {
      method: "get",
      headers: new Headers({
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${import.meta.env.VITE_GIT_ENV}`,
        "X-GitHub-Api-Version": "2022-11-28",
      }),
    }
  );
};

export { search };
