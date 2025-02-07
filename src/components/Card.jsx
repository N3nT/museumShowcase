import { useState } from 'react';
import { CircleHelp } from 'lucide-react';
const Card = (props) => {

    const [visibleInfo, setVisibleInfo] = useState(false);
    const handleQuestionClick = () => {
        setVisibleInfo(!visibleInfo);
    };

    return(
        //m-4 albo bez
        <div className='relative overflow-hidden h-fit'>
            <img src={`https://www.artic.edu/iiif/2/${props.image_id}/full/843,/0/default.jpg`} alt={props.title} onClick={handleQuestionClick} className='cursor-pointer'/>
            <CircleHelp className='absolute top-5 right-5 z-10 cursor-pointer w-7 h-7 sm:w-10 sm:h-10' onClick={handleQuestionClick}/>
            <div className={`w-full bg-stone-300 dark:bg-zinc-800 h-full absolute top-0 left-0 p-2 flex flex-col items-center justify-center ${visibleInfo ? "opacity-100" : "opacity-0" } transition-opacity duration-300 ease-in-out pointer-events-none text-xs sm:text-lg sm:p-5` }>
                <h3 className='font-bold '>{props.title} - {props.artist_title}</h3>
                <p className='text-center'>{props.short_description}</p>
                <a href="" className='mt-10 p-5 bg-zinc-800 dark:bg-stone-300 text-white dark:text-black'>See more</a>
            </div>
        </div>
    )
}

export default Card;