import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.4rem 4rem;
    background: transparent;
    transition: background 0.4s, backdrop-filter 0.4s;

    &.scrolled {
        background: rgba(245, 241, 236, 0.85);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(234, 115, 110, 0.15);
    }

    @media (max-width: 900px) {
        padding: 1.2rem 2rem;
    }
`;

const Logo = styled.div`
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.7rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.colors.coral};
`;

const Links = styled.ul`
    display: flex;
    gap: 2.2rem;
    list-style: none;

    a {
        text-decoration: none;
        font-size: 0.82rem;
        font-weight: 500;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.dark};
        opacity: 0.7;
        transition: opacity 0.2s, color 0.2s;

        &:hover {
            opacity: 1;
            color: ${({ theme }) => theme.colors.coral};
        }
    }

    @media (max-width: 900px) {
        display: none;
    }
`;

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Nav className={isScrolled ? 'scrolled' : ''}>
            <Logo>AMPA</Logo>
            <Links>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#funcionalidades">Funcionalidades</a></li>
                <li><a href="#impacto">Impacto</a></li>
                <li><a href="#processo">Como funciona</a></li>
                <li><a href="#equipe">Equipe</a></li>
            </Links>
        </Nav>
    );
}
