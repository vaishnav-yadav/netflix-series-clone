import React from 'react';
import Card from './Card';
import SeriesData from './Sdata';



const App = ()=>{


return (
<>

<div className="PageHeading">
<h1 className="heading">List of Top Highest rated Netfilx Series</h1>
<img src={process.env.PUBLIC_URL + '/logo.png' } className="logoImg" />
</div>
<hr className="hr"></hr>
<div className="cards">
  { SeriesData.map(function ncard(val) {
     return (
      <Card 
      key={val.id}
      imgsrc={val.imgsrc}
      sname={val.sname}
      title={val.title}
      link={val.link}>
     </Card>
     )
     
   })}

 </div>
 
 </>);
}

export default App;