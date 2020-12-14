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

function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek, checkInDate, checkOutDate) {
  let calendar = [];
  let days = [];
  let week = [];


  if (dayOfWeek >= daysInWeek) {
    throw new Error("incorrect date");
  };

  if (dayOfWeek !== 0) {
    for (let i = (daysInMonth - dayOfWeek + 1); i <= daysInMonth; i++) {
      days.push({
        currentDay: i,
        currentMonth: false,
        selectDay: (checkInDate == i || checkOutDate == i),
      });
    };
  };
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      currentDay: i,
      currentMonth: true,
      selectDay: (checkInDate == i || checkOutDate == i),
    });
    if (days.length >= daysInWeek) {
      week = days.splice(0, daysInWeek);
      calendar.push(week);
    };
  };
  if ((days.length < daysInWeek) && days.length !== 0) {
    calendar.push(days);
    for (let i = 1; days.length < daysInWeek; i++) {
      days.push({
        currentDay: i,
        currentMonth: false,
        selectDay: (checkInDate == i || checkOutDate == i),
      });
    };
  };
  return (calendar);
};

console.log(getCalendarMonth(31, 7, 6, 15, 20));

