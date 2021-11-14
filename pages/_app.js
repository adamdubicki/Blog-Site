import "tailwindcss/tailwind.css";
import "react-simple-flex-grid/lib/main.css";
import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
