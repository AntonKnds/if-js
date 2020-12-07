// /*1*/
// const date = '2020-11-26';
// let newDate = date.split("-").reverse().join(".");
// console.log(newDate);
//
// /*2*/
// const data = [
//   {
//     country: 'Russia',
//     city: 'Saint Petersburg',
//     hotel: 'Hotel Leopold',
//   },
//   {
//     country: 'Spain',
//     city: 'Santa Cruz de Tenerife',
//     hotel: 'Apartment Sunshine',
//   },
//   {
//     country: 'Slowakia',
//     city: 'Vysokie Tatry',
//     hotel: 'Villa Kunerad',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hostel Friendship',
//   },
//   {
//     country: 'Indonesia',
//     city: 'Bali',
//     hotel: 'Ubud Bali Resort&SPA',
//   },
//   {
//     country: 'Netherlands',
//     city: 'Rotterdam',
//     hotel: 'King Kong Hostel',
//   },
//   {
//     country: 'Marocco',
//     city: 'Ourika',
//     hotel: 'Rokoko Hotel',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hotel Rehberge Berlin Mitte',
//   },
// ];
//
// const findWord = function(str) {
//   let newStr = new RegExp(str, 'ig');
//   data.forEach(function (i) {
//     if (newStr.test(i["country"]) || (newStr.test(i["city"])) || (newStr.test(i["hotel"]))) {
//       console.log ("Страна: " + i["country"] + "\nГород: " + i["city"] + "\nОтель: " + i["hotel"]);
//     }
//   });
// }
// findWord('ri');

function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek) {
  let calendar = [];
  let days = [];
  if (dayOfWeek != 0) {
    for (let i = (daysInMonth - dayOfWeek+2); i <= daysInMonth; i++) {
      days.push(i);
    }
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  for (let j = 0; j < (daysInMonth / daysInWeek); j++) {
    calendar.push(days.splice(0,daysInWeek));
    let currentWeek = calendar[j];
      for (let i = 1; currentWeek.length < daysInWeek; i++) {
        currentWeek.push(i);
    }
  }
console.log(calendar);
}
getCalendarMonth(30,7, 6);

