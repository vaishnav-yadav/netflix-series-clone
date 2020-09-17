import React from 'react';

const Card_info =(props)=>{

return(
<>
<div className="card__info">
<span className="card__category">{props.title}</span>
<h3 className="card__title">{props.sname}</h3>
<a href={props.link} target="_blank">
  <button> Watch Now</button>
</a>
</div>
</>
);
};

export default Card_info;