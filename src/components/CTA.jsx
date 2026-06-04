import styled from 'styled-components';

const Section = styled.section`
    background: ${({ theme }) => theme.colors.coral};
    text-align: center;
    padding: 6rem 5rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -100px;
        left: -100px;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.07);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -80px;
        right: -80px;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.05);
    }

    @media (max-width: 900px) {
        padding: 5rem 2rem;
    }
`;

const Title = styled.h2`
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 300;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
`;

const Description = styled.p`
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
    position: relative;
    z-index: 1;
`;

const Button = styled.a`
    background: #fff;
    color: ${({ theme }) => theme.colors.coral};
    border: none;
    padding: 0.95rem 2.5rem;
    border-radius: 0.3rem;
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative;
    z-index: 1;
    display: inline-block;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }
`;

export default function CTA() {
    return (
        <Section>
            <Title>Tecnologia a serviço<br />de quem cuida</Title>
            <Description>O AMPA nasceu na universidade, mas o impacto vai muito além dela.</Description>
            <Button href="#sobre">Saber mais sobre o projeto</Button>
        </Section>
    );
}
