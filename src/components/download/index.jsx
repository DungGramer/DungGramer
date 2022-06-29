const Download = () => (
  <div
    class="download"
    ref={(e) => {
      const toggleOpen = () => {
        if (e.className === 'download') {
          e.classList.add('open');
        } else {
          e.classList.remove('open');
        }
      }
      window.addEventListener('click', toggleOpen);

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
