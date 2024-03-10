import { useEffect, useState } from "react"


export default function DigitalClock() {

    const [time, setTime] = useState(new Date().getTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date);
        }, 1000);

        // cleanup function for when the component unmounts
        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridian = hours < 12 ? "AM" : "PM";

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <>
            <h1>{formatTime()}</h1>
        </>
    )
}