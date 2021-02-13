// creates new row to add another ingredient 
function addInput(divName){
let counter = 1;
let limit = 20;
const add = ((divName) =>{
     if (counter == limit)  {
          alert("You have reached the limit of ingredients");
     }
     else {
          let newdiv = document.createElement('div');
          newDiv = divName;
          newdiv.innerHTML = "";
          document.getElementById("new-ingredient").appendChild(newdiv);
          counter++;
     }
})
}

module.exports = addInput