import  { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Line from '../components/Line';
import Loading from '../components/Loading';

const Detail = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const  { id } = useParams();
    const { theme } = useContext(ThemeContext);

    const fetchData = async () => {
        console.log("fetchData");
        const URL = `https://api.artic.edu/api/v1/artworks/${id}?fields=id,image_id,title,date_display,artist_display,description,inscriptions,artwork_type_title`;
        
        try {
            const response = await fetch(URL);
            if(!response.ok){
                throw new Error(`Response status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data.data);
            setData(data.data);
            setLoading(false);
        } catch(error){
            console.error(error.message);
            setLoading(false);
            }
        }
        
        useEffect(() => {
            fetchData();
        }, []);

    return(
        <div className='bg-stone-100 dark:bg-zinc-950 dark:text-white w-full flex flex-col items-center min-h-screen' data-theme={theme}>
            <Nav/>
            <Line/>
            <div className='max-w-[1900px] flex flex-col md:flex-row'>
                {loading ? <Loading/> : (
                <>
                <div>
                    <img src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} alt={"asd"} />
                </div>
                <div className='p-10 md:max-w-1/2 flex flex-col md:justify-center'>
                    {data.title ? (<p><span className='font-bold'>Title: </span>{data.title}</p>): (null)}
                    {data.artist_display ? (<p><span className='font-bold'>Artist: </span>{data.artist_display}</p>): (null)}
                    {data.date_display ? (<p><span className='font-bold'>Date: </span>{data.date_display}</p>) : (null)}
                    {data.artwork_type_title ? (<p><span className='font-bold'>Type: </span>{data.artwork_type_title}</p>) : (null)}
                    {data.inscriptions ? (<p><span className='font-bold'>Inscriptions: </span>{data.inscriptions}</p>) : (null)}
                    {data.description ? (<p><span className='font-bold'>Description: </span><span dangerouslySetInnerHTML={{__html: data.description}}></span></p>) : (null)}
                </div>
            </>)}
            </div>
            <Line/>
            <Footer/>
        </div>
    );
}

export default Detail;