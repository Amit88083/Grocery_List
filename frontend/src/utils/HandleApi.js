import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllGrocery = (setListGrocery) => {
    axios
        .get(baseUrl)
        .then(( {data} ) => {
            console.log("data-->>>",data);
    
            setListGrocery(data)
        })
}


const addGrocery = (textTrimmed,quantity,price,setListGrocery,setInputText,setInputQuantity,setInputPrice,ListGrocery) => {

    const numericQuantity = Number(quantity);
    const numericPrice = Number(price);
    const text = textTrimmed.trim();

    console.log("--->>>>>>>",ListGrocery);

    const isDuplicateText = ListGrocery.some((grocery) => grocery.text.toLowerCase() === text.toLowerCase());
    if (isDuplicateText) {
        alert('A grocery with the same name already exists.');
        return;
    }

    if(text === ""){
        alert('please enter the item name.')
        return;
    }
  
    if (isNaN(numericQuantity) || isNaN(numericPrice) || numericQuantity < 0 || numericPrice < 0) {
      alert('Please enter valid non-negative values for quantity and price.');
      return;
    }

    // if()

    axios
        .post(`${baseUrl}/save`, { text,quantity,price})
        .then((data) => {
            console.log("--->>>>","hhhh");
            setInputText("");
            setInputQuantity("");
            setInputPrice("");
            getAllGrocery(setListGrocery)
        })
        .catch((err) => {
            console.log("--->>>>","hhhh1");
            alert("Something wrong")
        })

}

const updateGrocery = (id,textTrimmed,setListGrocery,setIsUpdating,quantity,price,setInputText,setInputPrice,setInputQuantity)=>{

    const numericQuantity = Number(quantity);
    const numericPrice = Number(price);
    const text = textTrimmed.trim();

    if(text == ""){
        alert('please enter the item name.')
        return;
    }
  
    if (isNaN(numericQuantity) || isNaN(numericPrice) || numericQuantity < 0 || numericPrice < 0) {
      alert('Please enter valid non-negative values for quantity and price.');
      return;
    }
    axios
        .post(`${baseUrl}/update`, { _id:id,text,quantity,price})
        .then((data) => {
            console.log("data value --.>>>>",id);
            setInputText("");
            setInputPrice("");
            setInputQuantity("");
            getAllGrocery(setListGrocery)
            setIsUpdating(false)
            
        })
        .catch((err) => console.log(err))

}

const deleteList = (_id,setListGrocery)=>{

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            getAllGrocery(setListGrocery)
        })
        .catch((err) => console.log(err))

}

export { getAllGrocery, addGrocery, updateGrocery,deleteList}