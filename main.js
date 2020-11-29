/*1*/
const date = '2020-11-26';
let newDate = date.split("-").reverse().join(".");
console.log(newDate);

/*2*/
const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const findWord = function(str) {
  let newStr = new RegExp(str, 'gi');
  data.forEach(function (i) {
    if (!(i.country.search(newStr)) || !(i.city.search(newStr)) || !(i.hotel.search(newStr))) {
      console.log ("Страна: " + i.country + "\nГород: " + i.city + "\nОтель: " + i.hotel);
    };
  })
}

findWord('Berlin');

