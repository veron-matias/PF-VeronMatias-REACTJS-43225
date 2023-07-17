import React from "react";
import Alert from "@mui/material/Alert";
import './error.css';

const ErrorPage = () => {
  return (
    <div className="alertaError">
      <Alert severity="error" className="errorText" >Page Not Found | Error:404 !</Alert>
    </div>
  );
};

export default ErrorPage;