import { useEffect, useRef, useState } from "react";

export const PopUp = ({ isOpen, message, popUpref }) => {
  const [refObject, setRefObject] = useState({ top: 0, left: 0, width: 0 });
  const [popUp, setPopUp] = useState({width:0})
  const currentRef = useRef(undefined);
  const display = isOpen ? "block" : "none";

  useEffect(() => {
    if (isOpen) {
      const { top, left, width:refWidth } = popUpref.current.getBoundingClientRect();
      const { width:popWidth} = currentRef.current.getBoundingClientRect();
      setRefObject({ top, left, width:refWidth });
      setPopUp({width:popWidth });
    }
  }, [isOpen]);

  return (
    <div
      ref={currentRef}
      className="popUp"
      style={{
        display: display,
        top: refObject.top - 40,
        left: refObject.left - (popUp.width/2) + (refObject.width/2),
      }}
    >
      {message}
    </div>
  );
};

/*
bottom
: 
741.3692016601562
height
: 
60
left
: 
680.2922973632812
right
: 
776.7076797485352
top
: 
681.3692016601562
width
: 
96.4153823852539
x
: 
680.2922973632812
y
: 
681.3692016601562


*/
