import {useRouter} from 'next/router'
import Head from 'next/head'
import {MainLayout} from '../components/MainLayout'


export default function About() {
    const Router = useRouter()

    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout>
            <Head>
                <title>About | Next Tutorial</title>
            </Head>
            <h1>About Page</h1>
            <button onClick={linkClickHandler}>Go to Home Page</button>
            <button onClick={() => Router.push('/posts')}>Go to Posts Page</button>
        </MainLayout>
    )
}
