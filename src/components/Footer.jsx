import styled from 'styled-components';

const FooterSection = styled.footer`
    background: ${({ theme }) => theme.colors.dark};
    color: rgba(245, 241, 236, 0.5);
    padding: 2.5rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
        padding: 2.5rem 2rem;
    }
`;

const Logo = styled.div`
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.coral};
    font-weight: 600;
`;

const Text = styled.p`
    font-size: 0.78rem;
`;

export default function Footer() {
    return (
        <FooterSection>
            <Logo>AMPA</Logo>
            <Text>Assistência ao Paciente Anticoagulado · UFU · Inspira Lab</Text>
            <Text>Prêmio Inspirando Cuidado</Text>
        </FooterSection>
    );
}
