import { Route, Routes } from 'react-router-dom'
import AboutUs from './page/About-Us'
import Landing from './page/Landing'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  )
}

export default App
