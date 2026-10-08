const PARTNERS = [
  {
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    buttonLabel: 'CONFIRA',
  },
  {
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    buttonLabel: 'CONFIRA',
  },
]

function PartnerBanners() {
  return (
    <section className="partner-banners">
      {PARTNERS.map((partner, index) => (
        <article className="partner-banner" key={index}>
          <h2>{partner.title}</h2>
          <p>{partner.description}</p>
          <a href="#produtos" className="partner-banner__button">
            {partner.buttonLabel}
          </a>
        </article>
      ))}
    </section>
  )
}

export default PartnerBanners
