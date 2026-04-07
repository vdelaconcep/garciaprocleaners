import { useState, useEffect } from 'react';

export const useVisibleHeroOrFooter = () => {
    const [isHeroOrFooterVisible, setIsHeroOrFooterVisible] = useState(false);

    useEffect(() => {
        const footer = document.querySelector('footer');
        const hero = document.getElementById('heroSection');

        const elements = [footer, hero].filter(Boolean) as Element[];
        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const anyVisible = entries.some(entry => entry.isIntersecting);
                setIsHeroOrFooterVisible(anyVisible);
            },
            { threshold: 0.1 }
        );

        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return isHeroOrFooterVisible;
};