import '../styles/globals.css';
import Layout from '../layouts/Default';
// import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
