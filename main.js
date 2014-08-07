var randath = Athletes;
var speedWeight;

function Athlete(name, sport, speed, distance) {

  this.name = name;
  this.sport = sport;
  this.speed = speed;
  this.distance = distance;
  this.eat = function(food) {
    var speedWeight = this.speed + food.weight;
    if (speedWeight > 110) {
    $(".footer").text("WOW!! You are going to set a record.");
  }
    else if(speedWeight > 70 && speedWeight < 110){
      $(".footer").text("It looks like you need a little bit of practice.");
    }
    else {
    $(".footer").text("Maybe working out is not your thing.");
  }
  this.speed += food.weight
  };

  this.footwear = function(shoe) {
    var speedFoot = this.distance + shoe.endurance;
    if (speedFoot > 8){
      $(".footer2").text("Run forest run!");
    } else if (speedFoot <= 8 && speedFoot > 4) {
      $(".footer2").text("Run forest!");
    } else { $(".footer2").text("Run!");
    this.distance += shoe.endurance;
    };
  }

}

function Food(item, weight, effect) {

  this.item = item;
  this.weight = weight;
  this.effect = effect;
  // this.cause = function(athlete) {
  //   var whatDidYouEat = athlete.name +" is "+ this.effect + "!";
  //   if (this.effect === "Sick") {
  //     console.log(whatDidYouEat);
  //   } else if (this.effect === "Healthy") {
  //     console.log(whatDidYouEat);
  //   } else if (this.effect === "Full of toxins") {
  //     console.log(whatDidYouEat);
  //   }
  // };



}

function Shoe(brand, endurance) {

  this.brand = brand;
  this.endurance = endurance;
  // this.footwear = function(athlete) {
  //   var footwearPerformance = this.endurance + athlete.speed;
  //   if (footwearPerformance > 95){
  //     console.log("You picked the right footwear!");
  //   } else {
  //     console.log("You may want to pick another footwear");
  //   }
  //
  //
  //
  // };

}

var Chris = new Athlete("Chris", "Frisbee", 65, 5);
var Bolt = new Athlete("Bolt", "Running", 95, 2);
var Peterson = new Athlete("Peterson", "Football", 90, 10);
var Athletes = [Chris, Bolt, Peterson];

var IceCream = new Food("IceCream", -40, "Sick");
var Protein = new Food("Protein", 10, "Healthy");
var RedBull = new Food("RedBull", 50, "Full of toxins");

var Nike = new Shoe("Nike", 3);
var Puma = new Shoe("Puma", 5);
var Sandal = new Shoe("Sandal", -3);

var Athletes = [Chris, Bolt, Peterson];
var Foods = [IceCream, Protein, RedBull];
var Shoes = [Nike, Puma, Sandal]

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
    $(".select_athlete").on("click", "#Chris", function() {
      Chris;
      console.log(Chris);
    });

    $(".select_athlete").on("click", "#Peterson", function() {
      Peterson;
      console.log(Peterson);
    });

    $(".select_athlete").on("click", "#Bolt", function() {
      Bolt;
      console.log(Bolt);
    });

    $(".fooditem").on("click", ".RedBullFood", function() {
      Chris.eat(RedBull);
      console.log("Redbull");

  });
    $(".fooditem").on("click", ".IceCreamFood", function() {
    Chris.eat(IceCream);
    console.log("IceCream");

});
    $(".fooditem").on("click", ".ProteinFood", function() {
      Chris.eat(Protein);
      console.log("Protein");

  });
  $(".athletefootwear").on("click", ".NikeShoe", function (){
    Chris.footwear(Nike);
    console.log("You picked Nike");
  });
  $(".athletefootwear").on("click", ".PumaShoe", function (){
    Chris.footwear(Puma);
    console.log("You picked Puma");
  });
  $(".athletefootwear").on("click", ".SandalShoe", function (){
    Chris.footwear(Sandal);
    console.log("You picked a pair of sandals");
});

  }

}
