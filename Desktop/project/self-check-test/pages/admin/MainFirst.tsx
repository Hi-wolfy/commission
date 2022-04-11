import * as React from "react";
import { Button, Tabs, Tab, Box, TextField } from "@mui/material";




export default function MainFirst() {
    return (
        <div>
               <div className="pageWrap">
      <img src="../img/plane.svg" className="plane" />
      <h2>관리자 페이지</h2>


   <div className="loginInput">
   <p>  <label>아이디</label>  <TextField
        id="demo-helper-text-aligned"
        label="ID"
      /></p>
      <p> <label>패스워드</label>  <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="PW"
      /></p>
   
    
    </div>

      <Button variant="contained" size="large">
        <a href="/admin/Chart">시작하기</a>
      </Button>
    </div>
        </div>
    )
}
