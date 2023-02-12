import Link from "next/link";
import { PostMetadata } from "./PostMetadata";


const PostPreview = (props : PostMetadata) => {
    return (
        <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
        {/* <Link href={`/post/${props.slug}`}>
        <h2 className="inline-block mt-5 text-xs font-medium tracking-wider uppercase  text-blue-600 bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] text-center">{props.title}</h2>
        </Link> */}

        <div className="p-4 bg-white rounded-lg shadow-md">
        <Link href={`/post/${props.slug}`}> 
  <h2 className="inline-block mt-5 text-xs font-medium tracking-wider uppercase  text-blue-600 bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] text-center">{props.title}</h2>
     </Link>
  <p className="text-gray-500 text-sm mb-1">{props.subtitle}</p>
  <p className="text-gray-500 text-sm mb-2">Published on {props.date} </p>
  <div className="flex items-center mb-2">

  <div className="p-4 bg-white rounded-lg shadow-md flex justify-between">
  <div className="flex items-center">
    <span className="text-gray-500 text-sm">{props.rating}</span>
  </div>
  <div className="flex flex-wrap ml-10">
    <span className="px-2 py-1 bg-gray-200 text-gray-600 text-sm rounded-full mr-2 mb-2">{props.tags}</span>
  </div>
</div>
  </div>
</div>
{/* 
        <p className="text-center inline-grid grid-cols-2 text-3xl text-green-700 ">{props.rating}</p>
            <div className="text-sm text-center text-black">{props.date}</div>
            <div className="text-sm text-center text-black"  >{props.subtitle}</div>
            <div className="text-sm text-center text-black">{props.tags}</div> */}
        </div>
    );
};

export default PostPreview;