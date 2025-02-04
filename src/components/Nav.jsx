import { useState } from 'react';
import { SunMedium, Moon } from 'lucide-react';
function Nav(props){    

    const [icon, setIcon] = useState(<Moon/>);

    const handleThemeChange = () => {
        if(props.theme === 'light'){
          props.setTheme("dark");
          setIcon(<SunMedium/>)
        }else{
          props.setTheme("light");
          setIcon(<Moon/>)
        }
    }

    return(
        <nav className='flex justify-between items-center max-w-[1000px] w-full p-5'>
            <h1 className="font-bold">Art Institute of Chicago</h1>
            <button onClick={handleThemeChange}>{icon}</button>
        </nav>
    )
}

export default Nav;