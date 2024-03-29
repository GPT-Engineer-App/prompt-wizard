import React, { useState } from "react";
import { Box, Heading, Text, Textarea, Button, VStack, useToast } from "@chakra-ui/react";

const Index = () => {
  const [inputPrompt, setInputPrompt] = useState("");
  const [outputPrompt, setOutputPrompt] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    if (inputPrompt.trim() === "") {
      toast({
        title: "Please enter a prompt",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    // TODO: Integrate with GPT API to generate improved prompt
    const improvedPrompt = `Here is an improved version of your prompt:
    
- ${inputPrompt}
- Can you clarify what you mean by [unclear part]? 
- For example, instead of saying [vague description], try [specific example].
- Keep the prompt concise and focused on the key details.`;

    setOutputPrompt(improvedPrompt);
  };

  return (
    <Box p={4} minHeight="100vh" bgGradient="linear(to-br, blue.600, purple.600)">
      <VStack spacing={8} alignItems="stretch">
        <Heading as="h1" size="xl" textAlign="center" fontFamily="Times New Roman" color="white">
          GPT Prompt Assistant
        </Heading>

        <Box bgColor="white" p={6} borderRadius="lg" boxShadow="lg">
          <Text mb={2} fontWeight="bold">
            Enter your prompt:
          </Text>
          <Textarea value={inputPrompt} onChange={(e) => setInputPrompt(e.target.value)} placeholder="Type your prompt here..." size="lg" />
          <Button onClick={handleSubmit} colorScheme="blue" size="lg" mt={4} w="full">
            Improve Prompt
          </Button>
        </Box>

        {outputPrompt && (
          <Box bgColor="white" p={6} borderRadius="lg" boxShadow="lg">
            <Text mb={2} fontWeight="bold">
              Improved Prompt:
            </Text>
            <Text whiteSpace="pre-wrap">{outputPrompt}</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
