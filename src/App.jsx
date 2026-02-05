import { SnackbarProvider } from 'notistack';
import './App.css'
import ExpencetrackerPage from './pages/ExpencetrackerPage'

function App() {


  return (
    <SnackbarProvider>
      <ExpencetrackerPage />
    </SnackbarProvider>
      
  )
}

export default App
