// !!! unconsolidated copy = {...game}
// !!! this one works

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const GameFormFour = ({ fetchGames }) => {
  const initialGameState = {
    title: "",
    designer: "",
    year: 0,
    number_of_players: 0,
    play_time: 0,
    age: 0,
    categories: [],
  }

  const [categories, changeCategories] = useState([])
  const [game, updateGameProps] = useState(initialGameState)
  const navigate = useNavigate()

  const fetchCategories = async () => {
    const response = await fetch("http://localhost:8000/categories", {
      headers: {
        Authorization: `Token ${
          JSON.parse(localStorage.getItem("gamer_token")).token
        }`,
      },
    })
    const categories = await response.json()
    changeCategories(categories)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const createGame = async (evt) => {
    evt.preventDefault()

    await fetch("http://localhost:8000/games", {
      method: "POST",
      headers: {
        Authorization: `Token ${
          JSON.parse(localStorage.getItem("gamer_token")).token
        }`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    })

    await fetchGames()

    navigate("/allgames")
  }

  return (
    <div>
      <form>
        <fieldset>
          <div className="flex flex-col">
            Title:
            <input
              type="text"
              name="title"
              value={game.title}
              className="border rounded-md p-2 border-solid border-violet-900 hover:bg-fuchsia-500 hover:text-violet-50 bg-slate-50 focus:outline-violet-900"
              onChange={(e) => {
                const copy = { ...game }
                copy.title = e.target.value
                updateGameProps(copy)
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="flex flex-col">
            <h3 className="mt-3">Designer:</h3>
            <input
              type="text"
              name="designer"
              value={game.designer}
              className=" border rounded-md p-2 border-solid border-violet-900 hover:bg-fuchsia-500 hover:text-violet-50 bg-slate-50 focus:outline-violet-900"
              onChange={(e) => {
                const copy = { ...game }
                copy.designer = e.target.value
                updateGameProps(copy)
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="flex flex-col">
            <h3 className="mt-3">Year:</h3>
            <input
              type="number"
              name="year"
              value={game.year}
              className=" border rounded-md p-2 border-solid border-violet-900 hover:bg-fuchsia-500 hover:text-violet-50 bg-slate-50 focus:outline-violet-900"
              onChange={(e) => {
                const copy = { ...game }
                copy.year = parseInt(e.target.value)
                updateGameProps(copy)
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="flex flex-col">
            <h3 className="mt-3">Number of Players:</h3>
            <input
              type="number"
              name="number_of_players"
              value={game.number_of_players}
              className=" border rounded-md p-2 border-solid border-violet-900 hover:bg-fuchsia-500 hover:text-violet-50 bg-slate-50 focus:outline-violet-900"
              onChange={(e) => {
                const copy = { ...game }
                copy.number_of_players = parseInt(e.target.value)
                updateGameProps(copy)
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="flex flex-col">
            <h3 className="mt-3">Play times {"(Seconds)"}:</h3>
            <input
              type="number"
              name="play_time"
              value={game.play_time}
              className=" border rounded-md p-2 border-solid border-violet-900 hover:bg-fuchsia-500 hover:text-violet-50 bg-slate-50 focus:outline-violet-900"
              onChange={(e) => {
                const copy = { ...game }
                copy.play_time = parseInt(e.target.value)
                updateGameProps(copy)
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="flex flex-col">
            <h3 className="mt-3">Age:</h3>
            <input
              type="text"
              name="age"
              value={game.age}
              className=" border rounded-md p-2 border-solid border-violet-900 hover:bg-fuchsia-500 hover:text-violet-50 bg-slate-50 focus:outline-violet-900"
              onChange={(e) => {
                const copy = { ...game }
                copy.age = e.target.value
                updateGameProps(copy)
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="flex flex-col">
            <select
              value={game.electedCategoryId}
              className="mt-7 border rounded-md p-2 border-solid border-violet-900 hover:bg-fuchsia-500 hover:text-violet-50 bg-slate-50 focus:outline-violet-900"
              onChange={(e) => {
                const copy = { ...game }
                copy.categories = parseInt(e.target.value)
                updateGameProps(copy)
              }}
            >
              <option value={0} key={0}>
                Select a Category...
              </option>
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                )
              })}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <button
            type="submit"
            className="mt-7 border rounded-md p-2 border-solid border-violet-900 hover:bg-fuchsia-500 hover:text-violet-50 bg-slate-50 focus:outline-violet-900"
            onClick={createGame}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  )
}
