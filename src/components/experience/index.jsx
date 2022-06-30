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
            <li>
              <p><a href="https://qc.coccoc.com">Quảng Cáo Cốc Cốc</a></p>
              <p>Created a new website for QC Cốc Cốc with React.JS. Project target for old browser ES5 support (IE11, Safari 9,...) and reduce size for production. I'm custom webpack config and only using css flexbox to make responsive.</p>
            </li>
            <li>
              <p><a href="https://operation.coccoc.com/">Operation Tool</a></p>
            </li>
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
            <li>
              Make Responsive web design, improving performance and user
              experience
            </li>
            <li>
              Add Accessibility for enabling as many people as possible to use
              websites
            </li>
          </ul>
        </main>
      </article>
    </section>
  </section>
);

export default Experience;
