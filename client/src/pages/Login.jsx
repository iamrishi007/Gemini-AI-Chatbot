import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, useToast, Text, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [loading, setLoading] = useState(false);
     const toast = useToast();
     const navigate = useNavigate();

     const handleSubmit = async (e) => {
          e.preventDefault();
          setLoading(true);

          try {
               const response = await axios.post('https://chatbot-server-kj9i.onrender.com/user/login', {
                    email,
                    password,
               });

               if (response.data.token) {
                    localStorage.setItem('authToken', response.data.token);

                    toast({
                         title: 'Login successful!',
                         description: 'Welcome back!',
                         status: 'success',
                         duration: 5000,
                         isClosable: true,
                    });

                    navigate('/dashboard');
               }
          } catch (error) {
               toast({
                    title: 'Login failed.',
                    description: error.response?.data?.message || 'Invalid email or password.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
               });
          } finally {
               setLoading(false);
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
                    maxW="400px"
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
                         Welcome back! Please log in to continue.
                    </Text>

                    <form onSubmit={handleSubmit}>
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
                              isLoading={loading}
                              spinner={<Spinner />}
                         >
                              Log In
                         </Button>

                         <Box textAlign="center">
                              <Text fontSize="sm" color="gray.500">
                                   Don't have an account?{' '}
                                   <Link to="/signup" style={{ color: "#3182ce", fontWeight: "bold" }}>
                                        Signup
                                   </Link>
                              </Text>
                         </Box>
                    </form>
               </Box>
          </Box>
     );
}

export default Login;
