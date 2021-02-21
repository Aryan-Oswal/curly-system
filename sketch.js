var gameState = 0;

var form, addFood , removeFood ,database;
var dataFood;
var distance = 0;
var dataTime;
function setup(){
  
  canvas = createCanvas(600 ,600);
  database = firebase.database();
  
  form = new Food(1)
  addFood = createButton('Add Food')
  removeFood = createButton('Remove Food');
  
}
function draw() {
  background("white")
  var date = new Date()
  var hours = date.getHours()
  database.ref('/').on("value" , (value) => {
    dataFood = (value.val().food_count)
    dataTime = (value.val().lastFed)
  })

  console.log(dataTime)
  console.log(hours)


  form.display();
  addFood.position(300 ,300);
  removeFood.position(300 , 330);
  addFood.mousePressed(() => {
    
    form.foodStock = form.foodStock + 1;
    console.log(form.foodStock)
    database.ref('/').set(
      {
        food_count: form.foodStock,
        lastFed: date.toLocaleString()
      }
    )
  })

  text("You fed you pet on " + dataTime + " hours ago" , 300 , 20)


  removeFood.mousePressed(() => {
    if(form.foodStock > 0){
    form.foodStock = form.foodStock - 1
    clear();
    }else {
      alert("There is no food! Don't remove more 😂")
    }
  })

  

}

