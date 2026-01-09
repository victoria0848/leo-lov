import "./Location.scss";

interface LocationType {
  city: string;
  mapSrc: string;
  address: string[];
}

export function Location() {
  const locations: LocationType[] = [
    {
      city: "Copenhagen",
      mapSrc: "https://www.google.com/maps?q=copenhagen&output=embed",
      address: ["Leo-Lov ApS", "Maldive rd. 22", "Seychelles"],
    },
  ];

  return (
    <section id="location" className="location">
      {locations.map((loc, i) => (
        <article key={i} className="location-card">
          {/* Map */}
          <div className="map-container">
            <iframe
              src={loc.mapSrc}
              loading="lazy"
              title={`Map of ${loc.city}`}
            ></iframe>
          </div>

          {/* Text */}
          <div className="location-text">
            <h3>Her bor vi</h3>
            <p>
              Vi har valgt at bosætte os i solen! <br />
              Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi
              rigtig meget. <br />
              “Hvis du har råd til at tage til Sechellerne har du råd til os”. Det er
              et af vores utallige motto´er
            </p>
            <div className="address">
              {loc.address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}