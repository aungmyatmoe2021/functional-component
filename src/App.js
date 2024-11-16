// Learning from React-လို-တို-ရှင်း - အခန်း(၆) - React Basic
// Follow By 
// Name : Aung Myat Moe
// Date : 16 Nov 2024 (04:45 PM)
// Description :  how to create function to component

import React from "react";
import Item from "./Item";
import AddItem from "./AddItem";

const App = (props) => {
  let [items,setItems] = React.useState([
  ])

  let add = ({name,price}) => {
    let id = items.length + 1;
    
    setItems([
      ...items,
      {id,name,price}
    ])
  }

  return(
    <div>
      <h1>Hello React -- Functional Component</h1>
      <AddItem add={add}/>
      <ul>
        {items.map(i => <Item key={i.id} name={i.name} price={i.price} />)}
      </ul>
    </div>
  )
}

export default App;