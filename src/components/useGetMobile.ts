import { useEffect, useState } from 'react';

export default function useGetMobile() {
    const [width, setWidth] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);

    const getValues = () => {
        setWidth(window.innerWidth);
        setScreenWidth(window.screen.width);
    }

    useEffect(() => getValues(), []);

    // Properly load when Instagram app arbitrarily sets window.innerWidth
    return (width > screenWidth ? screenWidth : width) <= 768;
}