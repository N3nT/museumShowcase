import { useState } from 'react';
import { CircleHelp } from 'lucide-react';
function Card(props){

    const [visibleInfo, setVisibleInfo] = useState(false);
    const handleQuestionClick = () => {
        setVisibleInfo(!visibleInfo);
    };

    return(
        <div className='relative max-w-[500px] m-4 overflow-hidden'>
            <img src={`https://www.artic.edu/iiif/2/${props.image_id}/full/843,/0/default.jpg`} alt={props.title} onClick={handleQuestionClick} className='cursor-pointer'/>
            <CircleHelp className='absolute top-5 right-5 z-10 cursor-pointer' onClick={handleQuestionClick}/>
            <div className={`w-full bg-stone-300 dark:bg-zinc-800 h-full absolute top-0 left-0 p-2 flex flex-col items-center justify-center ${visibleInfo ? "opacity-100" : "opacity-0" } transition-opacity duration-300 ease-in-out pointer-events-none`}>
                <h3 className='font-bold text-xs'>{props.title}</h3>
                <p className='text-xs'>{props.artist_title}</p>
                <p className='text-center text-xs'>{props.short_description}</p>
            </div>
        </div>
    )
}

export default Card;