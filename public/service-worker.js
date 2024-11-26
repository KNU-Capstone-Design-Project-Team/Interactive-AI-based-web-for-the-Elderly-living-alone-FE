importScripts("https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js");

// 푸쉬 알림 보여주기
self.addEventListener("push", (event) => {
  if (event.data) {
    const data = event.data.json();

    // 백 따라서 형식 바꿔야 함
    const title = data.notification.title;
    const options = {
      body: data.notification.body,
      icon: data.notification.icon,
      data: data.notification.url,
    };

    event.waitUntil(self.registration.showNotification(title, options));
  }
});

// 푸쉬 알림 클릭하면 창 열거나 포커스
self.addEventListener("notificationclick", (event) => {
  const url = event.notification.data;
  event.notification.close(); // 알림 클릭 후 닫기

  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true }) // 서비스 워커에 연결된 모든 브라우저 탭이나 창 목록 가져오기
      .then((clientList) => {
        for (let client of clientList) {
          // 리스트에 담긴 창, 탭을 우회하며 전달된 url(열어야 할 url)과 일치하는지 확인하고 재사용
          if (client.url === url && "focus" in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          // 없으면 새로운 창 열고 반환 및 종료
          return clients.openWindow(url);
        }
      })
  );
});
