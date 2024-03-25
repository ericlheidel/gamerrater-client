import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom"
// import App from "../../App.jsx"
import { NavBar } from "../nav/Navbar.jsx"
import { AllGamesList } from "../games/AllGamesList.jsx"
import { useEffect, useState } from "react"

export const ApplicationViews = () => {
  const [currentUserToken, setCurrentUserToken] = useState("")

  useEffect(() => {
    const localGamerUser = localStorage.getItem("gamer_token")
    const gamerUser = JSON.parse(localGamerUser)
    setCurrentUserToken(gamerUser.token)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route
            path="/allgames"
            element={<AllGamesList currentUserToken={currentUserToken} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
