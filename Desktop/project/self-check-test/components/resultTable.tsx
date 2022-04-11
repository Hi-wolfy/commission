import * as React from 'react';
import { Button } from '@mui/material';

export default function resultTable() {
    return (
          <div className="TableWrap">
        <div className="TableRow">
           <span> <b>드라이버</b>이(가) 발견되었습니다.</span> 
           <Button variant="outlined" style={{border:"1px solid #333", color:"#333"}}> 
반입규정 확인
           </Button>
        </div>
           <hr />
        </div>
    )
}
