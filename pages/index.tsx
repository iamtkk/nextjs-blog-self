import Layout from "@/components/layout";
import { getSortedPostsData } from "@/lib/posts.mjs";

interface IPostData {
  id: string;
  title: string;
  date: string;
}

interface Props {
  allPostsData: IPostData[];
}

export function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <h2 className="headingXl">Blog</h2>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
            <br />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
