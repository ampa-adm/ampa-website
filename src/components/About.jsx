import styled from 'styled-components';

const Section = styled.section`
    background: #fff;
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
    margin-bottom: 1.5rem;

    em {
        font-style: italic;
        color: ${({ theme }) => theme.colors.coral};
    }
`;

const Text = styled.p`
    font-size: 0.95rem;
    line-height: 1.8;
    opacity: 0.75;
    margin-bottom: 1rem;
`;

const AboutVisual = styled.div`
    position: relative;
`;

const Box = styled.div`
    background: ${({ theme }) => theme.colors.offwhite};
    border-radius: 1.2rem;
    padding: 2.5rem;
    border-left: 4px solid ${({ theme }) => theme.colors.coral};
    margin-bottom: 1.2rem;

    h4 {
        font-family: ${({ theme }) => theme.fonts.serif};
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 0.8rem;
        color: ${({ theme }) => theme.colors.coral};
    }

    p {
        font-size: 0.9rem;
        line-height: 1.7;
        opacity: 0.7;
    }
`;

export default function About() {
    return (
        <Section id="sobre" className="reveal">
            <div className="reveal">
                <SectionLabel>O Problema</SectionLabel>
                <SectionTitle>
                    Da sobrecarga<br /><em>ao cuidado</em> próximo
                </SectionTitle>
                <Text>
                    O ambulatório da UFU atende cerca de 300 pacientes anticoagulados. O acompanhamento manual, lento e fragmentado tornava o monitoramento um desafio para médicos e difícil para pacientes.
                </Text>
                <Text>
                    A partir de uma parceria entre tecnologia e saúde, nasceu o AMPA — uma solução que usa o que o paciente já conhece (o WhatsApp) para transformar o cuidado.
                </Text>
            </div>
            <AboutVisual className="reveal">
                <Box>
                    <h4>🚫 Antes do AMPA</h4>
                    <p>Processos manuais, pacientes sem suporte entre consultas, médicos sobrecarregados com centenas de casos sem visibilidade em tempo real.</p>
                </Box>
                <Box>
                    <h4>✅ Com o AMPA</h4>
                    <p>Triagem automatizada, lembretes via WhatsApp, respostas imediatas a dúvidas e relatórios personalizados entregues direto para o profissional de saúde.</p>
                </Box>
            </AboutVisual>
        </Section>
    );
}
