import 'antd/dist/antd.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
// import Forecasts from "../forecasts/forecasts";
// import Forecast from "../forecast/forecast";
// import Task from "../task/task";
// import Variant from "../variant/variant";
import {DisplayWithConsole} from "../displayWithConsole";
import {DisplayZnoStandalone} from "../displayZnoStandalone";

// import './app.css';


function App() {
  // return  <Forecasts/>
  return <Router>
    <Routes>
      <Route path='/console' element={<DisplayWithConsole/>}/>
      <Route path='/zno' element={<DisplayZnoStandalone />}/>
      {/*<Route path='/' element={<Navigate replace to="/forecast"/>}/>*/}
      {/*<Route path='forecast/variant' element={<Variant/>}></Route >*/}
      {/*<Route path='forecast/task' element={<Task/>}></Route >*/}
      {/*<Route path='forecast' element={<Forecasts/>}></Route >*/}
      {/*<Route path="forecast/:id" element={<Forecast/>}/>*/}



    </Routes>
  </Router>
}

export default App;