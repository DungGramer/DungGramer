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
              <p>Created a new website using React.js to introduce QC Cốc Cốc. I ensured that the project was optimized for old browsers (such as IE11 and Safari 9) and reduced the size for production. I also customized the webpack config and used only CSS flexbox for responsiveness. Additionally, I added SEO to improve ranking when users searched for the website.</p>
            </li>
            <li>
              <strong><a href="https://operation.coccoc.com/">Operation Tool</a></strong>
              <p>Developed a local tool to help the DEV team save time supporting the setting of mapping advert and publisher rule. I connected it with PHP and visualized the data in a table.</p>
            </li>
            <li>
            <strong><a href="https://coccoc.com/search">Ad Tag, Search Ad</a></strong>
              <p>Determined responsive ad layout based on the available space. I also wrote unit tests for each component. For Search Ad, I created A/B testing and E2E test before deployment.</p>
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
              <p>Developed an account management system using Angular and Material UI. I made it responsive, improved performance, and enhanced user experience. I also added accessibility to enable as many people as possible to use the website.</p>
            </li>
          </ul>
        </main>
      </article>
    </section>
  </section>
);

export default Experience;
