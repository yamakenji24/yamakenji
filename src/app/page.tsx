import { getExperienceAPI } from 'services/get-experience-api';
import { Profile } from './_components/profile';
import { GitHubActivity } from './_components/GitHubActivity.client';
import { Experience } from './_components/experience';

export default async function Page() {
  const experiences = await getExperienceAPI();

  return (
    <>
      <Profile />
      <Experience experiences={experiences} />
      <GitHubActivity />
    </>
  );
}
