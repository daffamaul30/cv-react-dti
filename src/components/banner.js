import React from 'react';

function Banner(props) {
  const { items } = props;
  const pict = items.filter((x) => {
    return x.alt === 'profile pict';
  });
  const socmed = items.filter((x) => {
    return x.alt !== 'profile pict';
  });

  return (
    <div className="profil-banner">
      <figure id="pict">
        <img src={pict[0].image} alt={pict[0].alt} />
      </figure>
      <span>
        <p id="name">Hello, I'm Daffa</p>
        <p id="job">Front-End Developer</p>
        <ul id="socmed">
          {socmed.map((x) => {
            return (
              <li key={x}>
                <a href={x.link}>
                  <img src={x.image} alt={x.alt} />
                </a>
              </li>
            );
          })}
        </ul>
      </span>
    </div>
  );
}
export default Banner;
