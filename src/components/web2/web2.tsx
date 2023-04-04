import "./web2.css";

export default function Web2() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Web2 Landing
        </h1>

        <p className="description">
          View my web2 presence:
        </p>

        <div className="grid">
          <a href="https://github.com/cpmcgee/" className="card github" target="_blank" rel="noopener noreferrer">
            <h2>GitHub &rarr;</h2>
          </a>

          <a href="https://twitter.com/cm66350859/" className="card twitter" target="_blank" rel="noopener noreferrer">
            <h2>Twitter &rarr;</h2>
          </a>

          <a href="https://www.linkedin.com/in/chris-mcgee-507ab3b3/" className="card linkedin" target="_blank" rel="noopener noreferrer">
            <h2>LinkedIn &rarr;</h2>
          </a>
        </div>
      </main>
    </div>
  );
}
