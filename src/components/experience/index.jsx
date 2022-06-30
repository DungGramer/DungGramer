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
              <strong><a href="https://qc.coccoc.com">Quảng Cáo Cốc Cốc</a></strong>
              <p>Created a new website to introduce QC Cốc Cốc with React. JS. Project target for old browser ES5 support (IE11, Safari 9,...) and reduce size for production. I'm custom webpack config and only using CSS flexbox to make responsive. And then, add SEO to rank higher when users search.</p>
            </li>
            <li>
              <strong><a href="https://operation.coccoc.com/">Operation Tool</a></strong>
              <p>A local tool to help the DEV team save time to support setting a rule of mapping advert and publisher. Otherwise, help the Operator team actively/quickly set the rule. I did connect with PHP and visualize the data in the table.</p>
            </li>
            <li>
            <strong><a href="https://coccoc.com/search">Ad Tag, Search Ad</a></strong>
              <p>Determine responsive ad layout based on the space available. I'm writing unit tests for each component. With Search ad, I create A/B testing and E2E test before deployment.</p>
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
            <li>
              <strong ><a href="https://www.unitel.com.la/account">Unitel</a></strong>
              <p>
                Development account management system with Angular and Material UI. I'm Make Responsive web design, improving performance and user experience. After that, Add Accessibility for enabling as many people as possible to use websites.
              </p>
            </li>
          </ul>
        </main>
      </article>
    </section>
  </section>
);

export default Experience;
