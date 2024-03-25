import { useEffect, useState } from "react"
import { getAllGames } from "../../services/gamesService.jsx"

export const AllGamesList = () => {
  const [allGames, setAllGames] = useState([])

  const getAndSetAllGames = () => {
    getAllGames().then((games) => {
      setAllGames(games)
    })
  }

  useEffect(() => {
    getAndSetAllGames()
  }, [])

  useEffect(() => {
    console.log(allGames)
  }, [allGames])

  return <>GAMES LIST</>
}
