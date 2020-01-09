import Link from "next/link"

export default props => (
  <>
    <header>
      <h1>title: {props.title}</h1>
      <Link href="./">
        <a>home</a>
      </Link>
      <Link href="./about">
        <a>about</a>
      </Link>
      <Link href="./hireme">
        <a>hireme</a>
      </Link>
    </header>
    {props.children}
    <footer>footer</footer>
  </>
);
