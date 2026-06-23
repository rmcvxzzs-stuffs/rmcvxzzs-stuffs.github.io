const validRoutes = [
  "/",
  "/index.html",
  "/404.html"
];

function normalizePath(path) {
  if (!path || path === "") return "/";
  return path.replace(/\/+$|\/+(?=\?)/g, "") || "/";
}

const currentPath = normalizePath(window.location.pathname);

if (!validRoutes.includes(currentPath)) {
  window.location.replace("/404.html");
}
