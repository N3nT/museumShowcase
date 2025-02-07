import { Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {

    return(
        <div className="max-w-[1000px] p-5 flex justify-between w-full items-center">
            <div>
                <p>Author: <a href="https://github.com/N3nT" target="_blank">N3nT</a></p>
                <div className='flex w-[100px] justify-around'>
                    <a href="#"><Instagram /></a>
                    <a href="#"><Github /></a>
                    <a href="#"><Linkedin /></a>
                </div>
            </div>
            <p>All images are on under Creative Commons Zero (CC0)</p>
        </div>
    )
}

export default Footer;