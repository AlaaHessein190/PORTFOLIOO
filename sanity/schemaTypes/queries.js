import { client } from './client';

export async function getProjects() {
  const query = `*[_type == "project"]{
    title,
    category,
    description,
    image,
    tags,
    link
  }`;
  
  const projects = await client.fetch(query);
  return projects;
}