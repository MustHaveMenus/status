import {Status} from "./Status";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

export function getDate(): string {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = today.getMonth();
  let yyyy = today.getFullYear();

  return MONTHS[mm]  + ' ' + dd + ', ' + yyyy;
}

export function getStatusClass(status: Status): string {
  if (status === Status.Information) return "blue";
  if (status === Status.Partial) return "yellow";
  if (status === Status.Outage) return "red";
  return "green";
}
