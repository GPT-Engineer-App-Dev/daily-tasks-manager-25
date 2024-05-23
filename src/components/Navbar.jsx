import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack spacing={4} p={4} bg="teal.500" color="white">
      <Button as={Link} to="/" variant="ghost" colorScheme="teal">Home</Button>
      <Button as={Link} to="/about" variant="ghost" colorScheme="teal">About</Button>
      <Button as={Link} to="/contact" variant="ghost" colorScheme="teal">Contact</Button>
      <Button as={Link} to="/login" variant="ghost" colorScheme="teal">Login</Button>
    </HStack>
  );
};

export default Navbar;