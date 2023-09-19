import './App.css'
import LineChart from './Components/LineChart/LineChart'
import Navbar from './Components/Navbar/Navbar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/Priceoptions/Priceoptions'


function App() {

  return (
    
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
