import './App.css'
import Brewery from './Components/breweryInfo'
import Breweries from './Components/features'
import BreweryBarChart from './Components/graph'

function App() {

  return (
    <div className="app">
      <div className='title-container'>
        <h1>Find That Brew!</h1>
        <h2>Your One Stop Shop For Finding A Local Brewery</h2>
      </div>
      <div className='content-container'>
        <Breweries /> {/* Move the Breweries component to the top */}
        <BreweryBarChart /> {/* Move the BreweryBarChart component to the bottom */}
        <Brewery />
      </div>
    </div>
  )
}

export default App
