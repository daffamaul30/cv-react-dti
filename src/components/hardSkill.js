import React from 'react';

function hardSkill(props) {
  const { hardSkills } = props;

  return (
    <div id="hard">
      <h4 className="sub-sub">Hard Skills</h4>
      {hardSkills.map((x) => {
        return (
          <li key={x}>
            <h5>{x.name}</h5>
            <span className="bar">
              <span id={x.id} style={{ width: x.percentage }} />
            </span>
          </li>
        );
      })}
    </div>
  );
}
export default hardSkill;
