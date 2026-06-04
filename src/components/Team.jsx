import styled from 'styled-components';

const Section = styled.section`
    background: ${({ theme }) => theme.colors.offwhite};
    text-align: center;
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
    margin-bottom: 3.5rem;

    em {
        font-style: italic;
        color: ${({ theme }) => theme.colors.coral};
    }
`;

const TeamGrid = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
`;

const Card = styled.div`
    background: #fff;
    border-radius: 1.2rem;
    padding: 2rem 1.8rem;
    width: 200px;
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-5px);
    }
`;

const Avatar = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    background: ${({ variant, theme }) =>
        variant === 'peach'
            ? `rgba(243, 204, 186, 0.4)`
            : `rgba(234, 115, 110, 0.15)`
    };
`;

const CardTitle = styled.h4`
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.3rem;
`;

const CardDesc = styled.p`
    font-size: 0.75rem;
    opacity: 0.55;
`;

const teams = [
    {
        icon: '💻',
        title: 'Tecnologia',
        desc: 'Desenvolvimento do app, infraestrutura e integrações',
        variant: 'coral'
    },
    {
        icon: '🩺',
        title: 'Saúde',
        desc: 'Protocolo clínico e parceria com o ambulatório da UFU',
        variant: 'peach'
    },
    {
        icon: '⚙️',
        title: 'Engenharia',
        desc: 'Novos membros de cursos de tecnologia que escalaram a equipe',
        variant: 'coral'
    },
    {
        icon: '🎓',
        title: 'Mentoria',
        desc: 'Professores e profissionais de saúde parceiros do projeto',
        variant: 'peach'
    }
];

export default function Team() {
    return (
        <Section id="equipe">
            <div className="reveal">
                <SectionLabel>Equipe</SectionLabel>
                <SectionTitle>Jovens que <em>ousaram</em><br />unir mundos</SectionTitle>
            </div>
            <TeamGrid className="reveal">
                {teams.map((team, index) => (
                    <Card key={index}>
                        <Avatar variant={team.variant}>{team.icon}</Avatar>
                        <CardTitle>{team.title}</CardTitle>
                        <CardDesc>{team.desc}</CardDesc>
                    </Card>
                ))}
            </TeamGrid>
        </Section>
    );
}
