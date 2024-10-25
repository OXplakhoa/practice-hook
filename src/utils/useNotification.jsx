export const useNotification = (title, opt) => {
    if (!("Notification" in window)) return;
    const fireNoti = () => {
      if (Notification.permission === "granted") {
        new Notification(title, opt);
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(title, opt);
          }
        });
      }
    };
  
    return fireNoti;
  };