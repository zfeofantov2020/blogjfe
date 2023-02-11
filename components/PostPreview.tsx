import Link from "next/link";
import { PostMetadata } from "./PostMetadata";


const PostPreview = (props : PostMetadata) => {
    return (
        <div className="border border-violet-400 p-4 rounded-md shadow-md bg-white
        ">
        <Link href={`/post/${props.slug}`}>
        <h2 className="font-bold text-violet-800 hover:underline">
            {props.title}</h2>
        </Link>
        <p className="text-sm text-slate-400">{props.date}</p>
        <p className="text-slate-700">{props.subtitle}</p>
   
        </div>
    );
};

export default PostPreview;