function TravelFacade(reservationType) {
    this.reservationType = reservationType;

    this.flight = new FlightBooker();
    this.hotel = new HotelBooker();
    this.train = new TrainBooker();
}

TravelFacade.prototype.book = function (reservationInfo) {
    switch (this.reservationType) {
        case 'Flight':
            // book flight;
            this.flight.book(reservationInfo);
            break;
        case 'Hotel':
            // book hotel;
            this.hotel.book(reservationInfo);
            break;
        case 'Train':
            // book Train;
            this.train.book(reservationInfo);
            break;
        case 'Flight_And_Hotel':
            // book Flight and Hotel
            this.flight.book(reservationInfo);
            this.hotel.book(reservationInfo);
            break;
        case 'Train_And_Hotel':
            // book Train and Hotel
            this.train.book(reservationInfo);
            this.hotel.book(reservationInfo);
            break;
        default:
            // throw an error
            throw Error('Reservation type is not supported.');
    }
}

function FlightBooker() {
    function book(bookingInfo) {
        // handle booking flight
        console.log(bookingInfo.flight);
    }

    // revealing module pattern
    return {
        book: book
    }
}

function TrainBooker() {
    function book(bookingInfo) {
        // handle train booking
        console.log(bookingInfo.train);
    }

    // revealing module pattern
    return {
        book: book
    }
}

function HotelBooker() {
    function book(bookingInfo) {
        // handle hotel booking
        console.log(bookingInfo.hotel);
    }

    // revealing module pattern
    return {
        book: book
    }
}

let flight = {
    'departure_datetime': '21/09/2017 09:00',
    'return_datetime': '25/09/2017 22:00',
    'from': 'New York',
    'to': 'London'
};

let train = {
    'departure_datetime': '22/09/2017 20:00',
    'return_datetime': '25/09/2017 10:00',
    'from': 'London',
    'to': 'Edinburgh'
};

let hotel = {
    'check_in_date': '22/09/2017',
    'nights': 1,
    'city': 'London',
    'hotel_name': 'Four Seasons Hotel'
};
module.exports = {TravelFacade ,  hotel , train , flight , HotelBooker , TrainBooker , FlightBooker }

/** let travel1 = new TravelFacade('Flight_And_Hotel');
travel1.book({flight, hotel});

hotel = {
    'check_in_date': '22/09/2017 20:00',
    'nights': 3,
    'city': 'Edinbrugh',
    'hotel_name': 'The Balmoral'
};

let travel2 = new TravelFacade('Train_And_Hotel');
console.log(travel2.book({train, hotel}));
*/