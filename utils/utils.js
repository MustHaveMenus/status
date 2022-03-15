const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

export function getDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = today.getMonth();
  let yyyy = today.getFullYear();

  today = dd + ' ' + MONTHS[mm] + ' ' + yyyy;
  return today;
}
