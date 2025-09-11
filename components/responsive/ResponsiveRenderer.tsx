"use client";

import React, { useEffect, useState } from "react";
import DesktopView from "@/components/responsive/DesktopView";
import MobileView from "@/components/responsive/MobileView";
import TabletView from "@/components/responsive/TabletView";

const ResponsiveRenderer = () => {
  const [screenType, setScreenType] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenType("mobile");
      } else if (width < 1024) {
        setScreenType("tablet");
      } else {
        setScreenType("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerHeight = {
    desktop: "50vh",
    tablet: "120vh",
    mobile: "120vh",
  }[screenType];

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: containerHeight,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {screenType === "desktop" && <DesktopView />}
        {screenType === "tablet" && <TabletView />}
        {screenType === "mobile" && <MobileView />}
      </div>
    </>
  );
};

export default ResponsiveRenderer;
