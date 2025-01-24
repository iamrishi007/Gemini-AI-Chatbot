import { useState } from "react";

import axios from "axios";
import { Box, Button, Input, Text, Flex, Spinner, Heading, IconButton, Image } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGeminiApi = async () => {
    if (!question.trim()) {
      alert("Please enter a question!");
      return;
    }

    setLoading(true);

    try {
     
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
   
      
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          contents: [
            {
              parts: [{ text: question }],
            },
          ],
        }
      );

      const generatedAnswer =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No answer generated.";
      setAnswer(generatedAnswer);
    } catch (error) {
      console.error("Error while fetching the answer:", error);
      setAnswer("Failed to fetch the answer. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const copyAnswer = () => {
    navigator.clipboard.writeText(answer);
    alert("Answer copied to clipboard!");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <Box
        position="relative"
        h="100vh"
        w="100vw"
        bgGradient="linear(to-b, rgba(0,0,0,0.6), rgba(0,0,0,0.9))"
        overflow="hidden"
      >
        <Image
          src="https://i.pinimg.com/originals/2e/00/05/2e0005b76c7fb072b477a2e4b2678be5.gif"
          alt="Dashboard Background"
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
          zIndex={1}
        >
          <Heading
            mb={4}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="extrabold"
            lineHeight="short"
            letterSpacing="wide"
            bgGradient="linear(to-r, teal.300, blue.500)"
            bgClip="text"
            textShadow="1px 1px 4px rgba(0, 0, 0, 0.6)"
          >
            Your Virtual Friend is Here!
          </Heading>

          <Input
            placeholder="Ask your question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            size="lg"
            bg="white"
            border="none"
            _placeholder={{ color: "gray.400" }}
            color="black"
            focusBorderColor="teal.400"
            borderRadius={"18px"}
          />

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
            onClick={handleGeminiApi}
            isDisabled={loading}
            m={"15px"}
          >
            {loading ? <Spinner size="sm" /> : "Generate Answer"}
          </Button>

          {answer && (
            <Box
              bg="gray.800"
              p={5}
              borderRadius="md"
              shadow="lg"
              w="full"
              position="relative"
              textAlign="left"
              mt={6}
              maxHeight="400px"
              overflowY="auto"
            >
              <Text fontSize="md" color="gray.300">
                {answer}
              </Text>
              <IconButton
                icon={<CopyIcon />}
                position="absolute"
                top="1"
                right="1"
                size="sm"
                colorScheme="white"
                onClick={copyAnswer}
                aria-label="Copy Answer"
              />
            </Box>
          )}
        </Box>

        <Flex justifyContent="flex-end" p={4}>
          <Button
            bgGradient="linear(to-r, #ff7e5f, #feb47b)"
            color="white"
            _hover={{
              bgGradient: "linear(to-r, #feb47b, #ff7e5f)",
              transform: "scale(1.05)",
            }}
            size="lg"
            px={8}
            py={5}
            fontSize="lg"
            fontWeight="bold"
            borderRadius="full"
            boxShadow="md"
            transition="all 0.3s ease"
            textAlign="left"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default Dashboard;
