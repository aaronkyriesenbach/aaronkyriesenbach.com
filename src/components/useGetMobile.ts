import { useEffect, useState } from 'react';

export default function useGetMobile() {
    const [width, setWidth] = useState(0);

    const getWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => getWidth(), []);

    return width <= 768;
}