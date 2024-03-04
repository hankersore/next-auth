import Link from "next/link";

export default function Home() {

  return (
    <div>
      <h1>Home</h1>
      <br />
      <Link href='/products'>Products page</Link>
    </div>
  )
}
