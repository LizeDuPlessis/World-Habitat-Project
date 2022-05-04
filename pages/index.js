import React from "react";
import Link from "next/link";

function index() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        similique ex quod eum odio at excepturi dolor nulla earum, omnis
        voluptatibus ratione, consectetur consequatur? Temporibus, repudiandae!
        Dolore itaque amet excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        similique ex quod eum odio at excepturi dolor nulla earum, omnis
        voluptatibus ratione, consectetur consequatur? Temporibus, repudiandae!
        Dolore itaque amet excepturi.
      </p>
      <Link href="/country">
        <a>Country~List</a>
      </Link>
    </div>
  );
}

export default index;
