import * as React from 'react';
import { Button } from '@mui/material';

export default function resultButton() {
    return (
       
              <div className="ButtonWrap">
        
           <Button variant="outlined" style={{border:"1px solid #333", color:"#333"}}> 
           다시하기
           </Button>

 <Button variant="outlined" style={{border:"1px solid #333", color:"#333"}}> 
 처음으로
</Button>

        </div>
    
    )
}
