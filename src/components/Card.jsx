import { useState } from 'react';
import { CircleHelp } from 'lucide-react';
import data from "../data.json";
function Card(){

    const [backPanelOpacity, setBackPanelOpacity] = useState(0);
    const handleQuestionClick = () => {
        if(backPanelOpacity === 0){
            setBackPanelOpacity(100);
        }else{
            setBackPanelOpacity(0);
        }
    }
    console.log(data.pagination);
    return(
        <div className='relative max-w-[500px] m-4 overflow-hidden'>
            <img src={`https://www.artic.edu/iiif/2/${data.data[0].image_id}/full/843,/0/default.jpg`} alt={data.data[0].title}/>
            <CircleHelp className='absolute top-5 right-5 z-10' onClick={handleQuestionClick}/>
            <div className={`w-full bg-stone-300 dark:bg-zinc-800 h-full absolute top-0 left-0 p-2 flex flex-col items-center justify-center opacity-${backPanelOpacity} transition-opacity duration-300 ease-in-out`}>
                <h3 className='font-bold text-xs'>{data.data[0].title}</h3>
                <p className='text-xs'>{data.data[0].artist_title}</p>
                <p className='text-center text-xs'>{data.data[0].short_description}</p>
            </div>
        </div>
    )
}

export default Card;