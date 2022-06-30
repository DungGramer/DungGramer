const Download = () => (
  <div
    class="download"
    ref={(e) => {
      window.addEventListener('click', () => {
        e.classList.remove('open');
      });

      e.addEventListener('click', (event) => {
        event.stopPropagation();
        e.classList.toggle('open');
      });


      let prevScrollPosition = window.pageYOffset;
      window.onscroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPosition < currentScrollPos) {
          e.style.bottom = '10px';
        } else {
          e.classList.remove('open');
          e.style.bottom = '-80px';
        }
        prevScrollPosition = currentScrollPos;
      };
    }}
  >
    <ul class="download__wrapper">
      <li>
        <a
          class="pdf"
          href="https://raw.githubusercontent.com/DungGramer/DungGramer/master/public/NguyenCongDung-resume.pdf"
          download
        >
          Download (.pdf)
        </a>
      </li>
      <li>
        <p
          class="print"
          ref={(e) => {
            e.addEventListener('pointerdown', () => {
              window.print();
            });
          }}
        >
          Print
        </p>
      </li>
    </ul>
  </div>
);

export default Download;
