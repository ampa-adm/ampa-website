import styled from 'styled-components';

const Section = styled.section`
    background: #fff;
    padding: 6rem 5rem;

    @media (max-width: 900px) {
        padding: 4rem 2rem;
    }
`;

const SectionLabel = styled.div`
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.coral};
    font-weight: 500;
    margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: 300;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.dark};
    margin-bottom: 4rem;

    em {
        font-style: italic;
        color: ${({ theme }) => theme.colors.coral};
    }
`;

const StepsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    position: relative;
    max-width: 1100px;

    &::before {
        content: '';
        position: absolute;
        top: 2.1rem;
        left: calc(100% / 8);
        right: calc(100% / 8);
        height: 1px;
        background: linear-gradient(90deg, ${({ theme }) => theme.colors.coral}, ${({ theme }) => theme.colors.peach});
        z-index: 0;
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr;

        &::before {
            display: none;
        }
    }
`;

const Step = styled.div`
    text-align: center;
    padding: 0 1.5rem;
    position: relative;
    z-index: 1;
`;

const StepNum = styled.div`
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.offwhite};
    border: 2px solid ${({ theme }) => theme.colors.coral};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.coral};
    transition: background 0.3s, color 0.3s;

    ${Step}:hover & {
        background: ${({ theme }) => theme.colors.coral};
        color: #fff;
    }
`;

const StepTitle = styled.h4`
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

const StepDesc = styled.p`
    font-size: 0.8rem;
    line-height: 1.6;
    opacity: 0.6;
`;

const steps = [
    {
        num: '1',
        title: 'Paciente envia mensagem',
        desc: 'Dúvida, sintoma ou solicitação — direto no WhatsApp, sem baixar nenhum app.'
    },
    {
        num: '2',
        title: 'Triagem automática',
        desc: 'O AMPA classifica a mensagem e responde com orientações adequadas ao caso.'
    },
    {
        num: '3',
        title: 'Lembretes enviados',
        desc: 'Medicações, consultas e exames são lembrados automaticamente nos horários certos.'
    },
    {
        num: '4',
        title: 'Relatório gerado',
        desc: 'O profissional recebe um resumo completo, pronto para a tomada de decisão clínica.'
    }
];

export default function Process() {
    return (
        <Section id="processo">
            <div className="reveal">
                <SectionLabel>Como funciona</SectionLabel>
                <SectionTitle>Do <em>WhatsApp</em><br />ao consultório</SectionTitle>
            </div>
            <StepsGrid>
                {steps.map((step) => (
                    <Step key={step.num} className="reveal">
                        <StepNum>{step.num}</StepNum>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDesc>{step.desc}</StepDesc>
                    </Step>
                ))}
            </StepsGrid>
        </Section>
    );
}
