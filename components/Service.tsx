import {Bullet} from "./Bullet";
import {Status} from "../utils/Status";

export interface ServiceProps {
  name: string;
  status: Status;
}

export function Service({name, status}: ServiceProps) {
  return <div className={"row"}>
    <span>{name}</span>
    <span><Bullet status={status}/></span>
  </div>;
}
