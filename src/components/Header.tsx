import { Flex, Heading } from "@chakra-ui/react";

export default function Header() {
  const today = new Date();
  return (
    <Flex
      as='header'
      h='30vh'
      bg='purple.700'
      flexDir='column'
      justifyContent='center'
      alignItems='center'>
      <Heading as='h1' size='2xl'>
        Welcome Back to Todo App
      </Heading>
      <Heading as='h2' size='md' mt='2.5' fontWeight='500'>
        Today Date {today.toDateString()}
      </Heading>
    </Flex>
  );
}
