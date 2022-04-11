import React from 'react'
import { Button } from "@mui/material";


export default function MobileNav() {
    return (
        <div className="MobileNav">
            <header>
            <h4>AdminP</h4>
             <Button>
        <a href="/admin/MainFirst">로그인페이지</a>
      </Button>
         <Button>
        <a href="/admin/Chart">차트페이지</a>
      </Button>
         <Button>
        <a href="/admin/Classification">대소분류이름</a>
      </Button>
          <Button>
        <a href="/admin/AddItem">대소분류이름</a>
      </Button>
        <Button>
        <a href="/admin/AddPhoto">대소분류이름</a>
      </Button>
            </header>
        </div>
    )
}
