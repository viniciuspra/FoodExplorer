import { BrowserRouter } from "react-router-dom"
import { useAuth } from "../hooks/auth"

import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"

export default function Routes() {  
  const { user } = useAuth()
  return (
    <BrowserRouter>
      {!user ? <AuthRoutes /> : <AppRoutes />}
    </BrowserRouter>
  )
}
