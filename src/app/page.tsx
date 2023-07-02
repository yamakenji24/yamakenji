import { getExperienceAPI } from 'services/get-experience-api';
import { Profile, Experience, GitHubActivity } from 'ui/top';

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
