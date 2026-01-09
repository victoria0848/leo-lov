import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div>
          <h4>Adresse</h4>
          <p>Find os her:</p>
          <p>Maldive rd. 22,<br/>Seychelle Islands</p>
        </div>

        <div>
          <h4>Kontakt</h4>
          <p>Kontakt os her:</p>
          <p>email@mail.dk<br/>Tlf: 01923023</p>
        </div>

        <div>
          <h4>Politik</h4>
          <p>Vores politikker:</p>
          <p>Privatlivspolitik<br/>Cookiepolitik<br/>Generalle betingelse</p>
        </div>

        <div>
          <h4>Følg os</h4>
          <p>📘<br />📸</p>
        </div>

      </div>
    </footer>
  );
}