function Athlete(name, sport, speed) {

  this.name = name;
  this.sport = sport;
  this.speed = speed;
  this.eat = function(food) {
    var speedWeight = this.speed + food.weight;
    if (speedWeight > 110) {
    console.log("Damn you are fast!");
  }
    else if(speedWeight > 70 && speedWeight < 110){
      console.log("You may want to eay something");
    }
    else {
    console.log("You really need to eat something!");
  }
  this.speed += food.weight
  };

}

function Food(item, weight, effect) {

  this.item = item;
  this.weight = weight;
  this.effect = effect;
  this.cause = function(athlete) {
    var whatDidYouEat = athlete.name +" is "+ this.effect + "!";
    if (this.effect === "Sick") {
      console.log(whatDidYouEat);
    } else if (this.effect === "Healthy") {
      console.log(whatDidYouEat);
    } else if (this.effect === "Full of toxins") {
      console.log(whatDidYouEat);
    }
  };



}

function Shoe(brand, endurance) {

  this.brand = brand;
  this.endurance = endurance;
  this.footwear = function(athlete) {
    var footwearPerformance = this.endurance + athlete.speed;
    if (footwearPerformance > 95){
      console.log("You picked the right footwear!");
    } else {
      console.log("You may want to pick another footwear");
    }


  };

}

var Chris = new Athlete("Chris", "Frisbee", 65);
var Bolt = new Athlete("Bolt", "Running", 95);
var Peterson = new Athlete("Peterson", "Football", 90);
var Athletes = [Chris, Bolt, Peterson];

var IceCream = new Food("IceCream", -40, "Sick");
var Protein = new Food("Protein", 10, "Healthy");
var RedBull = new Food("RedBull", 50, "Full of toxins");

var Nike = new Shoe("Nike", 20);
var Puma = new Shoe("Puma", 30);
var Sandal = new Shoe("Sandal", -15);

$(document).ready(function() {
  page.init();
});

var page = {

  init: function() {
    this.initStyling();
    this.initEvents();
  },
  initStyling: function() {


  },
  initEvents: function() {
    $(".select_athlete").on("click", ".Chris", function() {
      Chris;
      console.log(Chris);
    });

    $(".select_athlete").on("click", ".Peterson", function() {
      Peterson;
      console.log(Peterson);
    });

    $(".select_athlete").on("click", ".Bolt", function() {
      Bolt;
      console.log(Bolt);
    });

    $(".fooditem").on("click", ".RedBullFood", function() {
      Athletes.name.eat(RedBull);
      console.log("Redbull");

  });


  }

}
