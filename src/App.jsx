import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import Home from './pages/Home';
import Detail from './pages/Detail';

const  App =  () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/image/:id" element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
