
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layouts'
import { HomeContainer } from './containers'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { DetailPokemon } from './component'

const queryClient = new QueryClient()

function App() {
 
  const routes = createBrowserRouter ([{
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <HomeContainer/>
      },
      {
        path: 'pokemon/:pokemonName',
        element: <DetailPokemon/>
      },
      {
        path: '*',
        element: <h1>Page not Found</h1>
      }
  ]
  }])

  return (
    
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes}/>
    </QueryClientProvider>
      
  )
}

export default App
