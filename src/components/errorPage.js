import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  // Additional information about the error (if available)
  const errorMessage = error?.message || "An unexpected error occurred.";
  const errorStatus = error?.statusText || "Unknown Error";

  return (
    <div id="error-page" style={styles.container}>
      <h1 style={styles.heading}>Oops!</h1>
      <p style={styles.paragraph}>Sorry, something went wrong.</p>
      <p style={styles.paragraph}>
        <strong>Error:</strong> {errorStatus}
      </p>
      <p style={styles.paragraph}>
        <em>{errorMessage}</em>
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  paragraph: {
    fontSize: "1.2rem",
    marginBottom: "0.3rem",
  },
};