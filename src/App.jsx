import { useState } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Line from './components/Line';
import Pagination from './components/Pagination';
import Footer from './components/Footer';


function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className="bg-stone-100 dark:bg-zinc-950 dark:text-white w-full flex flex-col items-center" data-theme={theme}>
      <Nav setTheme={setTheme} theme={theme}/>
      <Line/>
      <Main/>
      <Pagination/>
      <Line/>
      <Footer/>
    </div>
  )
}

export default App;
