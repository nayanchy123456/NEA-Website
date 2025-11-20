import React, { useEffect, useState } from "react";
import "./header.css";
import DateConverter from "@remotemerge/nepali-date-converter";

export default function Header() {
  const [englishDate, setEnglishDate] = useState("");
  const [nepaliDate, setNepaliDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const nepaliMonths = [
      "बैशाख",
      "जेठ",
      "आषाढ",
      "श्रावण",
      "भदौँ",
      "असोज",
      "कार्तिक",
      "मंसिर",
      "पौष",
      "माघ",
      "फाल्गुण",
      "चैत्र",
    ];

    const getOrdinal = (n) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const updateDateTime = () => {
      const now = new Date();

      // English date
      const day = now.toLocaleString("en-US", { weekday: "long" });
      const dayOfMonth = now.getDate();
      const month = now.toLocaleString("en-US", { month: "long" });
      const year = now.getFullYear();
      setEnglishDate(
        `${day}, ${dayOfMonth}${getOrdinal(dayOfMonth)} ${month} ${year}`
      );

      // Nepali date
      const isoString = now.toISOString().split("T")[0]; // YYYY-MM-DD
      const bs = new DateConverter(isoString).toBs(); // { year, month, date, day }
      const nepaliFormatted = `${nepaliMonths[bs.month - 1]} ${bs.date}, ${
        bs.year
      }, ${bs.day}`;
      setNepaliDate(nepaliFormatted);

      // Time in 12-hour format
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 => 12
      setTime(`${hours}:${minutes}:${seconds} ${ampm}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="nea-header">
      <div className="nea-header-left">
        <img
          src="/logo.png"
          alt="Nepal Electricity Authority Logo"
          className="nea-header-logo"
        />
      </div>

      <div className="nea-header-right">
        <div className="date-info">
          <p className="date-english">{englishDate}</p>
          <p className="date-nepali">{nepaliDate}</p>
          <p className="date-time">{time}</p>
        </div>
        <img
          src="/nepal_flag.gif"
          alt="Nepal Flag"
          className="nea-header-flag"
        />
      </div>
    </header>
  );
}
