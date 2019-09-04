/** 
* @purpose : JSON Inventory Data Management of Rice, Pulses and Wheats
* @description :Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties name, weight, price per kg. 
* @since : 09/03/2019
* @author : sahil jindal
*/
const fs= require('fs');
fs.readFile('./inventory.json','utf8',(err,jsonString)=>{
    if (err) {
        console.log("File read failed:", err)
        return
    }
    console.log('File data:', jsonString);

 var inventoryObj=JSON.parse(jsonString);
 console.log(inventoryObj)
 var i=0;
 for (i=0;i<inventoryObj.inventory_details.length;i++){
     var val=inventoryObj.inventory_details[i].weight_in_kg*inventoryObj.inventory_details[i].price_per_kg
  
     console.log("Value of "+inventoryObj.inventory_details[i].product_name+" is "+ val+" rupees.")
     }
    })
