import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Container, Button, Typography, TextField } from '@material-ui/core';

const UseTextField = (props) => {
  return <TextField variant="outlined" fullWidth {...props} />;
};

const ContactLayout = () => {
  const classes = contactLayoutStyles();

  return (
    <section className={classes.contact}>
      <Container maxWidth="md" className="container">
        <Typography className="text">
          何かございましたら下のフォームからご連絡ください。
          <br />
          Feel free to contact me from below.
        </Typography>
        <form className="contactForm">
          <UseTextField name="name" type="text" label="Name" />
          <UseTextField name="email" type="email" label="Email address" />
          <UseTextField name="body" label="内容" multiline />

          <Button type="submit" variant="contained" color="primary">
            送信
          </Button>
        </form>
      </Container>
    </section>
  );
};
const contactLayoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    contact: {
      '& .text': {
        textAlign: 'center',
      },
      '& .contactForm': {
        marginTop: theme.spacing(5),
        '& > *': {
          marginBottom: theme.spacing(2),
        },
      },
    },
  }),
);

export default ContactLayout;
