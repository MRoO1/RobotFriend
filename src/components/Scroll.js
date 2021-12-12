import React from 'react';

const Scroll = (props) => {//props is scroll
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px' }}>
      {props.children}
      {/* children is cardlist */}
    </div>
  );
};

export default Scroll;