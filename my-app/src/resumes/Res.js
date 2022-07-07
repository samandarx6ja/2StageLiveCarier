import React from 'react';
import './Res.css';
import Imgres from './images/rbs.png';
function Res() {
  return (
    <>
      <div 
      className='res_'>
          <span
           className='res_a_vch'>
            <a 
            href=''>
              Home
            </a>  » 
            </span>
          <span 
          className='res_a_vch'>
            <a 
            href=''>
              Resume
            </a>  » 
            </span>
          <strong 
          className='res_strong_a'>
            Resume Builder
          </strong>
      </div>
      <div className='res_header'>
        <img  src={Imgres}
        className='res_img_result'>
        </img>
          <h1
           className='res_hd_h1'>
            Create a Great <br></br> Resume in a Matter of <br></br> Minutes
          </h1>
          <p
          className='res_hd_p'>
            Your resume is as unique as your career journey, which <br></br> means that no two resumes are built the exact same way. <br></br> With LiveCareer, you can learn the differences between <br></br> resume formats, choose the right resume template for your <br></br> industry, apply for jobs directly, and gain access to relevant <br></br> how-to articles.
          </p>
          <p
          className='res_hd_p2'>
            When you use LiveCareer’s Builder, you can generate a <br></br> resume in a matter of minutes that will pass through an <br></br> applicant tracking system (ATS) and impress hiring <br></br> managers. Start using our resume builder online today for <br></br> free!
          </p>
      </div>
    </>
  );
}

export default Res;