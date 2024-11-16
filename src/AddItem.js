import React from "react";

const AddItem = ({add}) => {
    let nameRef = React.createRef();
    let priceRef= React.createRef();

    let addItems = () => {
        let name = nameRef.current.value;
        let price = priceRef.current.value;
        
        if (name != "" && price != ""){
            add({name,price});
        }else{
            return;
        }

        nameRef.current.value = "";
        priceRef.current.value = "";
    }

    return(
        <div>
            <h2>Add Fruit name & price</h2>
            Name    : <input type="text" ref={nameRef} />
            Price   : <input type="text" ref={priceRef} />
            <button onClick={addItems}>Add Item</button>
        </div>
    );
}

export default AddItem;