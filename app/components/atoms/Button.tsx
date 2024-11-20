import { Link } from "@remix-run/react";


export default function Button(props:any) {

    return (
        <Link to={props.to}>
                <button className="text-white scale-100 hover:scale-110 text-sm py-2 px-8 duration-200 font-semibold rounded-3xl shadow-lg border border-white">{props.children}</button>
        </Link>
    )
}