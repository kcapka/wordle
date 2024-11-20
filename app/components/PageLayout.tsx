import Navbar from "./Navbar";
import { Footer } from "./Footer";


export default function PageLayout(props:any) {

    return (
        <>
            <Navbar />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}