import { BrowserRouter } from "react-router-dom"

import AuthRoutes from "./auth.routes"

export default function Routes() {  
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}
