import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Home() {
     const navigate = useNavigate()

     const handleNavigate = () => {
          navigate("/signup")
     };

     return (
          <Box
               position="relative"
               h="100vh"
               w="100vw"
               bgGradient="linear(to-b, rgba(0,0,0,0.6), rgba(0,0,0,0.9))"
               overflow="hidden"
          >
               <Image
                    src="https://i.pinimg.com/originals/2e/00/05/2e0005b76c7fb072b477a2e4b2678be5.gif"
                    alt="Chatbot Background"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    position="absolute"
                    zIndex={-1}
                    opacity={0.8}
               />

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
               >
                    <Heading
                         mb={4}
                         fontSize={{ base: "2xl", md: "3xl" }}
                         fontWeight="extrabold"
                         lineHeight="short"
                         textShadow="0px 4px 6px rgba(36, 34, 34, 0.8)"
                    >
                         Welcome To ChatBot Pro!
                    </Heading>
                    <Text
                         mb={6}
                         fontSize={{ base: "md", md: "lg" }}
                         fontWeight="semibold"
                         opacity={0.9}
                         lineHeight="1.8"
                         letterSpacing="wide"
                         bgGradient="linear(to-r, teal.300, blue.500)"
                         bgClip="text"
                         textShadow="1px 1px 4px rgba(0, 0, 0, 0.6)"
                    >
                         Chat with your virtual assistant and explore endless possibilities.
                         Ready to start?
                    </Text>

                    <Button
                         bgGradient="linear(to-r, #ff7e5f, #feb47b)"
                         color="white"
                         _hover={{
                              bgGradient: "linear(to-r, #feb47b, #ff7e5f)",
                              transform: "scale(1.05)",
                         }}
                         size="lg"
                         px={8}
                         py={6}
                         fontSize="lg"
                         fontWeight="bold"
                         borderRadius="full"
                         boxShadow="md"
                         transition="all 0.3s ease"
                         onClick={handleNavigate}
                    >
                         Get Started
                    </Button>
               </Box>

               <Box
                    position="absolute"
                    bottom="20px"
                    left="50%"
                    transform="translateX(-50%)"
                    color="white"
                    fontSize="sm"
                    textAlign="center"
                    opacity={0.8}
               ></Box>
          </Box>
     );
}

export default Home;
