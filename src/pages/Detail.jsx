import  { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Detail = () => {
    const  { id } = useParams();
    const { theme } = useContext(ThemeContext);
    return(
        <div className='bg-stone-100 dark:bg-zinc-950 dark:text-white w-full flex flex-col items-center min-h-screen' data-theme={theme}>
            <Nav/>
            <h1>{id}</h1>
            <Footer/>
        </div>
    );
}

export default Detail;