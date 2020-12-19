import React from "react";
import { ErrorBoundary as EB } from "react-error-boundary";
import styles from "./ErrorBoundary.module.css";
const ErrorFallback = ({ error }: any) => {
  return (
    <>
      <div className={styles.alert} role="alert">
        <span className={styles.alertTitle}>Oops something went wrong</span>
        <pre className={styles.errorMessage}>{error.message}</pre>
      </div>
    </>
  );
};
const ErrorBoundary: React.FC = ({ children }) => {
  return <EB FallbackComponent={ErrorFallback}>{children}</EB>;
};
export default ErrorBoundary;
