import MainLayout from "./components/layout/MainLayout"
import ProtecedRoute from "./components/layout/ProtecedRoute"


function App() {

  return  (
    <ProtecedRoute>
       <MainLayout/>
    </ProtecedRoute>
  )
}

export default App
