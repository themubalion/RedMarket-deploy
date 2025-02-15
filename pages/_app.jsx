import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Red Market</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/icon.png" />
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
