import { Box, Heading, Text, Container } from "@chakra-ui/react";

const About = () => (
  <Container centerContent maxW="container.md" py={10}>
    <Box textAlign="center">
      <Heading as="h1" size="2xl" mb={6}>About</Heading>
      <Text fontSize="lg">
        This Todo App helps you manage your tasks efficiently and stay organized.
      </Text>
    </Box>
  </Container>
);

export default About;