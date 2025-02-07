import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Line from './components/Line';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import Loading from './components/Loading';

const  App =  () => {
  const [page, setPage] = useState(1);
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  const [artworks, setArtwork] = useState([]);

  async function fetchData(){
    const URL = `https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&artwork_type_title=Painting&limit=12&fields=id,title,image_id,artist_title,short_description,artwork_type_title&page=${page}`;
    
    try {
      const response = await fetch(URL);
      if(!response.ok){
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setArtwork(data.data);
      console.log(data);
      setLoading(false);
    } catch(error){
      console.error(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);
  

  return (
    <div className="bg-stone-100 dark:bg-zinc-950 dark:text-white w-full flex flex-col items-center min-h-screen" data-theme={theme}>
      <Nav setTheme={setTheme} theme={theme}/>
      <Line/>
      {loading ? (<Loading/>):(<><Main artworks={artworks}/><Pagination setPage={setPage} page={page}/></>) }
      <Line/>
      <Footer/>
    </div>
  )
}

export default App;
