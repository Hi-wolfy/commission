import React from "react";
import { Link } from "react-router-dom";

const page1 = () => {
  return (
    <div className="pageWrap">
    <img src="img/plane.png" className="plane" />
      <h2>반입금지 셀프 체크</h2>

<Link to="/page2"> <img src="img/arrow.png" className="arrow"/></Link>
<h1>시작하기</h1>
    </div>
  );
};

export default page1;
