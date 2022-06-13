const Skill = () => (
  <section className="d-flex wrapper">
    <aside className="header__container">
      <h2 className="heading">Skills</h2>
    </aside>

    <section className="content__container skill__section d-flex flex--1x3">
      <article className="info">
        <header>
          <h3>Coding</h3>
        </header>
        <main>
          <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React Native</li>
            <li>Python</li>
          </ul>
        </main>
      </article>

      <article className="info">
        <header>
          <h3>Other</h3>
        </header>
        <main>
          <ul>
            <li>Data Visualization</li>
            <li>Bookmarklet</li>
            <li>Visual Design</li>
            <li>Wireframe</li>
            <li>Bash</li>
          </ul>
        </main>
      </article>

      <article className="info">
        <header>
          <h3>Software</h3>
        </header>
        <main>
          <ul>
            <li>VS Code</li>
            <li>Ubuntu, Windows</li>
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>Photoshop</li>
            <li>illustrator</li>
          </ul>
        </main>
      </article>
    </section>
  </section>
);

export default Skill;
