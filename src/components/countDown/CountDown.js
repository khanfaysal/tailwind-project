import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import loadingSpinner from "../../assets/hostingLoading.gif";

const CountDown = () => {
  const[days, setDays] = useState(10);
  const[hours, setHours] = useState(10);
  const[minutes, setMinutes] = useState(10);
  const[seconds, setSeconds] = useState(10);
  const [isLoading, setIsLoading] = useState(true)

  const countDown = () => {
    const endDate = new Date("November 25, 2021 00:00:00").getTime();
    const today = new Date().getTime();

    const timeDiff = endDate - today;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor((timeDiff / days));
    let timeHours = Math.floor((timeDiff % days) / hours);
    let timeMinutes = Math.floor((timeDiff % hours) / minutes);
    let timeSeconds = Math.floor((timeDiff % minutes) / seconds);

     timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
     timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
     timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

    setDays(timeDays);
    setHours(timeHours);
    setMinutes(timeMinutes);
    setSeconds(timeSeconds);
    setIsLoading(false)

  }
  useEffect(()=> {
    setInterval(countDown, 1000)
  })



    return (
     <>
     {isLoading ? <div
        className="w-full flex justify-center items-center"
        style={{ height: "80vh" }}
      >
        <img src={loadingSpinner} alt="loading spinner" />
      </div> :  <section>
        <div className="text-center w-4/6 m-auto">
          <FontAwesomeIcon icon={faClock} size="4x"color="#ff7675"/>
          <h1 className="cardHeading">Web Hosting + Free Domain</h1>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <h3 className="heading-bold" style={{color:"#ff7675"}}>{days}</h3>
              <p className="font-bold">Days</p>
            </div>
            <div>
              <h3 className="heading-bold" style={{color:"#ff7675"}}>{hours}</h3>
              <p className="font-bold">Hours</p>
            </div>
            <div>
              <h3 className="heading-bold" style={{color:"#ff7675"}}>{minutes}</h3>
              <p className="font-bold">Minutes</p>
            </div>
            <div>
              <h3 className="heading-bold" style={{color:"#ff7675"}}>{seconds}</h3>
              <p className="font-bold">Seconds</p>
            </div>
          </div>
        </div>
  </section>}
     </>
    );
};

export default CountDown;