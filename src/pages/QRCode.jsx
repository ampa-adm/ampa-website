import styled from 'styled-components';

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: ${({ theme }) => theme.colors.offwhite};
    margin-top: 4rem;
`;

const Card = styled.div`
    background: #fff;
    border-radius: 1.2rem;
    padding: 3rem;
    max-width: 600px;
    width: 100%;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    text-align: center;

    @media (max-width: 900px) {
        padding: 2rem;
    }
`;

const Badge = styled.div`
    display: inline-block;
    background: rgba(234, 115, 110, 0.1);
    border: 1px solid ${({ theme }) => theme.colors.coral};
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.coral};
    margin-bottom: 1.5rem;
`;

const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.dark};
    margin-bottom: 0.5rem;
    font-weight: 300;

    em {
        font-style: italic;
        color: ${({ theme }) => theme.colors.coral};
    }
`;

const Subtitle = styled.p`
    color: ${({ theme }) => theme.colors.dark};
    opacity: 0.7;
    margin-bottom: 2rem;
    font-size: 0.95rem;
    line-height: 1.6;
`;

const QRContainer = styled.div`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.peach} 0%, ${({ theme }) => theme.colors.coral} 100%);
    border-radius: 1rem;
    padding: 2rem;
    margin: 2.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const QRImage = styled.img`
    width: 280px;
    height: 280px;
    background: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
`;

const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin: 2rem 0;
    text-align: left;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const InfoBox = styled.div`
    background: ${({ theme }) => theme.colors.offwhite};
    padding: 1.5rem;
    border-radius: 0.8rem;
    border-left: 3px solid ${({ theme }) => theme.colors.coral};
`;

const InfoLabel = styled.h4`
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.coral};
    margin-bottom: 0.5rem;
    font-family: ${({ theme }) => theme.fonts.serif};
`;

const InfoValue = styled.p`
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.dark};
    font-weight: 500;
    margin: 0;
`;

const Features = styled.div`
    margin: 2rem 0;
    text-align: left;
`;

const FeaturesTitle = styled.h3`
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.coral};
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
`;

const FeatureList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const FeatureItem = styled.li`
    padding: 0.5rem 0;
    color: ${({ theme }) => theme.colors.dark};
    opacity: 0.75;
    font-size: 0.9rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.peach};

    &::before {
        content: '✓ ';
        color: ${({ theme }) => theme.colors.coral};
        font-weight: bold;
        margin-right: 0.5rem;
    }

    &:last-child {
        border-bottom: none;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const Button = styled.a`
    flex: 1;
    display: inline-block;
    padding: 0.9rem 1.5rem;
    background: ${({ theme }) => theme.colors.coral};
    color: #fff;
    border-radius: 0.3rem;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.85rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 4px 18px rgba(234, 115, 110, 0.35);

    &:hover {
        background: ${({ theme }) => theme.colors.coralDark};
        transform: translateY(-2px);
        box-shadow: 0 8px 28px rgba(234, 115, 110, 0.4);
    }
`;

const SecondaryButton = styled(Button)`
    background: transparent;
    color: ${({ theme }) => theme.colors.coral};
    border: 2px solid ${({ theme }) => theme.colors.coral};
    box-shadow: none;

    &:hover {
        background: ${({ theme }) => theme.colors.coral};
        color: #fff;
    }
`;

export default function QRCode() {
    const projectUrl = window.location.origin;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(projectUrl)}`;

    return (
        <Container>
            <Card>
                <Badge>Prêmio Inspirando Cuidado · UFU</Badge>

                <Title>
                    AMPA<br />
                    <em>Assistência ao Paciente</em><br />
                    Anticoagulado
                </Title>

                <Subtitle>
                    Tecnologia conectando pacientes ao cuidado que merecem, via WhatsApp, com lembretes automáticos e suporte contínuo.
                </Subtitle>

                <QRContainer>
                    <QRImage src={qrCodeUrl} alt="QR Code AMPA" />
                </QRContainer>

                <InfoGrid>
                    <InfoBox>
                        <InfoLabel>📱 Plataforma</InfoLabel>
                        <InfoValue>WhatsApp</InfoValue>
                    </InfoBox>
                    <InfoBox>
                        <InfoLabel>👥 Pacientes</InfoLabel>
                        <InfoValue>300+</InfoValue>
                    </InfoBox>
                    <InfoBox>
                        <InfoLabel>⏰ Suporte</InfoLabel>
                        <InfoValue>24/7</InfoValue>
                    </InfoBox>
                    <InfoBox>
                        <InfoLabel>🏥 Instituição</InfoLabel>
                        <InfoValue>UFU</InfoValue>
                    </InfoBox>
                </InfoGrid>

                <Features>
                    <FeaturesTitle>Funcionalidades</FeaturesTitle>
                    <FeatureList>
                        <FeatureItem>Lembretes automáticos de medicação</FeatureItem>
                        <FeatureItem>Triagem inteligente de dúvidas</FeatureItem>
                        <FeatureItem>Relatórios para profissionais</FeatureItem>
                        <FeatureItem>Infraestrutura dedicada e segura</FeatureItem>
                    </FeatureList>
                </Features>

                <ButtonGroup>
                    <Button href="/">Ver projeto completo</Button>
                    <SecondaryButton href="/#sobre">Saiba mais</SecondaryButton>
                </ButtonGroup>
            </Card>
        </Container>
    );
}
