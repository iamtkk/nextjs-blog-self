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
      <section className="headingMd pt-[1px]">
        <h2 className="headingLg">Blog</h2>
        <ul className="list-none p-0 m-0">
          {allPostsData.map(({ id, title, date }) => (
            <li className="mt-0 mx-0 mb-5" key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
