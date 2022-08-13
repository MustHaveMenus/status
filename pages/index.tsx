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


        <link rel="apple-touch-icon" sizes="57x57" href="https://www.musthavemenus.com/apple-touch-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="https://www.musthavemenus.com/apple-touch-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="https://www.musthavemenus.com/apple-touch-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="https://www.musthavemenus.com/apple-touch-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="https://www.musthavemenus.com/apple-touch-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="https://www.musthavemenus.com/apple-touch-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="https://www.musthavemenus.com/apple-touch-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="https://www.musthavemenus.com/apple-touch-icon-152x152.png"/>

        <link rel="icon" type="image/png" href="https://www.musthavemenus.com/favicon-16x16.png" sizes="16x16"/>
        <link rel="icon" type="image/png" href="https://www.musthavemenus.com/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="https://www.musthavemenus.com/favicon-96x96.png" sizes="96x96"/>
        <link rel="icon" type="image/png" href="https://www.musthavemenus.com/favicon-160x160.png" sizes="160x160"/>

        <meta charSet="utf-8"/>
        <meta name="format-detection" content="telephone=no"/>

        <meta name="p:domain_verify" content="262fab94f91ced8a143efa0ee11f4c95"/>
        <meta name="msapplication-TileColor" content="#2d89ef"/>
        <meta name="msapplication-TileImage" content="https://www.musthavemenus.com/mstile-144x144.png"/>
        <meta name="msapplication-square70x70logo" content="https://www.musthavemenus.com/mstile-70x70.png"/>
        <meta name="msapplication-square150x150logo" content="https://www.musthavemenus.com/mstile-150x150.png"/>
        <meta name="msapplication-wide310x150logo" content="https://www.musthavemenus.com/mstile-310x150.png"/>
        <meta name="msapplication-square310x310logo" content="https://www.musthavemenus.com/mstile-310x310.png"/>
        <meta name="google-site-verification" content="pMEhn-XEJubFZgeKW7wx0eCPUSyoceaTX5PO2grze7o"/>
        <meta name="ahrefs-site-verification" content="3a4d895d5a97a86b9e9b2eac1e4e3d608693f258d26ae7ef3203c059fd677110"/>

        <meta name="description" content="Design eye-catching menus fast with our easy online menu maker and quality menu printing services."/>
        <meta name="keywords" content="menu design, menu maker, menu printing"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
      </Head>

      <main className={"main"}>
        <header>
          <div className={"logo"}>
            <Logo/>
            <label>Status</label>
          </div>
        </header>

        <GeneralNotice showInfo={false} status={Status.Partial} title={"Partial outage"}>
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
          <Service name={"Basic Services"} status={Partial}/>
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
