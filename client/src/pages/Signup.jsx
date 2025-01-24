import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, useToast, Text } from '@chakra-ui/react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const toast = useToast()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://chatbot-server-kj9i.onrender.com/user/register', {
        name,
        email,
        password,
      });

      toast({
        title: 'Registration successful!',
        description: 'You have successfully registered. Please log in.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      console.log(response);
      
      navigate('/login');
    } catch (error) {
      toast({
        title: 'Registration failed.',
        description: error.response?.data?.message || 'Something went wrong.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      position="relative"
      h="100vh"
      w="100vw"
      bgGradient="linear(to-b, rgba(0,0,0,0.6), rgba(0,0,0,0.9))"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        maxW="500px"
        bg="rgba(0, 0, 0, 0.7)"
      >
        <Text
          fontSize="lg"
          fontWeight="semibold"
          opacity={0.9}
          lineHeight="1.8"
          letterSpacing="wide"
          bgGradient="linear(to-r, teal.300, blue.500)"
          bgClip="text"
        >
          Register an account and start exploring Chatbot Pro!
        </Text>

        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              border="1.5px solid pink"
              borderRadius="5px"
              size="md"
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              border="1.5px solid pink"
              borderRadius="5px"
              size="md"
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              border="1.5px solid pink"
              borderRadius="5px"
              size="md"
            />
          </FormControl>

          <Button
            bgGradient="linear(to-r, #ff7e5f, #feb47b)"
            color="white"
            size="lg"
            type="submit"
            mb={4}
            width="full"
          >
            Sign Up
          </Button>

          <Box textAlign="center">
            <Text fontSize="sm" color="gray.500">
              Already have an account?{' '}
              <Link to="/login" style={{ color: "#3182ce", fontWeight: "bold" }}>
                Log In
              </Link>
            </Text>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Signup;
