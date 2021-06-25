export function getWeekAmount(month: number, year: number): number {
  var firstOfTheMonth = new Date(year, month - 1, 1);
  var lastOfTheMonth = new Date(year, month, 0);

  var used = firstOfTheMonth.getDay() + lastOfTheMonth.getDate();

  return Math.ceil(used / 7);
}
