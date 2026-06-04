import styled from 'styled-components';

const HeroSection = styled.section`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    overflow: hidden;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        min-height: auto;
    }
`;

const HeroLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8rem 4rem 6rem 5rem;
    position: relative;
    z-index: 2;

    @media (max-width: 900px) {
        padding: 7rem 2rem 4rem;
    }
`;

const Badge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(234, 115, 110, 0.1);
    border: 1px solid rgba(234, 115, 110, 0.3);
    border-radius: 2rem;
    padding: 0.35rem 1rem;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.coral};
    margin-bottom: 2.5rem;
    width: fit-content;
    animation: fadeUp 0.8s ease both;

    &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.coral};
        animation: pulse 2s infinite;
    }
`;

const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: clamp(3.2rem, 5vw, 5rem);
    font-weight: 300;
    line-height: 1.08;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.dark};
    animation: fadeUp 0.8s 0.1s ease both;

    em {
        font-style: italic;
        color: ${({ theme }) => theme.colors.coral};
    }
`;

const Description = styled.p`
    margin-top: 2rem;
    font-size: 1rem;
    line-height: 1.75;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.dark};
    opacity: 0.75;
    max-width: 440px;
    animation: fadeUp 0.8s 0.2s ease both;
`;

const CTA = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    animation: fadeUp 0.8s 0.3s ease both;
`;

const ButtonPrimary = styled.a`
    background: ${({ theme }) => theme.colors.coral};
    color: #fff;
    border: none;
    padding: 0.9rem 2.2rem;
    border-radius: 0.3rem;
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 18px rgba(234, 115, 110, 0.35);
    display: inline-block;

    &:hover {
        background: ${({ theme }) => theme.colors.coralDark};
        transform: translateY(-2px);
        box-shadow: 0 8px 28px rgba(234, 115, 110, 0.4);
    }
`;

const ButtonGhost = styled.a`
    font-size: 0.82rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.dark};
    opacity: 0.6;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
        opacity: 1;
    }
`;

const Stats = styled.div`
    margin-top: 4.5rem;
    display: flex;
    gap: 2.5rem;
    animation: fadeUp 0.8s 0.4s ease both;

    @media (max-width: 900px) {
        gap: 1.5rem;
    }
`;

const Stat = styled.div`
    display: flex;
    flex-direction: column;
`;

const StatNum = styled.div`
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 2.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.coral};
    line-height: 1;
`;

const StatLabel = styled.div`
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.55;
    margin-top: 0.3rem;
`;

const HeroRight = styled.div`
    position: relative;
    overflow: hidden;

    @media (max-width: 900px) {
        height: 400px;
    }
`;

const HeroRightBg = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.peach} 0%, ${({ theme }) => theme.colors.coral} 100%);

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.07'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
`;

const HeroCard = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 340px;
    background: rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 1.5rem;
    padding: 2rem;
    animation: floatCard 6s ease-in-out infinite;
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
`;

const CardAvatar = styled.div`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
`;

const CardName = styled.div`
    font-size: 0.85rem;
    font-weight: 500;
    color: #fff;
`;

const CardSub = styled.div`
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.7);
`;

const CardMsgs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const MsgBubble = styled.div`
    border-radius: 1rem 1rem 1rem 0.2rem;
    padding: 0.7rem 1rem;
    margin-bottom: 0.6rem;
    font-size: 0.8rem;
    line-height: 1.5;

    &.in {
        background: rgba(255, 255, 255, 0.9);
        color: ${({ theme }) => theme.colors.dark};
        align-self: flex-start;
    }

    &.out {
        background: ${({ theme }) => theme.colors.coral};
        color: #fff;
        border-radius: 1rem 1rem 0.2rem 1rem;
        margin-left: auto;
        width: fit-content;
    }
`;

const CardFooter = styled.div`
    margin-top: 1.2rem;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 0.6rem;
    padding: 0.6rem 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.75);
        flex: 1;
    }
`;

const CardFooterIcon = styled.span`
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
`;

const HeroDecor = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    top: -80px;
    right: -80px;
`;

const HeroDecor2 = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.06);
    bottom: 60px;
    left: -60px;
`;

export default function Hero() {
    return (
        <HeroSection>
            <HeroLeft>
                <Badge>Prêmio Inspirando Cuidado · UFU</Badge>
                <Title>
                    Cuidado<br />
                    <em>inteligente</em> para<br />
                    quem mais precisa
                </Title>
                <Description>
                    O AMPA conecta pacientes anticoagulados ao acompanhamento contínuo que merecem — via WhatsApp, com lembretes automáticos, triagem inteligente e relatórios para os profissionais de saúde.
                </Description>
                <CTA>
                    <ButtonPrimary href="#funcionalidades">Conhecer o projeto</ButtonPrimary>
                    <ButtonGhost href="#impacto">Ver impacto →</ButtonGhost>
                </CTA>
                <Stats>
                    <Stat>
                        <StatNum>300+</StatNum>
                        <StatLabel>Pacientes atendidos</StatLabel>
                    </Stat>
                    <Stat>
                        <StatNum>UFU</StatNum>
                        <StatLabel>Parceria universitária</StatLabel>
                    </Stat>
                    <Stat>
                        <StatNum>24/7</StatNum>
                        <StatLabel>Monitoramento contínuo</StatLabel>
                    </Stat>
                </Stats>
            </HeroLeft>

            <HeroRight>
                <HeroRightBg />
                <HeroDecor />
                <HeroDecor2 />
                <HeroCard>
                    <CardHeader>
                        <CardAvatar>🏥</CardAvatar>
                        <div>
                            <CardName>AMPA Assistente</CardName>
                            <CardSub>● Online agora</CardSub>
                        </div>
                    </CardHeader>
                    <CardMsgs>
                        <MsgBubble className="in">Olá! Esqueci de tomar meu anticoagulante hoje. O que faço?</MsgBubble>
                        <MsgBubble className="out">Não se preocupe! Tome assim que lembrar, se ainda for o mesmo dia. Anote e informe na próxima consulta. Posso enviar um lembrete amanhã?</MsgBubble>
                        <MsgBubble className="in">Sim, por favor! 😊</MsgBubble>
                        <MsgBubble className="out">✅ Lembrete agendado para amanhã às 8h. Cuide-se!</MsgBubble>
                    </CardMsgs>
                    <CardFooter>
                        <span>Relatório gerado para Dr.ª Silva</span>
                        <CardFooterIcon>📋</CardFooterIcon>
                    </CardFooter>
                </HeroCard>
            </HeroRight>
        </HeroSection>
    );
}
