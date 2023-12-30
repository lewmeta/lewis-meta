import { client } from "@/lib/sanity.client";
import Navbar from "../Navbar";
import { navbarQuery } from "@/lib/queries";
import Footer from "../Footer";


export default async  function FooterFetch() {
    const navquery:Navbar[] = await client.fetch(navbarQuery);
    return (
      <>
          <Footer navquery={navquery}/>
      </>
    )
  }
  