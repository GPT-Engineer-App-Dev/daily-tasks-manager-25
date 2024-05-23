import { Box, Flex, Heading, HStack, Link, IconButton, useDisclosure, VStack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg" color="white">
          Todo App
        </Heading>
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center" display={{ base: "none", md: "flex" }}>
          <Link as={RouterLink} to="/" color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/about" color="white">
            About
          </Link>
          <Link as={RouterLink} to="/contact" color="white">
            Contact
          </Link>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <VStack as="nav" spacing={4}>
            <Link as={RouterLink} to="/" onClick={onClose}>
              Home
            </Link>
            <Link as={RouterLink} to="/about" onClick={onClose}>
              About
            </Link>
            <Link as={RouterLink} to="/contact" onClick={onClose}>
              Contact
            </Link>
          </VStack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;