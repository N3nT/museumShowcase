import { Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {

    return(
        <div className="max-w-[1000px] p-5 flex justify-between w-full items-center text-sm sm:text-base">
            <div>
                <p>Author: <a href="https://github.com/N3nT" target="_blank">N3nT</a></p>
                <div className='flex  justify-around'>
                    <a href="#"><Instagram  className='w-5 h-5'/></a>
                    <a href="#"><Github className='w-5 h-5' /></a>
                    <a href="#"><Linkedin  className='w-5 h-5'/></a>
                </div>
            </div>
            <p className='w-[150px] sm:w-auto'>All images are under <a href="https://www.artic.edu/image-licensing" className='font-bold'>Creative Commons Zero (CC0)</a></p>
        </div>
    )
}

export default Footer;