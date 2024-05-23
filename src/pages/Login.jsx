import { useState } from "react";
import { 
  Container, 
  VStack, 
  Input, 
  Button, 
  Heading 
} from "@chakra-ui/react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in with", { username, password });
  };

  return (
    <Container centerContent maxW="container.sm" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="2xl" mb={6}>Login</Heading>
        <Input 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <Input 
          placeholder="Password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button onClick={handleLogin} colorScheme="teal" w="100%">Login</Button>
      </VStack>
    </Container>
  );
};

export default Login;