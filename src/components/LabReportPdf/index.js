import React from 'react';

export default function index({ data, innerRef }) {
  console.log(data);
  return (
    <div ref={innerRef}>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iusto, veniam iste esse
        nostrum, sint explicabo architecto sequi soluta possimus tenetur eligendi consequuntur dolor
        quaerat accusamus nam veritatis officia autem!
      </h1>
    </div>
  );
}
