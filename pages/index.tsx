import type { NextPage } from 'next'
import Head from 'next/head'
import {Logo} from "../components/Logo";
import {getDate} from "../utils/utils";
import {Bullet} from "../components/Bullet";

const Home: NextPage = () => {


  return (
    <div className={"container"}>
      <Head>
        <title>MustHaveMenus - Status</title>
        <link rel="icon" type="image/png" href="https://www.musthavemenus.com//favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="https://www.musthavemenus.com//favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="https://www.musthavemenus.com//favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="https://www.musthavemenus.com//favicon-160x160.png" sizes="160x160" />
      </Head>

      <main className={"main"}>
        <header>
          <Logo /> Status
        </header>

        <section>
          <h3>All Systems are Operational</h3>
          <label>Last checked on {getDate()}</label>
        </section>

        <section>
          <h2>Current Status</h2>

          <ul>
            <li><Bullet type={"green"} /> Normal Operations</li>
            <li><Bullet type={"yellow"} /> Partial Outage</li>
            <li><Bullet type={"blue"} /> Information</li>
            <li><Bullet type={"red"} /> Outage</li>
          </ul>

          <div className={"table"}>
            <div className={"row"}>
              <span>Service</span>
              <span>Status</span>
            </div>
            <div className={"row"}>
              <span>Main App</span>
              <span><Bullet type={"green"} /></span>
            </div>
            <div className={"row"}>
              <span>Design Editor</span>
              <span><Bullet type={"green"} /></span>
            </div>
            <div className={"row"}>
              <span>Link Pages</span>
              <span><Bullet type={"green"} /></span>
            </div>
            <div className={"row"}>
              <span>Online Menus</span>
              <span><Bullet type={"green"} /></span>
            </div>
            <div className={"row"}>
              <span>QR Codes</span>
              <span><Bullet type={"green"} /></span>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default Home
