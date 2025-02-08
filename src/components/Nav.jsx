import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { SunMedium, Moon } from 'lucide-react';

const Nav = () => {
  
    const {theme, toggleTheme} = useContext(ThemeContext);
    console.log(theme);

    return(
        <nav className='flex justify-between items-center max-w-[1000px] w-full p-5'>
            <h1 className="font-bold sm:text-xl">Art Institute of Chicago</h1>
            <button onClick={toggleTheme}>{theme === 'light' ? (<Moon className='w-7 h-7 sm:w-9 sm:h-9 cursor-pointer'/>) : (<SunMedium className='w-7 h-7 sm:w-9 sm:h-9 cursor-pointer'/>)}</button>
        </nav>
    )
}

export default Nav;