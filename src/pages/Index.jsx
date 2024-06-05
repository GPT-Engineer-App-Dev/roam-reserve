import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center" color="brand.800">
          Welcome to Travel Booking
        </Heading>
        <Text fontSize="xl" textAlign="center" color="gray.600">
          Your one-stop solution for booking flights, hotels, and car rentals.
        </Text>
        <Flex justifyContent="center" wrap="wrap" spacing={4}>
          <Box textAlign="center" p={4}>
            <Link to="/flight-search">
              <Button leftIcon={<FaPlane />} colorScheme="teal" size="lg">
                Book a Flight
              </Button>
            </Link>
          </Box>
          <Box textAlign="center" p={4}>
            <Button leftIcon={<FaHotel />} colorScheme="teal" size="lg">
              Book a Hotel
            </Button>
          </Box>
          <Box textAlign="center" p={4}>
            <Button leftIcon={<FaCar />} colorScheme="teal" size="lg">
              Rent a Car
            </Button>
          </Box>
        </Flex>
        <Box boxSize="sm" mt={8}>
          <Image src="/images/travel-landing.jpg" alt="Travel" objectFit="cover" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;