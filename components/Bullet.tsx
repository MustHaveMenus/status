import {Status} from "../utils/Status";
import {getStatusClass} from "../utils/utils";

export interface BulletProps {
  status: Status;
}

export function Bullet({status}: BulletProps) {
  return <span className={`bullet ${getStatusClass(status)}`} />;
}
