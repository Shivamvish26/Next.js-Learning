import React from "react";

export default function EnvironmentFilePage() {
  console.log("Environment Variable:", process.env.NODE_ENV);

  return (
    <div>
      <h1>Environment File Page</h1>
    </div>
  );
}

// to add the file for the environment variables, create a file named .env.local in the root directory of the project
// and add the variables in the format REACT_APP_YOUR_VARIABLE_NAME=your_value
// Note: In Next.js, environment variables must be prefixed with NEXT_PUBLIC_ to be accessible in the browser.
