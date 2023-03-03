import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import React, { useEffect, useState } from "react";
import {Token} from './config.js';
import Axios from 'axios';
import ms from 'ms';

function Stats() {

  const [shardc, setShardc] = useState(0);
  const [tcommands, setTcommands] = useState(0);
  const [tguilds, setTguilds] = useState(0);
  const [tplayers, setTplayers] = useState(0);
  const [tusers, setTusers] = useState(0);
  const [uptime, setUptime] = useState(0);

  const [isError, setIsError] = useState("")

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    const api = Axios.create({
      baseURL: 'https://api.gatewaybot.xyz/api/',
      headers: { 'Authorization': `Bearer ${Token}` }
    });
     api.get("/get/stats")
      .then(res => {
        setShardc(res.data.shardCount);
        setTcommands(res.data.totalCommands);
        setTguilds(res.data.totalGuilds);
        setTusers(res.data.totalUsers);
        setUptime(res.data.uptime);
        setTplayers(res.data.totalPlayers);
      })
      .catch(err => {
        setIsError(err.message);
        console.log(err);
      })
  }, []);

  function beauty(num) {
    num = num.toString().replace(/[^0-9.]/g, '');
    if (num < 1000) {
      return num;
    }
    let si = [
      { v: 1E3, s: "K" },
      { v: 1E6, s: "M" },
      { v: 1E9, s: "B" },
      { v: 1E12, s: "T" },
      { v: 1E15, s: "P" },
      { v: 1E18, s: "E" }
    ];
    let index;
    for (index = si.length - 1; index > 0; index--) {
      if (num >= si[index].v) {
        break;
      }
    }
    return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
  }


  return (
    <>
      <section className="stats" id="stats">
        {isError !== "" && <h5>{isError}</h5>}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="stats-bx wow zoomIn">
                
                <h2>Stats</h2>

                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme stats-slider">
                {/* <div className="statstruct"> */}
                  <div className="item">
                    <h5>Commands</h5>
                    <span>{beauty(tcommands)}</span>
                  </div>
                  <div className="item">
                    <h5>Servers</h5>
                    <span>{Math.round(tguilds)}</span>

                  </div>
                  
                  <div className="item">
                    <h5>Users</h5>
                    <span>{beauty(Math.round(tusers))}+</span>

                  </div>
                  <div className="item">
                    <h5>Music Players</h5>
                    <span>{tplayers}</span>

                  </div>
                  <div className="item">
                    <h5>Total Shards</h5>
                    <span>{shardc}</span>

                  </div>
                  <div className="item">
                    <h5>Uptime</h5>
                    <span>{ms(uptime)}+</span>

                  {/* </div> */}
                </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background" />
      </section>
    </>
  )
}
export default Stats;