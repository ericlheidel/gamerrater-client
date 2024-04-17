import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Game = () => {
  const { gameId } = useParams()

  const [game, setGame] = useState({})

  const fetchRockFromAPI = async () => {
    let url = `http://localhost:8000/games/${gameId}`

    const response = await fetch(url, {
      headers: {
        Authorization: `Token ${
          JSON.parse(localStorage.getItem("gamer_token")).token
        }`,
      },
    })
    const game = await response.json()
    setGame(game)
  }

  useEffect(() => {
    fetchRockFromAPI()
  }, [])

  return (
    <div className="game-details-container">
      <div className="game-details-div">
        <h2>{game.title}</h2>
        <div>{game.designer}</div>
        <div>{game.year}</div>
        <div>{game.number_of_players}</div>
        <div>{game.age}</div>
        <div className="ml-5 mt-5">
          <u>{"Categories:"}</u>
          {game.categories?.map((category) => {
            return <div key={category.id}>{category.label}</div>
          })}
        </div>
      </div>
    </div>
  )
}
