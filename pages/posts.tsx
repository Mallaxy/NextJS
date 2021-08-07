import {MainLayout} from './components/MainLayout'
import {NextPage} from 'next'
import Link from 'next/link'
import {IPost} from './types'
import {useEffect, useState} from 'react'

interface IProps {
    posts?: IPost[]
}

const Posts: NextPage<IProps> = ({posts: serverPosts}) => {
    const [posts, setPost] = useState(serverPosts);
    useEffect(() => {
        const load = async () => {
            const response = await fetch(`${process.env.API_URL}/posts`)
            const posts = await response.json()
            setPost(posts)
        }
        if (!serverPosts) load()
    }, [])

    if (!posts) return (
        <MainLayout title={'Loading...'}>
            <p>Loading...</p>
        </MainLayout>
    )

    if (posts?.length === 0) return (
        <MainLayout title={'Posts Page'}>
            <p>No posts there</p>
        </MainLayout>
    )
    return (
        <MainLayout title={'Posts Page'}>
            <h1>Posts Page</h1>
            <ul>
                {posts?.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({req}) => {
    if (!req) return {posts: null}
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json()
    return {posts}
}

export default Posts
