import { useEffect } from 'react';
import { Hero, About, Features, Impact, Process, Quote, Team, CTA, Footer } from '../components';

export default function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    observer.unobserve(e.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        return () => {
            document.querySelectorAll('.reveal').forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <>
            <Hero />
            <About />
            <Features />
            <Impact />
            <Process />
            <Quote />
            <Team />
            <CTA />
            <Footer />
        </>
    );
}
