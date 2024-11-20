import { Form } from "@remix-run/react"

export default function NewsletterSignup() {

    return (
        <section className="max-w-[350px]">
            <p className="text-gray-400 mb-2">Sign up to stay up to date on new games and models!</p>
            <Form>
                <div className="relative">
                    <input type="email" id="email" name="email" placeholder="Email Address..." className="text-sm font-semibold bg-transparent outline-none border-b border-b-gray-400 pt-2 pb-2 pr-12 w-full"/>
                    <button className="absolute top-0 right-2 z-10">
                        <img src="/images/icons/arrow-right-long.svg" className="w-8" alt="Submit Arrow" />
                    </button>
                </div>
            </Form>
        </section>
    )
}