import { client } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url"


// get the preconfigured url-builder from your sanity client

const builder = imageUrlBuilder(client);

export default function urlFor(source: any) {
    return builder.image(source);
}

export function urlForOpenGraph(source: any) {
    // Apply transformations specific to OG images (e.g., dimensions, fit, crop)
    return builder.image(source).width(1200).height(627).fit('crop').url() || null;
}