
import Link from "next/link";
import getPostMetadata from "components/getPostMetadata";
import PostPreview from "components/PostPreview";


const HomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreview = postMetadata.map((post)=> (
     <PostPreview key ={post.slug} {...post} />
));

    return <div className= "grid gap-2 lg:gap-5 md:grid-cols-2 ">{postPreview}</div>;

};
export default HomePage;