import React from 'react';

function Interest(props) {
  const { interests } = props;
  return (
    <div id="interest">
      <div>
        <h3 className="sub">Interest</h3>
      </div>
      <div id="interest-grid">
        {interests.map((x) => {
          return <img key={x.alt} src={x.image} alt={x.alt} />;
        })}
      </div>
    </div>
  );
}
export default Interest;
