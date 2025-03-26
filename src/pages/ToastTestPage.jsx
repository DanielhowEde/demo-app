import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Toast from "../components/Toast";
import BackButton from "../components/BackButton";

const ToastTestPage = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowToast(true), 2000);
    const hideTimer = setTimeout(() => setShowToast(false), 5000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl">Toast Notification Test</h1>
      <Button onClick={() => setShowToast(true)}>Show Toast</Button>
      <Toast
        message="This is a test notification!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      <BackButton />
    </div>
  );
};

export default ToastTestPage;
