import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Title from '../ui/title';
import ContactLayout from '../ui/contact/contactLayout';

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
        padding: `${theme.spacing(7)}px 0`,
      },
    },
  }),
);

export default Contact;
