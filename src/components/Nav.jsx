import { useState } from 'react';
import { SunMedium, Moon } from 'lucide-react';

const Nav = (props) => {    

    const [icon, setIcon] = useState(<Moon className='w-7 h-7 sm:w-9 sm:h-9 cursor-pointer'/>);

    const handleThemeChange = () => {
        if(props.theme === 'light'){
          props.setTheme("dark");
          setIcon(<SunMedium className='w-7 h-7 sm:w-9 sm:h-9 cursor-pointer'/>)
        }else{
          props.setTheme("light");
          setIcon(<Moon className='w-7 h-7 sm:w-9 sm:h-9 cursor-pointer'/>)
        }
    }

    return(
        <nav className='flex justify-between items-center max-w-[1000px] w-full p-5'>
            <h1 className="font-bold sm:text-xl">Art Institute of Chicago</h1>
            <button onClick={handleThemeChange}>{icon}</button>
        </nav>
    )
}

export default Nav;