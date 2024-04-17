import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login.jsx"
import { Register } from "../auth/Register.jsx"
import { Authorized } from "../auth/Authorized.jsx"
import Home from "./Home.jsx"
import { useState } from "react"
import { GamesList } from "../games/GamesList.jsx"
import { Game } from "../games/Game.jsx"
import { GameFormFour } from "../games/GameForm4.jsx"

export const ApplicationViews = () => {
  const [games, setGames] = useState([])

  const fetchGamesFromAPI = async () => {
    let url = "http://localhost:8000/games"

    const response = await fetch(url, {
      headers: {
        Authorization: `Token ${
          JSON.parse(localStorage.getItem("gamer_token")).token
        }`,
      },
    })
    const games = await response.json()
    setGames(games)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="/" element={<Home />} />
          <Route path="/allgames">
            <Route
              index
              element={
                <GamesList games={games} fetchGames={fetchGamesFromAPI} />
              }
            />
            <Route path=":gameId" element={<Game />} />
          </Route>
          <Route
            path="/gameform"
            element={<GameFormFour fetchGames={fetchGamesFromAPI} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
