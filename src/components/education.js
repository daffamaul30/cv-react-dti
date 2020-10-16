import React from 'react';

import Dot from '../assets/images/dot.png';

function Education(props) {
  const { edu } = props;

  return (
    <div id="education">
      <h3 className="sub">Education</h3>
      <table>
        <tbody>
          {edu.map((x) => {
          return (
            <tr key={x}>
              <td>
                <img id="dot" src={Dot} alt="dot" />
              </td>
              <td>
                <div>
                  <p>{x.year}</p>
                  <p>{x.school}</p>
                </div>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default Education;
