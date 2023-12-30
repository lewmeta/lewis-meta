import { client } from "@/lib/sanity.client";
import Navbar from "../Navbar";
import { navbarQuery } from "@/lib/queries";


export default async  function NavFetch() {
    const navquery:Navbar[] = await client.fetch(navbarQuery);
    return (
      <>
          <Navbar navquery={navquery}/>
      </>
    )
  }
  