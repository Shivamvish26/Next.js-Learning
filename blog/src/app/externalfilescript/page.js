"use client";
import Script from "next/script";
import React from "react";

export default function ExternalFileScriptPage() {
    return (
        <div>
            <h1>External File Script Page</h1>
            <p>This page demonstrates loading an external script file.</p>

            <Script
                src="../../app/geolocation.js"
                onLoad={() => {
                    console.log("External script loaded successfully.");
                }}
            />
        </div>
    )
}