import "@styles/globals.css";
import Nav from "@components/Nav";
export const metadata = {
	title: "Promptino",
	description: "Discover and Share AI Prompts",
};
import { Provider } from "@components/Provider";

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<Provider>
					<div className="main">
						<div className="gradient" />
					</div>
					<main className="app">
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
