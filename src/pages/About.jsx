import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" mb={4}>About</Heading>
    <Text fontSize="lg">This is the About page of the Todo App.</Text>
  </Box>
);

export default About;