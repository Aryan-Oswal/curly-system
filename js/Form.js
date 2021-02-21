// class Form {
//   constructor() {
//     this.input = createInput('')
//     this.button = createButton('Play')
//     this.reset = createButton('reset')

//     this.greeting = createElement('h2')
    
//   }

//   hide() {
//     this.greeting.hide()
//     this.button.hide()
//     this.input.hide()
//   }


//   display(){
//     var title = createElement('h2')
//     title.html("Car Racing Game");
//     title.position(130, 0);
    
    
//     this.input.position(displayWidth /2  - 40 , displayHeight / 2 - 80);
//     this.button.position(displayWidth / 2 + 30 ,displayHeight / 2 );
//     this.reset.position(displayWidth-100,20)
//     this.button.mousePressed(() => {
//     this.button.hide()
      
//     this.input.hide()
//       player.name = this.input.value()
      
//       playerCount += 1;
//       player.index = playerCount
//       console.log(playerCount)
//       player.update()
//       player.updateCount(playerCount);
//       this.greeting.html('hello' + player.name)
//       this.greeting.position(displayWidth /2  - 70, displayHeight / 2- 4)
    
      
//     });
//     this.reset.mousePressed (() => {
//       player.updateCount(0)
//       game.update(0)
//     })
//   }
// }



class Food {
  constructor(foodCount) {
    this.foodStock = foodCount;
    this.image = loadImage('/Milk.png')

  }


  display() {
    var x = 80 , y = 100;

    imageMode(CENTER)
    // image(this.image , x , y, 50, 50);

    if(this.foodStock!=0) {
      for(var i = 0 ;i < this.foodStock ; i++) {
        if(i % 10 === 0 ) {
          x = 80;
          y = y + 50;
        if(y > 600){
          y = 0
          x = x + 20
        }
        }
        y = y + 50;
        x = x+ 20;
        

        image(this.image , x, y , 50 , 50)
      }
    }
  }
}