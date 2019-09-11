const facadeObject = require('../facade/facadeBl');
let travel1 = new facadeObject.TravelFacade('Flight_And_Hotel');
console.log(travel1.book(hotel));