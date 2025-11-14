import React from "react";

const AppDownloadSidebar = () => {
  // Inline styles
  const sidebarStyle: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    right: 0,
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 1050,
  };

  const imgStyle: React.CSSProperties = {
    height: "56px",
    width: "auto",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  };

  const imgHover = (e: React.MouseEvent<HTMLImageElement>) => {
    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.1)";
  };

  const imgHoverOut = (e: React.MouseEvent<HTMLImageElement>) => {
    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
  };

  return (
    <div style={sidebarStyle}>
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
