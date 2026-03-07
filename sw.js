self.addEventListener("install", (e) => {
  console.log("[Service Worker Taller] Instalado correctamente");
});

self.addEventListener("fetch", (e) => {
  // El fetch queda vacío para garantizar que el panel siempre lea la base de datos en tiempo real
});
