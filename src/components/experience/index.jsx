const Experience = () => (
  <section className="d-flex wrapper">
    <aside className="header__container">
      <h2 className="heading">Experience</h2>
    </aside>

    <section className="content__container">
      <article className="info">
        <header>
          <h3>
            Front-end,
            <span>TTC Solution - Unitel Project</span>
          </h3>
          <p className="sub-header">December 2020 - February 2021</p>
        </header>
        <main>
          <ul>
            <li>Designed dynamic pages using Angular</li>
            <li>Expand feature, refine code</li>
            <li>
              Responsive web design, UI using Flex Layout, CSS media query
            </li>
            <li>
              Produced stunning visual elements of web applications by
              translating UI/UX design wireframes into code while producing high
              quality, reusable markup using HTML5 and CSS3
            </li>
          </ul>
        </main>
      </article>

      <article className="info">
        <header>
          <h3>
            IT Support Technician,
            <span>Hoang Bach Technology CO., LTD</span>
          </h3>
          <p>August 2017 - January 2018</p>
        </header>
        <main>
          <ul>
            <li>
              Installing and configuring computer hardware, software, systems,
              networks, printers and scanners
            </li>
            <li>Repairing and replacing equipment as necessary</li>
            <li>Testing new technology</li>
            <li>Sales, product consultation</li>
          </ul>
        </main>
      </article>
    </section>
  </section>
);

export default Experience;
