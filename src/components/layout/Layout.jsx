// import "./globals.css";
import Header from "../header";
import Footer from "../footer";

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
