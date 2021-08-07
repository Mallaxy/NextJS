import Link from 'next/link'
import {MainLayout} from './components/MainLayout'

export default function Index() {
    return (
        <MainLayout title={"Next Tutorial"}>
            <h1>Hello NextJS</h1>
            <div><Link href={'/about'}><a>About</a></Link></div>
            <div><Link href={'/posts'}><a>Posts</a></Link></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </MainLayout>
    )
}
