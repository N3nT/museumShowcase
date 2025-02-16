import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Line from '../components/Line';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const  Home =  () => {
  const [page, setPage] = useState(Number(localStorage.getItem('page')) || 1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [artworks, setArtwork] = useState([]);

  const { theme } = useContext(ThemeContext);

  const fetchData = async () => {
    const URL = `https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&artwork_type_title=Painting&limit=12&fields=id,title,image_id,artist_title,short_description,artwork_type_title&page=${page}`;
    
    try {
      const response = await fetch(URL);
      if(!response.ok){
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setArtwork(data.data);
      setTotalPage(data.pagination.total_pages);
      setLoading(false);
    } catch(error){
      console.error(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    localStorage.setItem('page', page);
  }, [page]);

  return (
    <div className="bg-stone-100 dark:bg-zinc-950 dark:text-white w-full flex flex-col items-center min-h-screen" data-theme={theme}>
      <Nav/>
      <Line/>
      {loading ? (<Loading/>):(<><Main artworks={artworks}/><Pagination setPage={setPage} page={page} total={totalPage}/></>) }
      <Line/>
      <Footer/>
    </div>
  )
}

export default Home;
