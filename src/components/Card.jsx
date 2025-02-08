import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CircleHelp } from 'lucide-react';
const Card = (props) => {

    const [visibleInfo, setVisibleInfo] = useState(false);
    const handleQuestionClick = () => {
        setVisibleInfo(!visibleInfo);
    };

    if(props.image_id ){
        return(
            //m-4 albo bez
                <div className='relative overflow-hidden h-fit'>
                    <img src={`https://www.artic.edu/iiif/2/${props.image_id}/full/843,/0/default.jpg`} alt={props.title} className='cursor-pointer pointer-events-none '/>
                    <CircleHelp className='absolute top-5 right-5 z-10 cursor-pointer w-7 h-7 sm:w-10 sm:h-10' onClick={handleQuestionClick}/>
                    <div className={`w-full bg-stone-300 dark:bg-zinc-800 h-full absolute top-0 left-0 p-2 flex flex-col items-center justify-center ${visibleInfo ? "opacity-100" : "opacity-0 cursor-pointer" } transition-opacity duration-300 ease-in-out text-xs sm:text-lg p-5 ` } onClick={handleQuestionClick}>
                        <h3 className='text-center'>{props.title} {props.artist_title === null ? ('') : (<>- <span className='font-bold'>{props.artist_title}</span> </>)} </h3>
                        {/* <p className='text-center' dangerouslySetInnerHTML={{ __html: props.short_description }}></p> */}
                        <Link to={`/image/${props.id}`} className='mt-10 p-5 bg-zinc-800 hover:bg-zinc-950 dark:bg-stone-100 hover:dark:bg-stone-300 text-white dark:text-black'>See more
                        </Link>
                    </div>
                </div>
           
        )
    } else return null;
    
}

export default Card;