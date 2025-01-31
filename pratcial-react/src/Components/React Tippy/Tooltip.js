import React,{forwardRef} from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css"; // Import Tippy CSS

const coloredToolTip=()=>{
    return (
    <span style={{color:'yellow'}}>Colored</span>
)
}

const CustomChild=forwardRef((props,ref)=>{
    return(
        <div ref={ref}>
        <div>First Line</div>
        <div>Second Line</div>
        </div>
    )
})

function Tooltip() {
  return (
    <div>
      <div style={{paddingBottom:'25px'}}>
        <Tippy placement="end" arrow={false} delay={1000} content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>
      <div  style={{paddingBottom:'25px'}}>
        <Tippy content={<span style={{color:'red',backgroundColor:'#fff'}}>Colored</span>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{paddingBottom:'25px'}}>
        <Tippy content={coloredToolTip()}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{paddingBottom:'25px'}}>
        <Tippy content={coloredToolTip()}>
          <CustomChild></CustomChild>
        </Tippy>
      </div>
    </div>
  );
}

export default Tooltip;
