import { useRouter } from "next/router";
import { getAllPostIds, getPostData } from "@/lib/posts.mjs";

export function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    params: {
      paths,
      fallback: true,
    },
  };
}

export function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const Post = () => {
  return <div>Post</div>;
};
export default Post;
