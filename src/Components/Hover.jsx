import React from 'react'
import useHover from "@react-hook/hover";
import { styles } from "@dash-ui/styles";
import img5 from "./../image/image9.jpg"

export const Hover = () => {
    const Hovertarget = React.useRef(null);
    const Hovered = useHover(Hovertarget);
  return (
    <div className={hoverStyle({ Hovered })} ref={Hovertarget}>
      {Hovered ? "Hovered Style" : "Default Style"}
    </div>
  );
}
const hoverStyle = styles({
    default: `
    background: linear-gradient(#FFFF00, #b9a709ac ) , url(${img5});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
    `,
    Hovered: `
      background: yellow;
    `
  });

export default Hover



 
  
  