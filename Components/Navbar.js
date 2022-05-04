import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a className="hover:shadow">Home</a>
      </Link>

      <Link href="/about">
        <a className="hover:shadow">About</a>
      </Link>

      <Link href="/country">
        <a className="hover:shadow">Country~List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
