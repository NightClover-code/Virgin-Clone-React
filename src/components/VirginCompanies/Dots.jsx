import React, { useEffect, useRef, useState } from 'react';

import { dots } from 'glider-js';

const Dots = ({ counter }) => {
  const dotsRef = useRef(null);

  const [activeDot, setActiveDot] = useState(null);
  useEffect(() => {
    const dotsArray = Array.from(dotsRef.current.children);
    dotsArray.forEach(dot => {
      dot.classList.remove('active-dot');
    });
    setActiveDot(dotsArray[counter]);
  }, [counter]);
  useEffect(() => {
    if (activeDot) {
      activeDot.classList.add('active-dot');
    }
  }, [activeDot]);
  return (
    <div className="dots-container">
      <div className="dots" ref={dotsRef}>
        <div
          className="dot-container active-dot"
          data-id="0"
        >
          <div className="dot"></div>
        </div>
        <div className="dot-container" data-id="1">
          <div className="dot"></div>
        </div>
        <div className="dot-container" data-id="2">
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Dots;
