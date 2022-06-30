const Experience = () => (
  <section class="d-flex wrapper">
    <aside class="header__container">
      <h2 class="heading">Experience</h2>
    </aside>

    <section class="content__container">
    <article class="info">
        <header>
          <h3>
            Middle Front-end Software Engineer,
            <span>Cốc Cốc</span>
          </h3>
          <p class="sub-header">March 2021 - Now</p>
        </header>
        <main>
          <ul>
            <li>Custom build-in tools (webpack, babel,...) and optimize on PROD</li>
            <li>Create A/B testing (up to 200% increase in conversion rate)</li>
            <li>Add linting and stylelint to improving code quality</li>
            <li>Transfer code to ES5 for more browser compatibility</li>
            <li>Write unit test and E2E test for each component</li>
          </ul>
        </main>
      </article>


      <article class="info">
        <header>
          <h3>
            Fresher Front-end,
            <span>TTC Solution</span>
          </h3>
          <p class="sub-header">December 2020 - February 2021</p>
        </header>
        <main>
          <ul>
            <li>Development Unitel account management with Angular</li>
            <li>Make Responsive web design, improving performance and user experience</li>
            <li>Add Accessibility for enabling as many people as possible to use websites</li>
          </ul>
        </main>
      </article>
    </section>
  </section>
);

export default Experience;
