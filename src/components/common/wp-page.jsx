import "@/app/_wp-block.css";
import { cn } from "@/lib/utils";
import parse, { domToReact } from "html-react-parser";
import Link from "next/link";
// import Image from "next/image";

const WpPage = ({ __html, className }) => {
  const options = {
    replace: (domNode) => {
      // 1. Thay thế thẻ <a> (Link)
      if (domNode.name === "a" && domNode.attribs.href) {
        const isInternal =
          domNode.attribs.href.includes("https://dienmaytanphat.com") || !domNode.attribs.href.includes("http");
        // Nếu là link nội bộ thì dùng Next Link, link ngoài thì giữ nguyên <a>
        if (isInternal) {
          return (
            <Link href={domNode.attribs.href} {...domNode.attribs}>
              {domToReact(domNode.children, options)}
            </Link>
          );
        }
      }
      // 2. Thay thế thẻ <img> (Next Image)
      //   if (domNode.name === "img") {
      //     const { src, alt, width, height } = domNode.attribs;
      //     return (
      //       <Image
      //         src={src}
      //         alt={alt || "WordPress Image"}
      //         width={parseInt(width) || 800} // Cần có width/height hoặc dùng layout fill
      //         height={parseInt(height) || 600}
      //         layout="responsive"
      //         priority={false}
      //       />
      //     );
      //   }
    },
  };

  return <article className={cn("prose flex flex-col", className)}>{parse(__html, options)}</article>;
};

export default WpPage;
