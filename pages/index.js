
import Link from 'next/link'
import Layout from '../components/Layout';

const PostLink = (props) => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const Index = () => (
    <Layout>
        {/* <Head>
            <title>
                Index 페이지
            </title>
        </Head> */}
        <h1>
            My Next.js
        </h1>
        <h2>
            <Link href="/about">
                <a style={{background: 'black', color: 'white'}}>소개</a>
            </Link>
        </h2>
        
        <ul>
            <PostLink title="Hello Next.js"/>
            <PostLink title="Learn Next.js is awesome"/>
            <PostLink title="Deploy apps with Zeit"/>
        </ul>
    </Layout>
);

export default Index;