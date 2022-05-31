import { useEffect, useState } from 'react';

export default function useGetMobile() {
    const [screenWidth, setScreenWidth] = useState(0);

    const getScreenWidth = () => {
        setScreenWidth(window.screen.width);
    }

    useEffect(() => getScreenWidth(), []);

    // Properly load when Instagram app arbitrarily sets window.innerWidth
    return screenWidth <= 768;
}