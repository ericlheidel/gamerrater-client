export const getAllGames = () => {
  return fetch("http://localhost:8000/games", {
    headers: {
      Authorization: "Token 0be249c88238743e5b4a7ac370b5145730c28e20",
    },
  }).then((res) => res.json())
}
