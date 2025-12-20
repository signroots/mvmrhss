"use client";
import React, { useEffect, useState } from "react";

/* ---------- STYLES ---------- */
const overlay: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2000,
};

const popup: React.CSSProperties = {
  background: "#fff",
  width: "380px",
  maxWidth: "92%",
  padding: "22px",
  borderRadius: "12px",
  position: "relative",
  textAlign: "center",
};

const closeBtn: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "12px",
  background: "transparent",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
};

const list: React.CSSProperties = {
  listStyle: "disc",
  paddingLeft: "20px",
  textAlign: "left",
  fontSize: "14px",
  marginBottom: "18px",
};

const downloadBox: React.CSSProperties = {
  borderTop: "1px solid #eee",
  paddingTop: "12px",
};

const label: React.CSSProperties = {
  background: "#000",
  color: "#fff",
  padding: "6px 12px",
  fontSize: "12px",
  fontWeight: 600,
  borderRadius: "5px",
  display: "inline-block",
  marginBottom: "10px",
};

const storeRow: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  flexWrap: "wrap",
};
/* ---------- STYLES END ---------- */

const AppPopup = () => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setShow(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!show) return null;

  const itemWidth = isMobile ? "130px" : "160px";

  return (
    <div style={overlay}>
      <div style={popup}>
        <button style={closeBtn} onClick={() => setShow(false)}>
          ✕
        </button>
      <h2 style={{ marginBottom: "12px", fontSize: "25px" }}>
        School App Features
      </h2>



        <ul style={list}>
          <li>Track Vehicle</li>
          <li>Students Attendance</li>
          <li>Mark List</li>
          <li>Parent's Enquiry</li>
          <li>Study Materials</li>
          <li>Leave Letter</li>
          <li>Meetings</li>
          <li>Activity Gallery</li>
        </ul>

        <div style={downloadBox}>
         

          <div style={storeRow}>
            <a
              href="https://play.google.com/store/apps/details?id=info.passdaily_new.mvmrhss&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/playstoreicon.png"
                alt="Google Play"
                style={{ width: itemWidth }}
              />
            </a>

            <a
              href="https://apps.apple.com/us/app/mvmr-higher-secondary-school/id6747276941"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/appstoreicon.png"
                alt="App Store"
                style={{ width: itemWidth }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPopup;
