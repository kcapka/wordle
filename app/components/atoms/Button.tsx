import { Link } from "@remix-run/react";


export default function Button(props:any) {

    const backgroundStyle = {
        backgroundImage: 'linear-gradient(to right, rgb(114,92,246), rgb(92,143,247))',
    }

    return (
        <Link to={props.to}>
                <button className="text-white scale-100 hover:scale-110 text-sm py-2 px-8 duration-200 rounded-3xl shadow-lg" style={backgroundStyle}>{props.children}</button>
        </Link>
    )
}