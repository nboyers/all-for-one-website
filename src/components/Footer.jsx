import React, { useEffect, useRef } from 'react';
import './CSS/Footer.css';

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Footer is in view
                    footerRef.current.style.display = 'block';
                } else {
                    // Footer is out of view
                    footerRef.current.style.display = 'block'; // Change to 'block' to keep it always visible for debugging
                }
            });
        }, options);

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <footer ref={footerRef}>
            {/* Your footer content goes here */}
            <div>
                <a href="/terms-of-service">Terms of Service</a>
                <a href="/privacy-policy">Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
