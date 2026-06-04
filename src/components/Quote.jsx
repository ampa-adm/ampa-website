import styled from 'styled-components';

const Section = styled.div`
    background: ${({ theme }) => theme.colors.peach};
    text-align: center;
    padding: 5rem;

    @media (max-width: 900px) {
        padding: 4rem 2rem;
    }
`;

const QuoteText = styled.p`
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: clamp(1.4rem, 2.5vw, 2.2rem);
    font-weight: 300;
    font-style: italic;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto 1.5rem;
    color: ${({ theme }) => theme.colors.dark};
`;

const Author = styled.p`
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.6;
    color: ${({ theme }) => theme.colors.dark};
`;

export default function Quote() {
    return (
        <Section className="reveal">
            <QuoteText>
                "Uma só pessoa não faz o aplicativo. A tecnologia se torna impacto quando há colaboração — entre desenvolvedores, profissionais de saúde e, acima de tudo, entre a ferramenta e o paciente."
            </QuoteText>
            <Author>Equipe AMPA · Inspira Lab · UFU</Author>
        </Section>
    );
}
