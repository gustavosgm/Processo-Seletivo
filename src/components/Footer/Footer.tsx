const FOOTER_LINKS = [
  {
    title: 'Institucional',
    links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  },
  {
    title: 'Termos',
    links: [
      'Termos e Condições',
      'Política de Privacidade',
      'Troca e Devolução',
    ],
  },
]

function Footer() {
  return (
    <footer className="site-footer">
      <section className="newsletter">
        <div className="newsletter__text">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form">
          <div className="newsletter__fields">
            <input type="text" placeholder="Digite seu nome" aria-label="Nome" />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              aria-label="E-mail"
            />
            <button type="submit">INSCREVER</button>
          </div>
          <label className="newsletter__terms">
            <input type="checkbox" />
            Aceito os termos e condições
          </label>
        </form>
      </section>

      <div className="site-footer__main">
        <div className="site-footer__brand">
          <img src="/logo.png" alt="Econverse" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <ul className="site-footer__social">
            <li>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 21v-8h3l.5-3H14V8.5c0-.9.3-1.5 1.6-1.5H17.5V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V10H8v3h3v8z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="9" width="3.5" height="11" />
                  <circle cx="4.75" cy="5" r="1.8" />
                  <path d="M10 9h3.4v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.3 4.2 5.3V20h-3.5v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20H10z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {FOOTER_LINKS.map((column) => (
          <nav key={column.title} className="site-footer__column">
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <p className="site-footer__bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </footer>
  )
}

export default Footer
