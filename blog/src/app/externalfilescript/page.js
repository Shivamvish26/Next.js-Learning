"use client";
import React, { useState, useEffect } from "react";

export default function ExternalFileScriptPage() {
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Geolocation is not supported by this browser.");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(
            `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`
          );
        },
        () => {
          setLocation("Sorry, no position available.");
        }
      );
    }
  }, []);

  return (
    <div>
      <h1>External File Script Page</h1>
      <p>This page demonstrates loading an external script file.</p>
      <p>{location}</p>
    </div>
  );
}
