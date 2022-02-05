import Link from "next/link";

export default function Aboutus() {
  return (
    <div>
      <Link href="/posts/first-post#my-modal">
        <a className="btn btn-primary">open modal</a>
      </Link>
    </div>
  );
}
