import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const page4 = () => {
  return (
    <div className="pageWrap">
      <Link to="/page3" className="BackIcon"><ArrowBackIcon fontSize="large" /></Link>
     <h3>사진을 업로드해주세요.</h3>

<div className="downloadWrap"> <img src="img/download.png" width="100px" /> </div>  
<button className="beforeBtn"> <Link to="/page5">사진 업로드</Link> </button>   

<ul>
<li> <img src="img/check.png" width="24px" className="photoCheck" /> <b>무늬가 없는 배경</b>에서 촬영해주세요.</li>
<li><img src="img/check.png" width="24px" className="photoCheck" /> <b>물품 전체</b>가 나오도록 촬영해주세요.</li>
<li><img src="img/check.png" width="24px" className="photoCheck" /> <b>물품이 겹치지 않게</b> 촬영해주세요.</li>
</ul>

    </div>
  );
};

export default page4;
