import { Container, VStack, Heading, Text, Box, Divider } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const { bookingDetails } = location.state || {};

  if (!bookingDetails) {
    return (
      <Container centerContent maxW="container.md" p={4}>
        <VStack spacing={4} width="100%">
          <Heading as="h2" size="xl" textAlign="center" color="brand.800">
            Booking Confirmation
          </Heading>
          <Text fontSize="lg" textAlign="center" color="gray.600">
            No booking details found.
          </Text>
        </VStack>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" p={4}>
      <VStack spacing={4} width="100%">
        <Heading as="h2" size="xl" textAlign="center" color="brand.800">
          Booking Confirmation
        </Heading>
        <Box width="100%" p={4} borderWidth={1} borderRadius="md" borderColor="gray.200">
          <Text fontSize="lg" fontWeight="bold">Confirmation Number:</Text>
          <Text fontSize="lg" mb={4}>{bookingDetails.confirmationNumber}</Text>
          <Divider />
          <Text fontSize="lg" fontWeight="bold" mt={4}>Flight Information:</Text>
          <Text fontSize="lg">From: {bookingDetails.departureCity}</Text>
          <Text fontSize="lg">To: {bookingDetails.destinationCity}</Text>
          <Text fontSize="lg">Departure Date: {bookingDetails.departureDate}</Text>
          <Text fontSize="lg">Return Date: {bookingDetails.returnDate}</Text>
          <Divider />
          <Text fontSize="lg" fontWeight="bold" mt={4}>Passenger Details:</Text>
          {bookingDetails.passengers.map((passenger, index) => (
            <Text fontSize="lg" key={index}>Passenger {index + 1}: {passenger}</Text>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;