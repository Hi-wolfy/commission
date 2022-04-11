import React from "react";
import { Button } from "@mui/material";

export default function Photo(){
  return (
    <div className="pageWrap arrowWrap">
      <img src="img/download.png" alt="photo" className="car" />
      <ul className="caution_ul">
        <li>
          ➤ <b>무늬가 없는 배경</b>에서 촬영해주세요.
        </li>
        <li>
          ➤ <b>물품 전체</b>가 나오도록 촬영해주세요.
        </li>
        <li>
          ➤ <b>물품이 겹치지 않게</b> 촬영해주세요.
        </li>
      </ul>
      <Button variant="outlined" size="large">
        사진 업로드
      </Button>
      <Button variant="contained" size="large">
        셀프 체크 시작!
      </Button>
      <br />
      <br />
    </div>
  );
};


