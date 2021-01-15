import { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Container, Button, Typography, TextField } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const UseTextField = (props) => {
  return <TextField variant="outlined" fullWidth required {...props} />;
};
const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ContactLayout = (): JSX.Element => {
  const classes = contactLayoutStyles();
  const [input, setInput] = useState({
    title: '',
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [openAlert, setOpenAlert] = useState(false);

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [event.target.id]: event.target.value,
    });
  };
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInput({ title: '', name: '', email: '', message: '' });
      setOpenAlert(true);
    } else {
      setStatus({
        ...status,
        info: { error: true, msg: msg },
      });
      setOpenAlert(true);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://api.staticforms.xyz/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        subject: input.title,
        message: input.message,
        accessKey: process.env.ACCESS_KEY,
      }),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <section className={classes.contact}>
      <Container maxWidth="md" className="container">
        <Typography className="text">
          何かございましたら下のフォームからご連絡ください。
          <br />
          Feel free to contact me from below.
        </Typography>
        <form className="contactForm" onSubmit={handleOnSubmit}>
          <UseTextField
            id="name"
            type="text"
            value={input.name}
            label="Name"
            onChange={handleChangeText}
          />
          <UseTextField
            id="title"
            type="text"
            value={input.title}
            label="Title"
            onChange={handleChangeText}
          />
          <UseTextField
            id="email"
            type="email"
            value={input.email}
            label="Email address"
            onChange={handleChangeText}
          />
          <UseTextField
            id="message"
            label="内容"
            value={input.message}
            multiline
            onChange={handleChangeText}
          />

          <Button type="submit" variant="contained" color="primary">
            送信
          </Button>
        </form>
        <Snackbar open={openAlert} autoHideDuration={5000} onClose={handleCloseAlert}>
          {status.info.error ? (
            <Alert onClose={handleCloseAlert} severity="error">
              送信に失敗しました。
            </Alert>
          ) : (
            <Alert onClose={handleCloseAlert} severity="success">
              送信が完了しました。
            </Alert>
          )}
        </Snackbar>
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
