import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import SeriesData from './Sdata';
import './index.css';

//-------------------WE have created props here : i.e, through props we can create custom attributes by our own just like we have created custom elements by components. It becomes easier to add new cards now. We just have to change these attributes only.


// ReactDOM.render(
//   <>
//     <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
//           sname="DARK"
//           title="NETFLIX ORIGINALS"
//           link="https://www.netflix.com/in/title/80100172">
//     </Card>
//     <Card imgsrc="https://wallpapercave.com/wp/wp1839578.jpg"
//           sname="Stranger Things"
//           title="NETFLIX ORIGINALS"
//           link="https://www.netflix.com/in/title/80100172">
//     </Card>
//     <Card imgsrc="https://wallpapercave.com/wp/wp3814512.png"
//           sname="Sacred Games"
//           title="NETFLIX ORIGINALS"
//           link="https://www.netflix.com/in/title/80100172">
//     </Card>
//   </>

//    , document.getElementById('root')
// );




// --------------------We have another better to show these cards automatically by array method , map method-----------------

// We will create a file Sdata which will store these cards in an array as objects type 

// Note : components ki styling nahi kar sakte hum , hum iseme koi class wagarah define nahi kar sakte ye invalid hota hai.
  // Halaki hum baaki jsx elements me istemaal kar sakte hai eg : h1 here :-


ReactDOM.render( 
      <>
        <h1 className="PageHeading">List of Top Highest rated Netfilx Series</h1>
        <hr></hr>
        <div className="cards">
         <Card 
          imgsrc={SeriesData[0].imgsrc}
          sname={SeriesData[0].sname}
          title={SeriesData[0].title}
          link={SeriesData[0].link}>
         </Card>
          <Card 
          imgsrc={SeriesData[1].imgsrc}
          sname={SeriesData[1].sname}
          title={SeriesData[1].title}
          link={SeriesData[1].link}>
         </Card>
         <Card 
          imgsrc={SeriesData[3].imgsrc}
          sname={SeriesData[3].sname}
          title={SeriesData[3].title}
          link={SeriesData[3].link}>
         </Card> 
         <Card 
          imgsrc={SeriesData[4].imgsrc}
          sname={SeriesData[4].sname}
          title={SeriesData[4].title}
          link={SeriesData[4].link}>
         </Card> 
         <Card 
          imgsrc={SeriesData[5].imgsrc}
          sname={SeriesData[5].sname}
          title={SeriesData[5].title}
          link={SeriesData[5].link}>
         </Card> 
         <Card 
          imgsrc={SeriesData[2].imgsrc}
          sname={SeriesData[2].sname}
          title={SeriesData[2].title}
          link={SeriesData[2].link}>
         </Card> 
         
        
         </div>
      </>

      , document.getElementById('root')
);






//-------------------map method for auto iteration of all the array objects of SeriesData ----------------


