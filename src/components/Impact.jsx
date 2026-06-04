import styled from 'styled-components';

const Section = styled.section`
    background: ${({ theme }) => theme.colors.dark};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    padding: 6rem 5rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        padding: 4rem 2rem;
    }
`;

const SectionLabel = styled.div`
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.peach};
    font-weight: 500;
    margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: 300;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.offwhite};

    em {
        font-style: italic;
        color: ${({ theme }) => theme.colors.coralLight};
    }
`;

const Text = styled.p`
    color: rgba(245, 241, 236, 0.65);
    font-size: 0.95rem;
    line-height: 1.8;
    margin-top: 1.5rem;

    &:last-child {
        margin-top: 0.8rem;
    }
`;

const Numbers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
`;

const NumCard = styled.div`
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 1rem;
    padding: 2rem 1.5rem;
    transition: background 0.3s;

    &:hover {
        background: rgba(234, 115, 110, 0.1);
    }
`;

const Num = styled.div`
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 3rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.coralLight};
    line-height: 1;
`;

const NumLabel = styled.div`
    font-size: 0.78rem;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: rgba(245, 241, 236, 0.5);
    margin-top: 0.5rem;
    line-height: 1.5;
`;

export default function Impact() {
    return (
        <Section id="impacto">
            <div className="reveal">
                <SectionLabel>Impacto real</SectionLabel>
                <SectionTitle>
                    Tecnologia que<br /><em>transforma</em> vidas
                </SectionTitle>
                <Text>
                    Acreditamos que o papel da tecnologia na saúde é facilitar processos e aproximar o paciente do cuidado — sem engessamento, sem burocracia. Com o AMPA, profissionais ganham tempo, e pacientes ganham atenção.
                </Text>
                <Text>
                    O AMPA foi reconhecido pelo Prêmio Inspirando Cuidado, que viabilizou a infraestrutura e as mentorias que tornaram o projeto real.
                </Text>
            </div>
            <Numbers className="reveal">
                <NumCard>
                    <Num>300+</Num>
                    <NumLabel>Pacientes no ambulatório da UFU</NumLabel>
                </NumCard>
                <NumCard>
                    <Num>24h</Num>
                    <NumLabel>Suporte contínuo ao paciente</NumLabel>
                </NumCard>
                <NumCard>
                    <Num>3×</Num>
                    <NumLabel>Crescimento da equipe de tecnologia</NumLabel>
                </NumCard>
                <NumCard>
                    <Num>0%</Num>
                    <NumLabel>Terceirização — tudo feito pela equipe</NumLabel>
                </NumCard>
            </Numbers>
        </Section>
    );
}
