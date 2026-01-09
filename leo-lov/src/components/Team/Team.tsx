import "./Team.scss";

export function Team() {
  return (
    <section id="team" className="team">
      <h3>Mød holdet</h3>

      <div className="team-grid">
        {/* Person 1 */}
        <div className="member">
          <img src="/images/Ellipse1.png" alt="Person 1" />
          <h4>John Harbinger</h4>
          <p className="description">
            ”Jeg er den mest successfulde advokat i firmaet. I hvert fald mere end Peter.”
          </p>
          <div className="blue-line"></div>
        </div>

        {/* Person 2 */}
        <div className="member">
          <img src="/images/Ellipse2.png" alt="Person 2" />
          <h4>Peter Parker</h4>
          <p className="description">
            “Jeg holder af kaffe og så er jeg helt enormt succesfuld. Meget mere end John”
          </p>
          <div className="blue-line"></div>
        </div>

        {/* Person 3 */}
        <div className="member">
          <img src="/images/Ellipse3.png" alt="Person 3" />
          <h4>Elise Li</h4>
          <p className="description">
            “Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg altid sagt.”
          </p>
          <div className="blue-line"></div>
        </div>

        {/* Person 4 */}
        <div className="member">
          <img src="/images/Ellipse4.png" alt="Person 4" />
          <h4>Morten Nate</h4>
          <p className="description">
            “Jeg er født på landet. På landet er der ingen ret og lov. Det er det vilde vest derude.”
          </p>
          <div className="blue-line"></div>
        </div>
      </div>
    </section>
  );
}