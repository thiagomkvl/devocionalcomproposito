import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const CHECKOUT_URL = "https://pay.kiwify.com.br/NMRAzqQ";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Presença Diária · Devocional Diário no WhatsApp" },
      {
        name: "description",
        content:
          "Receba toda manhã, às 6h, uma oração poderosa direto no seu WhatsApp. Versículo, reflexão e declaração de fé para começar o dia com paz e propósito.",
      },
      { property: "og:title", content: "Presença Diária · Devocional Diário no WhatsApp" },
      {
        property: "og:description",
        content:
          "Comece cada dia com fé, paz e propósito. 365 devocionais entregues no seu WhatsApp por menos de R$ 0,13 por dia.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Lato:wght@300;400;700&display=swap",
      },
    ],
  }),
});

function CTAButton({
  children,
  variant = "main",
}: {
  children: React.ReactNode;
  variant?: "main" | "inline";
}) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={variant === "main" ? "btn-main" : "btn-inline"}
      onClick={() => {
        // basic conversion ping if analytics present
        try {
          (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
            event: "begin_checkout",
            value: 47,
            currency: "BRL",
          });
        } catch {
          /* noop */
        }
      }}
    >
      {children}
    </a>
  );
}

function Index() {
  const [showSticky, setShowSticky] = useState(false);
  const [spotsLeft] = useState(37);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* TOP URGENCY BAR */}
      <div className="top-bar">
        <span className="top-bar-dot" /> Oferta de fundador ativa — apenas{" "}
        <strong>{spotsLeft} vagas</strong> nesse lote ·{" "}
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="top-bar-link">
          Garantir vaga →
        </a>
      </div>

      {/* HERO */}
      <header className="hero">
        <div className="gold-cross" aria-hidden>
          ✝
        </div>
        <p className="hero-eyebrow">Devocional Diário · WhatsApp</p>
        <h1 className="serif">
          Comece cada dia com <em>fé, paz</em> e propósito
        </h1>
        <p className="hero-sub">
          Receba toda manhã uma oração poderosa direto no seu WhatsApp — antes das notificações,
          antes do caos, antes de tudo.
        </p>
        <div className="hero-cta">
          <CTAButton>Quero começar amanhã de manhã</CTAButton>
          <p className="hero-cta-sub">
            R$ 47/ano · menos de R$ 0,13 por dia · garantia de 7 dias
          </p>
        </div>
        <div className="scroll-hint">Conheça</div>
      </header>

      <div className="divider" />

      {/* PROBLEMA */}
      <section>
        <p className="section-eyebrow">Você se identifica?</p>
        <h2 className="section-title serif">
          A fé que você quer ter
          <br />
          <em>x</em> a rotina que você tem
        </h2>
        <p className="section-body">
          Você quer ter uma vida de oração mais consistente. Quer começar o dia com Deus, sentir
          aquela paz que ultrapassa o entendimento antes de entrar no caos do trabalho, das redes
          sociais, das preocupações.
          <br />
          <br />
          Mas aí o despertador toca, o celular já encheu de notificações, e a oração fica para
          depois — um "depois" que quase nunca chega.
          <br />
          <br />
          <strong style={{ color: "#f5efe4", fontWeight: 400 }}>
            A Presença Diária existe para mudar isso.
          </strong>
        </p>
      </section>

      <div className="divider" />

      {/* O QUE RECEBE */}
      <section>
        <p className="section-eyebrow">O que você recebe</p>
        <h2 className="section-title serif">
          Uma oração entregue
          <br />
          na palma da sua mão
        </h2>
        <div className="promise-grid">
          {[
            ["📖", "Versículo do dia", "Uma palavra viva e poderosa selecionada para o momento que você está vivendo."],
            ["🙏", "Oração guiada", "Uma oração completa para você repetir, adaptar ou simplesmente sentir."],
            ["💡", "Reflexão curta", "2 minutos de leitura com profundidade suficiente para tocar o coração."],
            ["🌅", "Declaração de fé", "Uma frase para você fechar com intenção e entrar no dia com firmeza."],
          ].map(([icon, title, body]) => (
            <div className="promise-card" key={title}>
              <div className="promise-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRÉVIA */}
      <section style={{ paddingTop: 0 }}>
        <p className="section-eyebrow">Veja como chega</p>
        <h2 className="section-title serif">
          Uma prévia do seu
          <br />
          <em>devocional de amanhã</em>
        </h2>
        <div className="sample-wrap">
          <p className="sample-label">✦ Mensagem real · 6h00 da manhã</p>
          <div className="whatsapp-bubble">
            <div className="wa-header">
              <div className="wa-avatar">✝</div>
              <div>
                <p className="wa-name">Presença Diária</p>
                <p className="wa-time">hoje, 06:00</p>
              </div>
            </div>
            <p className="wa-text">
              Bom dia! 🌅
              <br />
              <br />
              Antes de você abrir mais qualquer coisa hoje, para um instante. Respira. Deus já está
              acordado — e Ele está com você.
            </p>
            <p className="wa-verse">
              "O Senhor é o meu pastor e nada me faltará."
              <br />— Salmos 23:1
            </p>
            <p className="wa-text">
              <em>Reflexão:</em> Há momentos em que sentimos que estamos carregando tudo sozinhos.
              Mas essa promessa não é de um Deus distante — é de um Pastor que caminha ao seu lado,
              que conhece cada detalhe da sua vida.
            </p>
            <div className="wa-declaration">
              🙏 Declaração:{" "}
              <em>"Hoje eu confio que Deus provê o que eu preciso — no tempo certo, do jeito certo."</em>
            </div>
            <p className="wa-tick">✓✓</p>
          </div>
        </div>
        <div className="mid-cta">
          <CTAButton>Quero receber essas mensagens todo dia</CTAButton>
          <p className="mid-cta-sub">Acesso imediato após o pagamento</p>
        </div>
      </section>

      <div className="divider" />

      {/* PARA QUEM */}
      <section>
        <p className="section-eyebrow">Para quem é</p>
        <h2 className="section-title serif">
          Este devocional é feito
          <br />
          <em>pra você se...</em>
        </h2>
        <div className="for-whom-list">
          {[
            ["Você quer ter um tempo com Deus", "mas nunca sabe por onde começar nem o que falar."],
            ["Você passa o dia no celular", "e quer que pelo menos a primeira coisa que você vê seja algo que nutre sua alma."],
            ["Você está em um momento difícil", "e precisa de uma âncora espiritual todos os dias."],
            ["Você quer cultivar o hábito da oração", "mas precisa de um empurrão constante e gentil."],
          ].map(([strong, rest]) => (
            <div className="fwi" key={strong}>
              <div className="fwi-icon">✦</div>
              <p>
                <strong>{strong}</strong> {rest}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* DEPOIMENTOS */}
      <section>
        <p className="section-eyebrow">Quem já recebe</p>
        <h2 className="section-title serif">
          O que dizem
          <br />
          <em>nossos membros</em>
        </h2>
        <div className="testi-grid">
          {[
            ["Parece que Deus me manda a mensagem certa no dia certo. Não é coincidência, é graça.", "— Rosana M., Curitiba"],
            ["Nunca fui de orar, mas agora espero essa mensagem toda manhã. Mudou minha rotina.", "— Carlos F., São Paulo"],
            ["Simples, bonito e profundo. Tudo que eu precisava pra começar o dia no lugar certo.", "— Fernanda L., Recife"],
            ["Já indiquei pra toda a minha família. É um presente que vale o ano inteiro.", "— Marcos A., BH"],
          ].map(([text, name]) => (
            <div className="testi-card" key={name}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"{text}"</p>
              <p className="testi-name">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PREÇO */}
      <div className="pricing-section" id="oferta">
        <p className="section-eyebrow">Oferta de fundador · Vagas limitadas</p>
        <h2 className="section-title serif">
          Pronto para começar
          <br />
          <em>amanhã de manhã diferente?</em>
        </h2>

        <div className="cta-box">
          <div className="badge-discount">52% OFF · Lote de fundadores</div>
          <p className="price-old">De R$ 97,00</p>
          <div className="price-tag">R$ 47</div>
          <p className="price-label">acesso anual · oferta de fundador</p>
          <p className="price-detail">
            Menos de R$ 0,13 por dia.
            <br />
            365 devocionais entregues direto no seu WhatsApp.
          </p>
          <div className="price-perks">
            {[
              "Versículo + reflexão + oração todos os dias",
              "Entrega às 6h da manhã no WhatsApp",
              "Acesso por 365 dias completos",
              "Preço de fundador — nunca mais esse valor",
            ].map((p) => (
              <div className="perk" key={p}>
                <span className="perk-check">✦</span> {p}
              </div>
            ))}
          </div>
          <CTAButton>Garantir meu acesso agora</CTAButton>
          <p className="guarantee">🔒 Pagamento seguro · Garantia de 7 dias · Cancele quando quiser</p>
          <div className="payment-icons">
            <span>PIX</span>
            <span>Cartão</span>
            <span>Boleto</span>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="faq-section">
        <p className="section-eyebrow">Perguntas frequentes</p>
        <h2 className="section-title serif">
          Antes de começar,
          <br />
          <em>tire suas dúvidas</em>
        </h2>
        <div className="faq-list">
          {[
            [
              "Como recebo as mensagens?",
              "Diretamente no seu WhatsApp, todos os dias às 6h da manhã. Você só precisa confirmar seu número após o pagamento.",
            ],
            [
              "Posso cancelar quando quiser?",
              "Sim. Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor sem perguntas.",
            ],
            [
              "Por quanto tempo recebo?",
              "Você recebe por 365 dias completos a partir da confirmação. Ao final, você pode renovar (mas o preço de fundador não volta).",
            ],
            [
              "E se eu quiser começar a orar mas não sei como?",
              "Esse devocional foi feito exatamente para isso. Cada mensagem traz uma oração guiada que você só precisa repetir ou adaptar.",
            ],
            [
              "Funciona para qualquer denominação?",
              "Sim. As mensagens são baseadas na Bíblia e respeitam todas as tradições cristãs.",
            ],
          ].map(([q, a]) => (
            <details className="faq-item" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
        <div className="mid-cta">
          <CTAButton>Sim, quero começar amanhã</CTAButton>
          <p className="mid-cta-sub">R$ 47 · acesso por 365 dias · garantia de 7 dias</p>
        </div>
      </section>

      <footer>PRESENÇA DIÁRIA · Devocional Diário no WhatsApp · Todos os direitos reservados</footer>

      {/* STICKY MOBILE CTA */}
      <div className={`sticky-cta ${showSticky ? "is-visible" : ""}`}>
        <div className="sticky-cta-text">
          <span className="sticky-price">R$ 47</span>
          <span className="sticky-meta">acesso anual</span>
        </div>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-main sticky-btn"
        >
          Garantir vaga
        </a>
      </div>
    </>
  );
}

const STYLES = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { background: #0d0a07; }
  body {
    font-family: 'Lato', sans-serif;
    color: #f0ebe3;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }
  .serif { font-family: 'Cormorant Garamond', serif; }

  .top-bar {
    background: linear-gradient(90deg, #1a1208, #2a1d0a, #1a1208);
    color: #e8d4a8;
    text-align: center;
    padding: 10px 16px;
    font-size: 12px;
    letter-spacing: 0.5px;
    border-bottom: 1px solid rgba(196,158,82,0.2);
    position: relative;
    z-index: 20;
  }
  .top-bar strong { color: #f5d97a; }
  .top-bar-link { color: #f5d97a; text-decoration: none; font-weight: 700; margin-left: 4px; }
  .top-bar-link:hover { text-decoration: underline; }
  .top-bar-dot {
    display: inline-block;
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #4ade80;
    margin-right: 8px;
    box-shadow: 0 0 8px #4ade80;
    animation: pulse 1.6s ease-in-out infinite;
    vertical-align: middle;
  }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

  .hero {
    min-height: calc(100vh - 40px);
    background: linear-gradient(160deg, #1a1006 0%, #0d0a07 40%, #0a0d12 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 60px 24px;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    top: -100px; left: 50%;
    transform: translateX(-50%);
    width: 600px; height: 600px;
    background: radial-gradient(ellipse, rgba(196,158,82,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .gold-cross {
    font-size: 48px;
    margin-bottom: 24px;
    color: #c49e52;
    animation: glow 3s ease-in-out infinite;
  }
  @keyframes glow {
    0%, 100% { text-shadow: 0 0 12px rgba(196,158,82,0.3); }
    50% { text-shadow: 0 0 28px rgba(196,158,82,0.7); }
  }
  .hero-eyebrow {
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #c49e52;
    margin-bottom: 20px;
  }
  .hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(42px, 7vw, 76px);
    font-weight: 500;
    line-height: 1.05;
    color: #f5efe4;
    max-width: 700px;
    margin-bottom: 24px;
  }
  .hero h1 em { color: #c49e52; font-style: italic; }
  .hero-sub {
    font-size: 18px;
    font-weight: 300;
    color: #b8aa96;
    max-width: 500px;
    line-height: 1.7;
    margin-bottom: 36px;
  }
  .hero-cta { width: 100%; max-width: 380px; margin-bottom: 48px; }
  .hero-cta-sub {
    margin-top: 14px;
    font-size: 12px;
    color: #8a7d6e;
    letter-spacing: 0.5px;
  }
  .scroll-hint {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: #4a3f32;
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    animation: bounce 2s ease-in-out infinite;
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(6px); }
  }
  .scroll-hint::after {
    content: '↓';
    font-size: 18px;
    color: #c49e52;
  }

  .divider {
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, transparent, #c49e52, transparent);
    margin: 0 auto;
  }

  section {
    padding: 80px 24px;
    max-width: 680px;
    margin: 0 auto;
  }
  .section-eyebrow {
    font-size: 11px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #c49e52;
    margin-bottom: 16px;
  }
  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 500;
    line-height: 1.1;
    color: #f5efe4;
    margin-bottom: 24px;
  }
  .section-title em { color: #c49e52; font-style: italic; }
  .section-body {
    font-size: 16px;
    font-weight: 300;
    color: #b8aa96;
    line-height: 1.8;
  }

  .promise-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 40px;
  }
  @media (max-width: 500px) { .promise-grid { grid-template-columns: 1fr; } }
  .promise-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(196,158,82,0.15);
    border-radius: 12px;
    padding: 24px 20px;
  }
  .promise-icon { font-size: 28px; margin-bottom: 12px; }
  .promise-card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    font-weight: 500;
    color: #f5efe4;
    margin-bottom: 8px;
  }
  .promise-card p {
    font-size: 14px;
    font-weight: 300;
    color: #8a7d6e;
    line-height: 1.6;
  }

  .sample-wrap {
    background: #111108;
    border-radius: 20px;
    padding: 32px;
    margin-top: 40px;
    border: 1px solid rgba(196,158,82,0.1);
  }
  .sample-label {
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #6b6059;
    margin-bottom: 20px;
  }
  .whatsapp-bubble {
    background: #1e2e1a;
    border-radius: 0 16px 16px 16px;
    padding: 20px 24px;
    max-width: 90%;
    border: 1px solid rgba(37,211,102,0.15);
  }
  .wa-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .wa-avatar {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #c49e52, #8a6a2a);
    display: flex; align-items: center; justify-content: center;
    font-size: 16px;
  }
  .wa-name { font-size: 13px; font-weight: 700; color: #c49e52; }
  .wa-time { font-size: 11px; color: #4a5a42; }
  .wa-text { font-size: 14px; font-weight: 300; color: #d4e8c8; line-height: 1.8; }
  .wa-verse {
    font-family: 'Cormorant Garamond', serif;
    font-size: 17px;
    font-style: italic;
    color: #aac88a;
    margin: 12px 0;
    padding-left: 12px;
    border-left: 2px solid rgba(37,211,102,0.3);
  }
  .wa-declaration {
    margin-top: 14px;
    padding: 10px 14px;
    background: rgba(37,211,102,0.05);
    border-radius: 8px;
    font-size: 13px;
    color: #7aa860;
  }
  .wa-tick { color: #4fc3f7; font-size: 12px; float: right; }

  .mid-cta {
    text-align: center;
    margin-top: 44px;
    max-width: 380px;
    margin-left: auto;
    margin-right: auto;
  }
  .mid-cta-sub {
    margin-top: 12px;
    font-size: 12px;
    color: #6b6059;
    letter-spacing: 0.5px;
  }

  .for-whom-list { margin-top: 36px; display: flex; flex-direction: column; gap: 16px; }
  .fwi {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
    background: rgba(255,255,255,0.02);
    border-radius: 10px;
    border-left: 2px solid #c49e52;
  }
  .fwi-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; color: #c49e52; }
  .fwi p { font-size: 15px; font-weight: 300; color: #b8aa96; line-height: 1.6; }
  .fwi strong { color: #f5efe4; font-weight: 400; }

  .testi-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 40px;
  }
  @media (max-width: 500px) { .testi-grid { grid-template-columns: 1fr; } }
  .testi-card {
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 12px;
    padding: 24px 20px;
  }
  .testi-stars { color: #c49e52; font-size: 14px; margin-bottom: 12px; letter-spacing: 2px; }
  .testi-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 17px;
    font-style: italic;
    color: #d4c8b8;
    line-height: 1.6;
    margin-bottom: 16px;
  }
  .testi-name { font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: #6b6059; }

  .pricing-section {
    text-align: center;
    padding: 80px 24px 100px;
    background: linear-gradient(to bottom, #0d0a07, #070504);
  }
  .pricing-section .section-eyebrow { text-align: center; }
  .pricing-section .section-title { text-align: center; max-width: 560px; margin: 0 auto 48px; }
  .cta-box {
    position: relative;
    background: rgba(196,158,82,0.07);
    border: 1px solid rgba(196,158,82,0.25);
    border-radius: 16px;
    padding: 48px 44px 40px;
    max-width: 420px;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0 30px 80px -20px rgba(196,158,82,0.15);
  }
  .badge-discount {
    position: absolute;
    top: -14px; left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #c49e52, #e8c97a);
    color: #0d0a07;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 7px 16px;
    border-radius: 100px;
    white-space: nowrap;
  }
  .price-old {
    font-size: 13px;
    color: #6b6059;
    text-decoration: line-through;
    letter-spacing: 1px;
    margin-bottom: 6px;
  }
  .price-tag {
    font-family: 'Cormorant Garamond', serif;
    font-size: 72px;
    font-weight: 600;
    color: #c49e52;
    line-height: 1;
    margin-bottom: 6px;
  }
  .price-label {
    font-size: 12px;
    color: #b8aa96;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 32px;
  }
  .price-detail {
    font-size: 13px;
    color: #6b6059;
    margin-bottom: 28px;
    line-height: 1.6;
  }
  .btn-main {
    display: block;
    width: 100%;
    padding: 20px 32px;
    background: linear-gradient(135deg, #c49e52, #e8c97a, #c49e52);
    background-size: 200% auto;
    color: #0d0a07;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-position 0.4s, transform 0.15s, box-shadow 0.3s;
    text-decoration: none;
    text-align: center;
    box-shadow: 0 10px 30px -8px rgba(196,158,82,0.4);
  }
  .btn-main:hover {
    background-position: right center;
    transform: translateY(-2px);
    box-shadow: 0 16px 40px -8px rgba(196,158,82,0.6);
  }
  .guarantee { font-size: 12px; color: #6b6059; margin-top: 16px; }
  .payment-icons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 16px;
  }
  .payment-icons span {
    font-size: 10px;
    letter-spacing: 1.5px;
    color: #8a7d6e;
    border: 1px solid rgba(196,158,82,0.2);
    padding: 5px 10px;
    border-radius: 4px;
  }
  .price-perks {
    margin: 28px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
  }
  .perk {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 300;
    color: #b8aa96;
  }
  .perk-check { color: #c49e52; font-size: 16px; flex-shrink: 0; }

  .faq-section { padding-top: 40px; padding-bottom: 80px; }
  .faq-list { margin-top: 36px; display: flex; flex-direction: column; gap: 12px; }
  .faq-item {
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(196,158,82,0.12);
    border-radius: 10px;
    padding: 18px 22px;
    transition: border-color 0.2s;
  }
  .faq-item[open] { border-color: rgba(196,158,82,0.35); }
  .faq-item summary {
    cursor: pointer;
    font-size: 15px;
    color: #f5efe4;
    font-weight: 400;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }
  .faq-item summary::-webkit-details-marker { display: none; }
  .faq-item summary::after {
    content: '+';
    color: #c49e52;
    font-size: 22px;
    font-weight: 300;
    transition: transform 0.2s;
  }
  .faq-item[open] summary::after { transform: rotate(45deg); }
  .faq-item p {
    font-size: 14px;
    font-weight: 300;
    color: #b8aa96;
    line-height: 1.7;
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid rgba(196,158,82,0.1);
  }

  footer {
    text-align: center;
    padding: 32px 24px 100px;
    border-top: 1px solid rgba(255,255,255,0.05);
    font-size: 12px;
    color: #3d3530;
    letter-spacing: 1px;
  }

  .sticky-cta {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    z-index: 50;
    background: rgba(13,10,7,0.96);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-top: 1px solid rgba(196,158,82,0.25);
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    transform: translateY(100%);
    transition: transform 0.35s ease;
  }
  .sticky-cta.is-visible { transform: translateY(0); }
  .sticky-cta-text { display: flex; flex-direction: column; line-height: 1.1; }
  .sticky-price { font-family: 'Cormorant Garamond', serif; font-size: 26px; color: #c49e52; font-weight: 600; }
  .sticky-meta { font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #8a7d6e; }
  .sticky-btn { width: auto; padding: 14px 22px; font-size: 13px; box-shadow: none; }

  @media (min-width: 720px) {
    .sticky-cta { left: auto; right: 24px; bottom: 24px; border-radius: 14px; max-width: 360px; border: 1px solid rgba(196,158,82,0.3); }
  }
`;
