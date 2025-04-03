import { useEffect, useState } from "react";

export function Keys () {

    const[isHidden, setIsHidden] = useState(true);

    const handleKeys = (event) => {
        if (event.key === 'Escape' ){
            setIsHidden(prev => !prev);
        }
        console.log(event.key)
    }
    useEffect(() => {

        window.addEventListener('keyup', handleKeys);
        return () => {
            window.addEventListener('keyup', handleKeys);
        }

    }, []);

    return (
        <>
            <h1>Press Anything</h1>
            { !isHidden && <p> You typed 'Escape' here, just to display it cool</p>}
        </>
    )

}