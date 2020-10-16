import React from "react";

function Intro(props) {
  const { items } = props;

  return (
    <div className="intro">
      <div id="about">
        <h3 className="sub">About</h3>
        <p>{items.desc}</p>
        <hr id="stripped" />
        {items.contacts.map((x, index) => {
          return (
            <div key={index}>
              <img src={x.logo} alt="Phone" />
              {x.value}
            </div>
          );
        })}
      </div>
      <div id="basic">
        <h3 className="sub">Basic Information</h3>
        <table cellSpacing="10">
          <tbody>
            {items.info.map((x, indexx) => {
              return (
                <tr key={indexx}>
                  <th>{x.title}</th>
                  <td>:</td>
                  <td>{x.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Intro;
