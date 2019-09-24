import Layout from '../components/MyLayout';
import Link from 'next/link';

// // Dynamic Pages
// const PostLink = props => (
//     <li>
//         <Link href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// );

// Clean URL using [id]
const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

// props changed from title to id
export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="Hello Next.js" />
                <PostLink id="Learn Next.js is awesome" />
                <PostLink id="Deploy apps with Zeit" />
            </ul>
        </Layout>
    );
}
