const Header = () => (
  <header className="d-flex header__section wrapper">
    <aside className="header__container">
      <h1 className="heading">Nguyễn Công Dũng</h1>
      <h2 className="exp-level">Front-end Middle</h2>
    </aside>

    <address className="content__container">
      <p>
        <a href="mailto:dung.dev.gramer@gmail.com">
          dung.dev.gramer@gmail.com
        </a>
      </p>
      <p>
        <a href="tel:+84334565999"> +84 334 565 999 </a>
      </p>
      <p>
        <a href="https://github.com/DungGramer">
          https://github.com/DungGramer
        </a>
      </p>
    </address>
  </header>
);

export default Header;
