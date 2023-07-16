import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';

function Navbar() {

    const [collapse, setCollapse] = useState(false)

    const onToggle = () => {

        setCollapse(!collapse)
    }

    return (
        <div>

            {/* this div contains Title and Navbar icon */}
            <div className='flex w-full justify-between items-center py-5 px-5'>

                <h1 className='text-white font-bold text-xl'>
                    MAValencia
                </h1>

                <RxHamburgerMenu onClick={() => onToggle()} color='white' className='text-3xl md:hidden' />

            </div>
            {/* this div contains Title and Navbar icon */}


            {/* this div con'tains about me and Personal projects */}
            <div className={` py-5 w-full  ${collapse ? "inline-block" : "hidden"}`}>

                <h1 className='text-white text-center text-2xl my-5'>
                    About Me
                </h1>

                <h1 className='text-white text-center text-2xl  my-5'>
                    Personal Projects
                </h1>

            </div>
            {/* this div contain about me and Personal projects */}

        </div>

    )
}

export default Navbar
