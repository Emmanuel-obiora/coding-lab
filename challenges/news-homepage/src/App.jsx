import React from 'react';
import Main from './Components/Main/Main';
import './styles.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Popular from './Components/Popular';
import FormMain from './Components/Form/FormMain';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/main' element={<Main />} />
          <Route path='/form' element={<FormMain />} />
          <Route path='/popular' element={<Popular />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App