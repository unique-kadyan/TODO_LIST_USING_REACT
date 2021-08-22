import React from "react";
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  console.log({ selectedTab });
  return (
    <div className="sidebar">
      <div id="inbox"
        className={selectedTab === "INBOX" ? "active" : ""}
        onClick={() => setSelectedTab("INBOX")}
      >
        <FaInbox className="icon" />
        Inbox
      </div>
      <br></br>
      
      
      <div id="today"
        className={selectedTab === "TODAY" ? "active" : ""}
        onClick={() => setSelectedTab("TODAY")}
      >
        <FaRegCalendarAlt className="icon" />
        Today
      </div>
      <br></br>
      
      <div id="seven"
        className={selectedTab === "NEXT_7" ? "active" : ""}
        onClick={() => setSelectedTab("NEXT_7")}
      >
        <FaRegCalendar className="icon" />
        Next 7 days
      </div>
      <br></br>
      
      <div id="fifteen"
        className={selectedTab === "NEXT_15" ? "active" : ""}
        onClick={() => setSelectedTab("NEXT_15")}
      >
        <FaRegCalendar className="icon" />
        Next 15 days
      </div>
      <br></br>
      
      <div id="thirty"
        className={selectedTab === "NEXT_30" ? "active" : ""}
        onClick={() => setSelectedTab("NEXT_30")}
      >
        <FaRegCalendar className="icon" />
        Next 30 days
      </div>
      
      <br></br>
      <div id="thirtym"
        className={selectedTab === "NEXT_30m" ? "active" : ""}
        onClick={() => setSelectedTab("NEXT_30m")}
      >
        <FaRegCalendar className="icon" />
        More Than 30 days
      </div>
    </div>
  );
};

export default Sidebar;