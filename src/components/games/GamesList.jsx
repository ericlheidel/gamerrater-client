import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const GamesList = ({ games, fetchGames }) => {
  const navigate = useNavigate()

  useEffect(() => {
    fetchGames()
  }, [])

  return (
    <div className="games-container">
      <button
        onClick={() => {
          navigate("/gameform")
        }}
        className="mt-5 border rounded-md p-2 border-solid border-violet-900 hover:bg-fuchsia-500 hover:text-violet-50 bg-slate-50"
      >
        Add A Game
      </button>
      {games && games.length
        ? games.map((game) => {
            return (
              <div
                key={`key-${game.id}`}
                className="border p-5 border-solid hover:bg-fuchsia-500 hover:text-violet-50 rounded-md border-violet-900 mt-5 bg-slate-50"
              >
                <Link key={game.id} to={`/allgames/${game.id}`}>
                  <div>{game.title}</div>
                </Link>
              </div>
            )
          })
        : ""}
    </div>
  )
}
