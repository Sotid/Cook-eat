//Add fields dynamically
function addInput() {
  let counter = 0;
  var divName = document.getElementById(`new-ingredient`);
  var newdiv = document.createElement(`div`);
  newdiv.innerHTML = `<ul>
         <li><label for='name'>Ingredient</label>
         <input type='text' name='ingredientName'>
           <label for='quantity'>Quantity</label>
         <input type='text' name='quantity'>
           <label for='type'>Type</label>
       <select name="type" value="Type:">
         <option value="Cereals and Legumes">Cereals and legumes</option>
         <option value="Condiments">Condiments</option>
         <option value="Dairy">Dairy</option>
         <option value="Drinks">Drinks</option>
         <option value="Fish">Fish</option>
          <option value="Flours">Flours</option>
         <option value="Fruits">Fruits</option>
         <option value="Meat">Meat</option>
         <option value="Rice and Pasta">Rice and Pasta</option>
         <option value="Soups and Creams">Soups and Creams</option>
         <option value="Vegetables">Vegetables</option>
       </select></li>
         <button id="add-more" onclick= "addInput()">Add more</button>
       </ul>`;
  divName.appendChild(newdiv);
  counter++;
}
let button = document.getElementById(`add-more`);
button.addEventListener(`click`, addInput());
