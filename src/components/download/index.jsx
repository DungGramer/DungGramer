import { h, Fragment } from 'start-dom-jsx';

const Download = () => (
  <div className="download">
    <ul className="download__wrapper">
      <li>
        <a
          className="pdf"
          href="//raw.githubusercontent.com/DungGramer/DungGramer/master/NguyenCongDung-resume.pdf"
        >
          Download (.pdf)
        </a>
      </li>
      <li>
        <p className="print">Print</p>
      </li>
    </ul>
  </div>
);

export default Download;
