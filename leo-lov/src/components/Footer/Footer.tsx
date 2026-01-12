import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <article>
          <h4>Adresse</h4>
          <p>Find os her:</p>
          <p>
            Maldive rd. 22,<br />
            Seychelle Islands
          </p>
        </article>

        <article>
          <h4>Kontakt</h4>
          <p>Kontakt os her:</p>
          <p>
            email@mail.dk<br />
            Tlf: 01923023
          </p>
        </article>

        <article>
          <h4>Politik</h4>
          <p>Vores politikker:</p>
          <p>
            Privatlivspolitik<br />
            Cookiepolitik<br />
            Generelle betingelser
          </p>
        </article>

        <article>
          <h4>Følg os</h4>
          <p>📘<br />📸</p>
        </article>
      </div>
    </footer>
  );
}