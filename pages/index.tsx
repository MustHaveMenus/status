import type {NextPage} from 'next'
import Head from 'next/head'
import {Logo} from "../components/Logo";
import {Bullet} from "../components/Bullet";
import {Service} from "../components/Service";
import {GeneralNotice} from "../components/GeneralNotice";
import {Status} from "../utils/Status";
import {useEffect} from "react";
import {initIntercom} from "../services/intercomService";

const {Normal, Information, Partial, Outage} = Status;

const Home: NextPage = () => {

  useEffect(() => {
    initIntercom();
  }, [])

  return (
    <div className={"container"}>
      <Head>
        <title>MustHaveMenus - Status</title>
        <link rel="icon" type="image/png" href="https://www.musthavemenus.com//favicon-16x16.png" sizes="16x16"/>
        <link rel="icon" type="image/png" href="https://www.musthavemenus.com//favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="https://www.musthavemenus.com//favicon-96x96.png" sizes="96x96"/>
        <link rel="icon" type="image/png" href="https://www.musthavemenus.com//favicon-160x160.png" sizes="160x160"/>

        <meta name="description" content="Design eye-catching menus fast with our easy online menu maker and quality menu printing services."/>
        <meta name="keywords" content="menu design, menu maker, menu printing"/>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <main className={"main"}>
        <header>
          <div className={"logo"}>
            <Logo/>
            <label>Status</label>
          </div>
        </header>

        <GeneralNotice showInfo={false} status={Status.Normal} title={"All systems running"}>
          This is some info. Make sure the showInfo property is set to true to display this.
        </GeneralNotice>

        <section className={"agenda"}>
          <h3>Current Status</h3>
          <ul>
            <li><Bullet status={Normal}/><label>Normal</label></li>
            <li><Bullet status={Information}/><label>Info</label></li>
            <li><Bullet status={Partial}/><label>Partial Outage</label></li>
            <li><Bullet status={Outage}/><label>Outage</label></li>
          </ul>
        </section>

        <div className={"table"}>
          <div className={"row h"}>
            <span>Service</span>
            <span>Status</span>
          </div>
          <Service name={"Basic Services"} status={Normal}/>
          <Service name={"Design Editor"} status={Normal}/>
          <Service name={"Link Pages"} status={Normal}/>
          <Service name={"Online Menus"} status={Normal}/>
          <Service name={"QR Codes"} status={Normal}/>
        </div>
      </main>

    </div>
  )
}

export default Home
