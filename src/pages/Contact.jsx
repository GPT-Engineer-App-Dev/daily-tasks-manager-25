import { Box, Heading, Text, Container } from "@chakra-ui/react";

const Contact = () => (
  <Container centerContent maxW="container.md" py={10}>
    <Box textAlign="center">
      <Heading as="h1" size="2xl" mb={6}>Contact</Heading>
      <Text fontSize="lg">
        For any inquiries, please email us at contact@todoapp.com.
      </Text>
    </Box>
  </Container>
);

export default Contact;