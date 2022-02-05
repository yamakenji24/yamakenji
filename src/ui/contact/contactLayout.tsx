import { useState } from 'react';
import { Button, Box, Container, FormControl, Input, Text, useToast } from '@chakra-ui/react';

const UseFormControl = (props: any) => (
  <FormControl variant="outline" isRequired>
    <Input variant="outline" isfullwidth="true" size="lg" {...props} />
  </FormControl>
);

export const ContactLayout = (): JSX.Element => {
  const toast = useToast();
  const [input, setInput] = useState({
    title: '',
    name: '',
    email: '',
    message: '',
  });

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    await fetch('https://api.staticforms.xyz/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        subject: input.title,
        message: input.message,
        accessKey: process.env.NEXT_PUBLIC_ACCESS_KEY,
      }),
    })
      .then((_) =>
        toast({
          title: 'Success',
          status: 'success',
          duration: 2000,
          isClosable: true,
        }),
      )
      .catch((_) => {
        toast({
          title: 'Failed',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })}
      );
  };

  return (
    <Container maxW="lg">
      <Text textAlign="center">
        何かございましたら下のフォームからご連絡ください。
        <br />
        Feel free to contact me from below.
      </Text>
      <Box mt="24">
        <UseFormControl
          id="name"
          type="text"
          value={input.name}
          placeholder="Name"
          onChange={handleChangeText}
        />
        <UseFormControl
          id="title"
          type="text"
          value={input.title}
          placeholder="Title"
          onChange={handleChangeText}
        />
        <UseFormControl
          id="email"
          type="email"
          value={input.email}
          placeholder="Email Address"
          onChange={handleChangeText}
        />
        <UseFormControl
          id="message"
          value={input.message}
          placeholder="Contents"
          multiline="true"
          onChange={handleChangeText}
        />
        <Button colorScheme="blue" onClick={handleOnSubmit} mt="4">
          送信
        </Button>
      </Box>
    </Container>
  );
};