import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import "./layout.css";


export const Layout = ({ children }) => {
    return (
        <div className="app-shell">
            <Header />
            <main className="page-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};