import {ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
    children: ReactNode,
    title?: string
}


export function MainLayout({children, title = 'Next App'}: Props) {
    return (
        <>
            <Head>
                <title>{title} | Next Tutorial</title>
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>
                {`
                  nav {
                    position: fixed;
                    height: 60px;
                    left: 0;
                    top: 0;
                    right: 0;
                    background-color: burlywood;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                  }

                  nav a {
                    color: #fff;
                    font-size: 30px;
                    font-weight: 700;
                    text-decoration: none;
                  }

                  nav a:hover {
                    color: black;
                  }

                  main {
                    width: 1200px;
                    margin: 30px auto 0 auto;
                    padding: 40px;
                  }`}
            </style>
        </>
    )
}
