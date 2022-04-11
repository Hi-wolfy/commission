import React from 'react';
import { Button } from "@mui/material";
import MobileNav from "../../components/MobileNav";
// import SearchInput from "../../components/SearchInput";


export default function AddItem() {
    return (
<div className="pageWrap">
    <MobileNav />  
    
여기에 콘텐츠를 삽입합니다
    
    <p>
    <Button variant="outlined">
    목록으로
    </Button>
       <Button variant="outlined">
    추가하기
    </Button>
    </p>
</div>
    )
}
