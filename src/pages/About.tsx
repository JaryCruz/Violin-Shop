import violinImg from '../assets/violin.png'

export function About() {
  return (
    <>
      <header className="about-header">
        <div className="about-header-img"></div>
        <div>
          <h1>ABOUT US</h1>
          <h2>Welcome to ViolinShop</h2>
        </div>
      </header>
      <section className="about-description">
        <p>Here at ViolinShop, our passion is to provide incredible sounding, and affordable string instruments for passionate musicians. When my son and I started ViolinShop in 2015, we knew we could offer a better online shopping experience by sharing our love for music and helping others on their musical journey.</p>
        <p>
        In those early days, I was creating a lot videos for jarycruz.com to help musicians learn how to play the violin for free. The questions that kept coming up from that community about where to buy an instrument, which instrument to buy, and similar questions gave us the insight and confidence to start a shop that would guide customers from complete beginners to professionals.
        </p>
      </section>
      <section className="featured-about-section">
        <div className="container">
          <img src={violinImg} alt="" />
          <div>
            <p>"The violin is the voice of passion, the instrument that sings the melody of the heart and touches the soul with its timeless elegance."</p>
            <h3>- Marco Vivaldi</h3>
          </div>
        </div>
      </section>
      <section className="about-description">
        <p>Since the start, we’ve stood behind every single product on ViolinShop website and strive to offer the lowest prices possible. We strongly believe in “showing your work” and so we demonstrate all our instruments, and will even play multiple instruments for customers to choose.</p>
        <p>
        The real difference of shopping at ViolinShop compared to other online stores though, is our world-class luthern that set up each instrument to ensure that they are easy to play and sound the best they can. One of our professional musicians tests each instrument before it ships, and works closely with the luthern to make any adjustments in order to help it sound its best. We set up and test over 6,000 instruments a year, so we have the experience and expertise to know what to look for, and how to fix any issue. We also specialize in repairs, bow re-hairs, and major restorations.
        </p>
      </section>
    </>
  )
}