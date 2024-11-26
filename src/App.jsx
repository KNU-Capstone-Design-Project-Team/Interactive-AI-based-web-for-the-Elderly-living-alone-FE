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

      // 푸쉬 알림 권한이 아직 요청되지 않은 경우에만 동의 창 띄우기
      const permission = await OneSignal.getNotificationPermission();

      if (permission === "default" || permission === "denied") {
        OneSignal.showSlidedownPrompt(); // 알림 동의 창 띄우기
      }
    };

    initializeOneSignal();
  }, []);

  return <Router />;
}

export default App;
