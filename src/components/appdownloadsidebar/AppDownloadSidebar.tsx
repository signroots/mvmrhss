"use client";
import React, { useState, useEffect } from "react";

const AppDownloadSidebar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // SAME WIDTH for box + images
  const itemWidth = isMobile ? "120px" : "160px";

  const sidebarStyle: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    right: 0,
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "10px",
    zIndex: 1050,
  };

  const boxStyle: React.CSSProperties = {
  backgroundColor: "black",
  color: "white",
  width: itemWidth,
  padding: isMobile ? "6px 10px" : "10px 14px",
  borderRadius: "6px",
  fontSize: isMobile ? "12px" : "12px",
  fontWeight: 600,
  textAlign: "center",
  whiteSpace: "nowrap", 
};

  const imgStyle: React.CSSProperties = {
    width: itemWidth,
    height: "auto",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  };

  const imgHover = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = "scale(1.08)";
  };

  const imgHoverOut = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div style={sidebarStyle}>
      {/* SAME WIDTH BOX */}
      <div style={boxStyle}>Download School App</div>

      {/* Play Store */}
      <a
        href="https://play.google.com/store/apps/details?id=info.passdaily_new.mvmrhss&pli=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/img/playstoreicon.png"
          alt="Get it on Google Play"
          style={imgStyle}
          onMouseEnter={imgHover}
          onMouseLeave={imgHoverOut}
        />
      </a>

      {/* App Store */}
      <a
        href="https://apps.apple.com/us/app/mvmr-higher-secondary-school/id6747276941"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/img/appstoreicon.png"
          alt="Download on the App Store"
          style={imgStyle}
          onMouseEnter={imgHover}
          onMouseLeave={imgHoverOut}
        />
      </a>
    </div>
  );
};

export default AppDownloadSidebar;
