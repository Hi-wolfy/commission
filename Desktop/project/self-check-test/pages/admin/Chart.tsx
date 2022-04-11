import React from 'react'
import MobileNav from "../../components/MobileNav";
import SelectForm from "../../components/SelectForm";



export default function Chart() {


    return (
        <div className="pageWrap">
        <MobileNav />
            


            
<div className="Chart">
<p> <h5>방문자 수 2521명</h5> <SelectForm /> </p>
<article className="box" />
</div>

<div className="Instance">
<h5>사용 중인 인스턴스</h5>
<li>API서버: 12 / 25</li>
<li>클라이언트 서버: 2 / 5</li>
<li>GPU 서버: 활성화됨</li>
</div>

<div className="Chart">
<p> <h5>서버 유지 비용</h5> <SelectForm /> </p>
<article className="box" />
</div>

        </div>
    )
}
