import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Title from '../components/title';
import ContactLayout from '../components/contact/contactLayout';

const Contact = (): JSX.Element => {
  const classes = contactStyles();

  return (
    <div className={classes.main}>
      <Title title="Contact" />
      <ContactLayout />
    </div>
  );
};

const contactStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      '& section': {
        padding: `${theme.spacing(10)}px 0`,
      },
    },
  }),
);

export default Contact;
