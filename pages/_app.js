import "tailwindcss/tailwind.css";
import "react-simple-flex-grid/lib/main.css";
import "../styles/app.css";
import "react-vertical-timeline-component/style.min.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
