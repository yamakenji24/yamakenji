import { Title } from 'ui/common/title';
import { getWorks } from './_components/useWork';
import { Work } from './_components/Work';
import { css } from '../../../styled-system/css';

export default async function Page() {
  const works = getWorks();

  return (
    <>
      <Title title="Works" />
      <div className={css({ display: 'flex' })}>
        <div className={wrapper}>
          {works.map((work, idx) => (
            <Work key={idx} {...work} />
          ))}
        </div>
      </div>
    </>
  );
}

const wrapper = css({
  display: 'grid',
  marginX: 'auto',
  gridTemplateColumns: { base: '1fr', md: 'repeat(2, 1fr)' },
  gap: 6,
});
