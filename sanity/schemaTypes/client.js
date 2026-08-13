import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId: projectId || 'l6e77v0q', // الـ ID بتاعك (بيقرأ من الـ env)
  dataset: dataset || 'production',
  apiVersion: apiVersion || '2024-03-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}