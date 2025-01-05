import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Laat een bericht achter</h2>
        <form>
          <label>
            Naam
            <input type="text" name="name" required />
          </label>
          <label>
            E-mail
            <input type="email" name="email" required />
          </label>
          <label>
            Telefoonnummer
            <input type="tel" name="phone" required />
          </label>
          <label>
            Bericht
            <textarea name="message" required></textarea>
          </label>
          <button type="submit" className="cta-button">Verstuur Bericht</button>
        </form>
      </div>
    </section>
  )
}

export default Contact 