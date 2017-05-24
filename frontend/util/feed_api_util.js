export const fetchFeed = () => (
  $.ajax({
    method: "GET",
    url: "/api/posts"
  })
);
