import {GetServerSideProps, NextPage} from 'next'
import {IPost} from '../types'
import {MainLayout} from '../components/MainLayout'
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router'

interface Props {
    post?: IPost,
}

const Post: NextPage<Props> = ({post: serverPost}) => {
    const [post, setPost] = useState(serverPost);
    const router = useRouter()

    useEffect(() => {
        const load = async () => {
            const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`)
            const data = await response.json()
            setPost(data)
        }
        if (!serverPost) load()
    }, [])

    if (!post) return (
        <MainLayout title={'Loading...'}>
            <p>Loading...</p>
        </MainLayout>
    )

    return (
        <MainLayout>
            <h1>Post: {post.id}</h1>
            <p>Title: {post.title}</p>
            <p>Author: {post.author}</p>
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({query, req}) => {
    if (!req) return {props: {post: null}}
    const response = await fetch(`${process.env.API_URL}/posts/${query.id}`)
    const post = await response.json()

    return {
        props: {post}, // will be passed to the page component as props
    }
}

// Post.getInitialProps = async ({query, req}) => {
//     if (!req) return {post: null}
//     const response = await fetch(`${process.env.API_URL}/posts/${query.id}`)
//     const post = await response.json()
//     return {post}
// }

export default Post

