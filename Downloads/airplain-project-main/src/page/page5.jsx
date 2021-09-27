import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const page5 = () => {
  return (
    <div className="pageWrap">
      <Link to="/page4" className="BackIcon"><ArrowBackIcon fontSize="large" /></Link>

<div className="downloadWrap downloadClearWrap"> <img src="img/uploadPlane.png" width="80px" /> </div>  
<br />
사진이 업로드 되었습니다.
<button className="afterBtn"> 사진 업로드</button>   

<button className="checkStartBtn">셀프 체크 시작</button>

    </div>
  );
};

export default page5;
