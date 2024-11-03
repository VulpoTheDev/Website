// utils/imageUrl.ts
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../sanity/lib/client';

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source).url();
}
