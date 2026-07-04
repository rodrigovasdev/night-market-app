export default function PromoStrip() {
  const messages = [
    "Envio gratis para todos los productos",
    "Descuentos tiempo limitado",
    "Esta es una página demo para portafolio personal",
    "Nuevos productos cada semana",
  ];

  return (
    <section className="promo-strip relative w-full overflow-hidden border-b border-neutral-300">
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <div className="promo-marquee relative z-10 flex h-10 items-center md:h-11" role="status" aria-label="Promociones activas">
        <div className="promo-marquee-track">
          <div className="promo-marquee-group">
            {messages.map((message, index) => (
              <span key={`group-a-${index}`} className="promo-marquee-item">
                {message}
              </span>
            ))}
          </div>

          <div className="promo-marquee-group" aria-hidden="true">
            {messages.map((message, index) => (
              <span key={`group-b-${index}`} className="promo-marquee-item">
                {message}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
