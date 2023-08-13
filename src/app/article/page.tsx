import { Title } from 'ui/common/title';
import { ArticleContainer } from './_components/Articles.client'

export default async function Page() {
  return (
    <>
      <Title title="Articles" />
      <ArticleContainer/>
    </>
  );
}
