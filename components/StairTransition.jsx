"use client"

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Components
import Stair from './Stair';

const StairTransition = () => {

    const pathName = usePathname();

    return (
        <>
            <AnimatePresence mode='wait'>
                <div key={pathName}>
                    <div className='h-screen w-screen fixed left-0 right-0 pointer-events-none z-40 flex' /* top-0 */>
                        <Stair />
                    </div>
                </div>
            </AnimatePresence>
        </>
    );
}

export default StairTransition;