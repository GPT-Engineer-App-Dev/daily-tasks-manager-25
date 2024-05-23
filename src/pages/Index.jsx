import { useState } from "react";
import { 
  Container, 
  VStack, 
  HStack, 
  Input, 
  Button, 
  Checkbox, 
  IconButton, 
  Heading, 
  List, 
  ListItem, 
  Text,
  Box 
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="2xl" mb={6}>Todo App</Heading>
        <HStack w="100%">
          <Input 
            placeholder="Add a new task" 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
          />
          <Button onClick={addTask} colorScheme="teal">Add Task</Button>
        </HStack>
        <List spacing={3} w="100%">
          {tasks.map((task, index) => (
            <ListItem 
              key={index} 
              display="flex" 
              alignItems="center" 
              justifyContent="space-between" 
              bg="gray.100" 
              p={3} 
              borderRadius="md"
            >
              <HStack>
                <Checkbox 
                  isChecked={task.completed} 
                  onChange={() => toggleTaskCompletion(index)}
                />
                <Text as={task.completed ? "s" : "span"}>{task.text}</Text>
              </HStack>
              <IconButton 
                aria-label="Delete task" 
                icon={<FaTrash />} 
                onClick={() => deleteTask(index)} 
                colorScheme="red"
              />
            </ListItem>
          ))}
        </List>
      </VStack>
      <Box as="footer" w="100%" py={4} textAlign="center" bg="gray.200" mt={10}>
        © 2023 Todo App
      </Box>
    </Container>
  );
};

export default Index;