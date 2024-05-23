import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" px={4} py={2}>
    <Flex justify="space-between" align="center">
      <Text color="white" fontSize="xl" fontWeight="bold">
        Todo App
      </Text>
      <Flex>
        <Link as={NavLink} to="/" color="white" mx={2}>
          Home
        </Link>
        <Link as={NavLink} to="/about" color="white" mx={2}>
          About
        </Link>
        <Link as={NavLink} to="/contact" color="white" mx={2}>
          Contact
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;