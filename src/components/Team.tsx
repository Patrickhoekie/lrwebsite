import './Team.css'

function Team() {
  return (
    <section className="team">
      <div className="container">
        <h2>Ons Team</h2>
        <div className="team-members">
          <div className="member">
            <img src="/images/andries.jpg" alt="Andries Wolbers" />
            <h3>Andries Wolbers</h3>
            <p>Oprichter & Eigenaar, Creatief Strateeg</p>
          </div>
          <div className="member">
            <img src="/images/nick.jpg" alt="Nick van der Harst" />
            <h3>Nick van der Harst</h3>
            <p>Oprichter & Eigenaar, Google Ads Specialist</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team 