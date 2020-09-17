import React from 'react';
import Images from './Images';
import Card_info from './Card_info';

//To access props :- 
function Card(props) {

  return (
    <>
      <div className="card">
        {/* <img src={props.imgsrc} alt="mypic" className="card-img"></img> */}
        {/* creating component of image */}
        <Images imgsrc={props.imgsrc}></Images>
        <Card_info sname={props.sname} title={props.title} link={props.link}></Card_info>
      </div>
    </>
  );

}

export default Card;

