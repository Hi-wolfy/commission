import React from 'react';
import { Button } from "@mui/material";
import MobileNav from "../../components/MobileNav";
import SearchInput from "../../components/SearchInput";
import Categories from "../../components/Categories";

export default function Classification() {
    return (
<div className="pageWrap">
    <MobileNav />  
    <br />
    <SearchInput />
    <Categories />
    <Categories />
    <Categories />
    <Categories />
    <Categories />
    
    <Button variant="outlined">
    항목추가
    </Button>
</div>
    )
}
