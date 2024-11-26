import React, { useEffect, useState } from "react";
import Router from "@/global/pages/Router.jsx";
import "./App.css";
import OneSignal from "react-onesignal";

function App() {
  useEffect(() => {
    const initializeOneSignal = async () => {
      await OneSignal.init({
        appId: "", // OneSignal 대시보드에서 발급받을 수 있음
        allowLocalhostAsSecureOrigin: true, // localhost 허용
        notifyButton: {
          enable: true, // 알림 구독 버튼 활성화
        },
      });

      OneSignal.showSlidedownPrompt(); // 알림 동의 창
    };

    initializeOneSignal();
  }, []);

  return <Router />;
}

export default App;
