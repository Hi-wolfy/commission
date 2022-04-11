import React from "react";
import { Button } from "@mui/material";

// caution self detection check component
export default function checkExplan() {
  return (
    <div className="pageWrap arrowWrap">
      <a href="/" className="BackIcon"></a>
      <img src="img/cont3.svg" className="car" />
      <h2>업로드 전 체크해주세요</h2>
      <ul>
        <li>
          ➤ 짐 중에서 의류, 수건을 모두 제외 해주세요. <br /> 의류는 반입금지
          물품에 포함되지 않아요.
        </li>
        <br />
        <li>
          ➤ 모든 물품들은 최대한 서로 겹치지 않도록
          <br />
          늘어놓아주세요.
        </li>
        <br />
        <li>
          ➤ 물품이 잘리거나 겹치지 않았는지 확인했다면, <br />
          가급적이면 위에서 아래로 촬영한 뒤 <br /> 결과를 확인해주세요.
        </li>
      </ul>
      <a href="/Photo">
        <Button variant="outlined">다음</Button>
      </a>
      <br />
      <br />
    </div>
  );
};

