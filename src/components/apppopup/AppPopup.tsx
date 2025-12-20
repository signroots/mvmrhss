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
  background: "#f9fafb",
  width: "420px",
  maxWidth: "92%",
  padding: "26px",
  borderRadius: "16px",
  position: "relative",
  textAlign: "center",
  boxShadow: "0 18px 45px rgba(0,0,0,0.25)",
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

const title = (isMobile: boolean): React.CSSProperties => ({
  fontSize: isMobile ? "20px" : "24px",
  fontWeight: 600,
  marginBottom: "16px",
});

const list: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "12px",
  listStyle: "none",
  padding: 0,
  fontSize: "14px",
  marginBottom: "22px",
};

const listItem: React.CSSProperties = {
  background: "#ffffff",
  padding: "10px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
};

const downloadBox: React.CSSProperties = {
  borderTop: "1px solid #e5e7eb",
  paddingTop: "16px",
};

const storeRow: React.CSSProperties = {
  display: "flex",
  gap: "12px",
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

        <h2 style={title(isMobile)}>School App Features</h2>

        <ul style={list}>
          <li style={listItem}>Track Vehicle</li>
          <li style={listItem}>Students Attendance</li>
          <li style={listItem}>Mark List</li>
          <li style={listItem}>Parent&apos;s Enquiry</li>
          <li style={listItem}>Study Materials</li>
          <li style={listItem}>Leave Letter</li>
          <li style={listItem}>Meetings</li>
          <li style={listItem}>Activity Gallery</li>
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
