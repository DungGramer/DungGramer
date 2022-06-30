const Skill = () => (
  <section class="d-flex wrapper">
    <aside class="header__container">
      <h2 class="heading">Skills</h2>
    </aside>

    <section class="content__container skill__section d-flex flex--1x3">
      <article class="info">
        <header>
          <h3>Coding</h3>
        </header>
        <main>
          <ul>
            <li>React.JS</li>
            <li>Javascript</li>
            <li>SASS, LESS, Stylus</li>
          </ul>
        </main>
      </article>

      <article class="info">
        <header>
          <h3>Build Tools</h3>
        </header>
        <main>
          <ul>
          <li>Webpack, Gulp</li>
            <li>Babel, PostCSS</li>
            <li>ESLint, Stylelint</li>
          </ul>
        </main>
      </article>

      <article class="info">
        <header>
          <h3>Others</h3>
        </header>
        <main>
          <ul>
            <li>Bookmarklet</li>
            <li>Bash Script</li>
            <li>Git Action</li>
          </ul>
        </main>
      </article>
    </section>
  </section>
);

export default Skill;
