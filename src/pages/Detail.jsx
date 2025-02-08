import  { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Detail = () => {
    const [data, setData] = useState();
    const  { id } = useParams();
    const { theme } = useContext(ThemeContext);

    const fetchData = async () => {
        const URL = `https://api.artic.edu/api/v1/artworks/${id}`;
        
        try {
            const response = await fetch(URL);
            if(!response.ok){
                throw new Error(`Response status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data.data);
            setData(data.data);
        } catch(error){
            console.error(error.message);
            }
        }
        
        useEffect(() => {
        fetchData();
        },);

    return(
        <div className='bg-stone-100 dark:bg-zinc-950 dark:text-white w-full flex flex-col items-center min-h-screen' data-theme={theme}>
            <Nav/>
            <div className='max-w-[1900px]'>
                <div>
                    {/* <img src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} alt={props.title} /> */}
                </div>
                <div>
                    <p>{data.id}</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Detail;