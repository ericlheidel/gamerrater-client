import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom"
// import App from "../../App.jsx"
import { NavBar } from "../nav/Navbar.jsx"
import { AllGamesList } from "../games/AllGamesList.jsx"

export const ApplicationViews = () => {
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
          <Route path="/allgames" element={<AllGamesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
