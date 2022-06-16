const Download = () => (
  <div
    class="download"
    ref={(e) => {
      window.addEventListener('click', () => {
        if (e.className === 'download') {
          e.classList.add('open');
        } else {
          e.classList.remove('open');
        }
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
          href="//raw.githubusercontent.com/DungGramer/DungGramer/master/public/NguyenCongDung-resume.pdf"
        >
          Download (.pdf)
        </a>
      </li>
      <li>
        <p
          class="print"
          ref={(e) => {
            e.addEventListener('click', () => {
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
