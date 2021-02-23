import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Container, IconButton } from '@material-ui/core';
import Image from 'next/image';
import { Title } from '../../ui/title';
import { services } from '../top';

export const Profile = (): JSX.Element => {
  const classes = sectionStyles();

  return (
    <section>
      <Container maxWidth="md" className="container">
        <Title title="Profile" fontSize="h4" />
        <div className={classes.profile}>
          <Avatar alt="Kenji Yamashita" className="avater" />
          <div className="aboutMe">
            <div className="name">Kenji Yamashita</div>
            <div className="description">
              <p>某うどん県で大学院に通っている学生です。(イラスト募集中)</p>
              <p>Master student</p>
              <div className="services">
                {services.map((service, idx) => (
                  <div className="service" key={idx}>
                    <IconButton href={service.url}>
                      <Image src={service.service} width="32" height="32" />
                    </IconButton>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const sectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      '& > .container': {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      },
    },
    profile: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },

      '& >.avater': {
        width: '140px',
        height: '140px',
      },

      '& >.aboutMe': {
        textAlign: 'left',
        paddingLeft: '2rem',
        [theme.breakpoints.down('sm')]: {
          textAlign: 'center',
          paddingTop: '2rem',
        },

        '& >.name': {
          fontSize: '2rem',
          fontWeight: '400',
          lineHeight: '40px',
          letterSpacing: '.05em',
        },
        '& >.description': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          '& >.services': {
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '1rem',
            justifyContent: 'flex-start',
            [theme.breakpoints.down('sm')]: {
              justifyContent: 'center',
            },
          }
        },
      },
    },
  }),
);
