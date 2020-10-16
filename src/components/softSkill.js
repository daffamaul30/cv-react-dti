import React from 'react';

function softSkill(props) {
  const { softSkills } = props;

  return (
    <div id="soft">
      <h4 className="sub-sub">Soft Skills</h4>
      <div className="grid">
        {softSkills.map((x) => {
          return <h5 key={x}>{x}</h5>;
        })}
      </div>
    </div>
  );
}
export default softSkill;
