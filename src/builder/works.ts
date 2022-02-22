import fs from 'fs-extra';
import { works, Works } from '../data/workData';
import { getOGPImage } from './ogpImage';

export type WorkItem = Works & {
  ogImageURL: string;
}

async function getMyWorksItems(works: Works[]): Promise<WorkItem[]> {
  return Promise.all(works.map(async (work) => {
    const ogImageURL = await getOGPImage(work.url);
    return {
      ...work,
      ogImageURL,
    }
  }))
}

(async function() {
  const items = await getMyWorksItems(works)
  fs.ensureDirSync('.contents');
  fs.writeJsonSync('.contents/works.json', items);
})();