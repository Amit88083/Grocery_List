const { model } = require('mongoose');
const GroceryModel = require('../models/GroceryModels');

//retrieving the data
module.exports.getGrocery = async (req,res) => {
    const grocery = await GroceryModel.find();
    res.send(grocery);
}

//adding the items
module.exports.saveGrocery = async (req,res) => {

    const {text,quantity,price} = req.body;
    GroceryModel.create({text,quantity,price})
                .then((data)=>{
                    console.log("Added Successfully..");
                    console.log(data);
                    res.send(data);
                })
                    .catch((error) => {
                      console.error("Error adding grocery item:", error);
                   });
   
}


// For Updating
module.exports.updateGrocery = ((req,res)=>{
    const {_id,text,quantity,price} = req.body;
    GroceryModel.findByIdAndUpdate(_id,{text,quantity,price})
    .then(()=>res.send("updated successfully"))
    .catch((err)=>console.log(err));
})

// For Deleting..
module.exports.deleteGrocery = ((req,res)=>{
    const {_id} = req.body;
    GroceryModel.findByIdAndDelete(_id)
    .then(()=>res.send("deleted successfully"))
    .catch((err)=>console.log(err));
})

