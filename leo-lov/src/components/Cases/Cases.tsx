import "./Cases.scss";

export function Cases() {
  return (
    <section id="cases" className="cases">
      <article className="case">
        <div className="case-grid">
          <img src="/images/Rectangle8.png" alt="Intet problem" />

          <div className="case-content">
            <h3>Intet problem</h3>
            <p>
              Leo-Lov har altid været det bedste advokatfirma i verden. Der er
              simpelthen ingen der kan måle sig med os. Vi kan løse alle
              problemer så længe du har penge.
              <br /><br />
              Skulle du mod forventning støde på et juridisk problem, vi ikke kan
              løse, får du halvdelen af beløbet igen.
            </p>
          </div>
        </div>
      </article>
      
      
      <article className="case">
        <div className="case-grid reverse">
          <img src="/images/Rectangle11.png" alt="Evig garanti" />

          <div className="case-content">
            <h3>Evig garanti</h3>
            <p>
              Hos Leo-Lov står vi ved vores arbejde – for altid. Vores garanti
              stopper aldrig, og vi sikrer dig juridisk tryghed hele livet.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}