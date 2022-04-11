import * as React from "react";
import { Button, Tabs, Tab } from "@mui/material";

export default function MainFirst() {
  return (
    <div className="pageWrap">
      <img src="img/plane.svg" className="plane" />
      <h2>반입금지 셀프체크</h2>

      <Button variant="contained" size="large">
        <a href="/CheckExplan">시작하기</a>
      </Button>
    </div>
  );
}
