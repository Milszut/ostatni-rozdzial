import { useEffect, useState } from "react";

const CONFERENCE_DATE = new Date("2026-02-20T16:00:00");

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = CONFERENCE_DATE.getTime() - now;

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <div
      className="flex flex-nowrap items-center justify-center h-[52px] sm:h-[68px] lg:h-20 gap-1.5 sm:gap-3 lg:gap-4 text-center">
      <TimeBox label="dni" value={timeLeft.days} />
      <TimeBox label="godzin" value={timeLeft.hours} />
      <TimeBox label="minut" value={timeLeft.minutes} />
      <TimeBox label="sekund" value={timeLeft.seconds} />
    </div>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center bg-black/45 backdrop-blur-l px-1 py-1 sm:px-1 sm:py-2 lg:px-4 lg:py-3 rounded-xl min-w-[60px] sm:min-w-[80px]">
      <span className="font-opensans font-bold text-[#ffe2d1] opacity-75 text-xl md:text-2xl lg:text-3xl">
        {String(value).padStart(2, "0")}
      </span>
      <span
        className="text-[9px] md:text-xs uppercase tracking-wide text-neutral-400">
        {label}
      </span>
    </div>
  );
}