import Navbar from "./Navbar";


export default function PageLayout(props:any) {

    return (
        <>
            <Navbar />
            <main>{props.children}</main>
        </>
    )
}