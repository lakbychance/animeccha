const serviceWorkerURL =
  process.env.NODE_ENV === "production"
    ? "https://animeccha.com/service-worker.js"
    : "http://localhost:3000/service-worker.js";
const registerSW = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(serviceWorkerURL).then(function () {
      console.log("Service Worker Registered");
    });
  }
};

export default registerSW;
