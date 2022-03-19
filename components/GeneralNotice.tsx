import {getDate, getStatusClass, getTime} from "../utils/utils";
import {Status} from "../utils/Status";

export interface GeneralNoticeProps {
  status: Status;
  title: string;
  showInfo: boolean;
  children: JSX.Element | string | never[];
}

export function GeneralNotice({status, showInfo, title, children}: GeneralNoticeProps) {
  return <section className={`general ${getStatusClass(status)}`}>
    <header>
      <h3>{title}</h3>
      <label>Last checked on {getDate()} at {getTime()}</label>
    </header>
    {showInfo && children && <p>{children}</p>}
  </section>
}
