import Image from "next/image";

import "./header.scss"

export function Header() {
    return (
        <div className="header">
            <div>
                <h1>Hi, i'm Felipe!</h1>
                <h2>Software Enginner</h2>
            </div>
            <Image
                src="/me.jpg"
                alt="Next.js logo"
                width={325}
                height={310}
                priority
            />
        </div>
    )
}