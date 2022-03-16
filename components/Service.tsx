import {Bullet} from "./Bullet";

export interface ServiceProps {
  name: string;
  status: string;
}

export function Service({name, status}: ServiceProps) {
  return <div className={"row"}>
    <span>{name}</span>
    <span><Bullet type={status}/></span>
  </div>;
}
