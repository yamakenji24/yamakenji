import axios, { AxiosResponse } from 'axios';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Title } from 'ui/title';
import { WorkLayout } from 'ui/work/workLayout'
import { GetWorksResponse, WorkType } from 'utils/workData';

interface Props {
  works: Array<WorkType>;
}

const Work = ({ works }: Props): JSX.Element => {
  const classes = worksStyles();

  return (
    <div className={classes.main}>
      <section>
        <Title title="Works" fontSize="h4" />
      </section>
      <WorkLayout works={works}/>
    </div>
  );
};

export const getStaticProps = async () => {
  const works = await axios.get(process.env.NEXT_PUBLIC_WORK_URL, {
    headers: {'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY},
  })
  .then(({data}: AxiosResponse<GetWorksResponse>) => 
    data.contents.map((value) => ({
      id: value.id,
      github: value.github,
      link: value.link,
      img: value.img.url,
      title: value.title,
      skills: value.skills,
      body: value.body,
    })),
  )
  .catch(() => null);

  return {
    props: {
      works,
    }
  }
}

const worksStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      '& section': {
        padding: `${theme.spacing(7)}px 0`,
      },
    },
  }),
);

export default Work;
