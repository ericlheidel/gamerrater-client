export const getAllGames = () => {
  return fetch("http://localhost:8000/games").then((res) => res.json())
}
