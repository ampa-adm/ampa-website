import styled from 'styled-components';

const Section = styled.section`
    background: ${({ theme }) => theme.colors.offwhite};
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

    em {
        font-style: italic;
        color: ${({ theme }) => theme.colors.coral};
    }
`;

const Head = styled.div`
    text-align: center;
    max-width: 600px;
    margin: 0 auto 4rem;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.div`
    background: #fff;
    border-radius: 1.2rem;
    padding: 2.5rem 2rem;
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: ${({ theme }) => theme.colors.coral};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s;
    }

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);

        &::after {
            transform: scaleX(1);
        }
    }
`;

const Icon = styled.div`
    width: 52px;
    height: 52px;
    border-radius: 0.8rem;
    background: rgba(234, 115, 110, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.7rem;
`;

const CardDesc = styled.p`
    font-size: 0.88rem;
    line-height: 1.7;
    opacity: 0.65;
`;

const features = [
    {
        icon: '📱',
        title: 'WhatsApp integrado',
        desc: 'O paciente conversa pelo canal que já usa no dia a dia. Zero barreiras de adoção — o AMPA vai até quem precisa.'
    },
    {
        icon: '🔔',
        title: 'Lembretes automáticos',
        desc: 'Envio programado de lembretes de medicação e consultas, reduzindo esquecimentos e aumentando a adesão ao tratamento.'
    },
    {
        icon: '🤖',
        title: 'Triagem inteligente',
        desc: 'Respostas automáticas a perguntas frequentes e orientações clínicas, com linguagem acessível para qualquer perfil de paciente.'
    },
    {
        icon: '📋',
        title: 'Relatórios para profissionais',
        desc: 'Dados consolidados e direcionados ao médico — sem que ele precise perguntar. O AMPA já preparou o relatório antes da consulta.'
    },
    {
        icon: '🎙️',
        title: 'Comunicação por áudio',
        desc: 'Em desenvolvimento: reconhecimento e transcrição de fala para atender pacientes com dificuldade de leitura ou escrita.'
    },
    {
        icon: '🔒',
        title: 'Infraestrutura dedicada',
        desc: 'Chip próprio para envio de mensagens, plataforma estável e escalável, construída com independência técnica pela equipe do projeto.'
    }
];

export default function Features() {
    return (
        <Section id="funcionalidades">
            <Head className="reveal">
                <SectionLabel>Funcionalidades</SectionLabel>
                <SectionTitle>Tudo que o paciente<br /><em>precisa</em>, onde já está</SectionTitle>
            </Head>
            <Grid>
                {features.map((feature, index) => (
                    <Card key={index} className="reveal">
                        <Icon>{feature.icon}</Icon>
                        <CardTitle>{feature.title}</CardTitle>
                        <CardDesc>{feature.desc}</CardDesc>
                    </Card>
                ))}
            </Grid>
        </Section>
    );
}
