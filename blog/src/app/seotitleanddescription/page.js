// SEO PAGE TITLE AND DESCRIPTION

import React from "react";

export default function SeoTitleAndDescriptionPage() {
  return (
    <div>
      <h1>SEO Page and Title</h1>
      <p>This is the SEO page and title description example.</p>
    </div>
  );
}

// for setting metadata for all the pages in the folder
export function generateMetadata() {
  return {
    title: "SEO Page and Title",
    description: "This is the SEO page and title description example.",
  };
}
