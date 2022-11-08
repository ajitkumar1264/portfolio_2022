import Navbar from '../components/Navbar'
import react,{useState} from 'react'
import '../styles/globals.css'
import annex from "../components/Context"

function MyApp({ Component, pageProps }) {

  const [darkmode, setdarkmode] = useState(false)

  return <>

  <annex.Provider value={{darkmode,setdarkmode}}>
  <Navbar/>
  <Component {...pageProps}  />
  </annex.Provider>

  </> 
}

export default MyApp
