import Image from "next/image";
import Link from "next/link";

const Card = (prop) => {
	const { post } = prop;
	return (
		<Link href={"/blog/" + post?.slug}>
			<Image
				src={post.image}
				width={300}
				height={250}
				alt={post?.title}
			/>
			<p>{post.date}</p>
			<h3>{post.title}</h3>
		</Link>
	);
};

export default Card;
