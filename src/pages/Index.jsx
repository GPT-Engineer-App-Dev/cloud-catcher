import { Box, Flex, Text, Button, VStack, Input, Heading, Container } from '@chakra-ui/react';
import { FaRocket, FaTools, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="brand.800" color="white" p={4} justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold">GPT Engineer</Text>
        <Flex gap="4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>
        </Flex>
      </Flex>
      <Container maxW="container.xl" pt={10}>
        <VStack spacing={10}>
          <Box textAlign="center">
            <Heading as="h1" size="2xl">Welcome to GPT Engineer</Heading>
            <Text fontSize="xl" mt={4}>Revolutionize your web development with AI.</Text>
            <Button mt={6} size="lg" colorScheme="blue" leftIcon={<FaRocket />}>Get Started</Button>
          </Box>
          <Flex direction={{ base: 'column', md: 'row' }} gap={10} justifyContent="center" alignItems="center">
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">Build Faster</Heading>
              <Text mt={4}>Speed up development by integrating AI into your workflow.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">Deploy Smarter</Heading>
              <Text mt={4}>Utilize advanced algorithms to optimize your deployments.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">Innovate Daily</Heading>
              <Text mt={4}>Stay ahead with cutting-edge technology.</Text>
            </Box>
          </Flex>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">About Us</Heading>
            <Text mt={4}>GPT Engineer is at the forefront of web development, offering innovative solutions that integrate seamlessly with your projects.</Text>
          </Box>
          <Box as="form" p={5} shadow="md" borderWidth="1px" borderRadius="md" gridGap={3} display="grid">
            <Heading fontSize="xl">Contact Us</Heading>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Button leftIcon={<FaEnvelope />} colorScheme="blue" type="submit">Send Message</Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;