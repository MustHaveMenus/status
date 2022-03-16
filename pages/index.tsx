import type {NextPage} from 'next'
import Head from 'next/head'
import {Logo} from "../components/Logo";
import {getDate} from "../utils/utils";
import {Bullet} from "../components/Bullet";
import {Service} from "../components/Service";

const Home: NextPage = () => {


  return (
    <div className={"container"}>
      <Head>
        <title>MustHaveMenus - Status</title>
        <link rel="icon" type="image/png" href="https://www.musthavemenus.com//favicon-16x16.png" sizes="16x16"/>
        <link rel="icon" type="image/png" href="https://www.musthavemenus.com//favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="https://www.musthavemenus.com//favicon-96x96.png" sizes="96x96"/>
        <link rel="icon" type="image/png" href="https://www.musthavemenus.com//favicon-160x160.png" sizes="160x160"/>
      </Head>

      <main className={"main"}>
        <header>
          <div className={"logo"}>
            <Logo/>
            <label>Status</label>
          </div>
        </header>

        <section className={"general"}>
          <h3>All Systems are Operational</h3>
          <label>Last checked on {getDate()}</label>
        </section>

        <section className={"agenda"}>
          <h3>Current Status</h3>
          <ul>
            <li><Bullet type={"green"}/><label>Normal</label></li>
            <li><Bullet type={"blue"}/><label>Information</label></li>
            <li><Bullet type={"yellow"}/><label>Partial Outage</label></li>
            <li><Bullet type={"red"}/><label>Outage</label></li>
          </ul>
        </section>

        <div className={"table"}>
          <div className={"row h"}>
            <span>Service</span>
            <span>Status</span>
          </div>
          <Service name={"Basic Services"} status={"green"}/>
          <Service name={"Design Editor"} status={"green"}/>
          <Service name={"Link Pages"} status={"green"}/>
          <Service name={"Online Menus"} status={"green"}/>
          <Service name={"QR Codes"} status={"green"}/>
        </div>
      </main>

    </div>
  )
}

export default Home
