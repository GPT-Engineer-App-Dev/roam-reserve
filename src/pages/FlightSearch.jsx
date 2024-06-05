import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Select, HStack } from "@chakra-ui/react";

const FlightSearch = () => {
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    // Implement search logic here
    console.log({
      departureCity,
      destinationCity,
      departureDate,
      returnDate,
      passengers,
    });
  };

  return (
    <Container centerContent maxW="container.md" p={4}>
      <VStack spacing={4} width="100%">
        <Heading as="h2" size="xl" textAlign="center" color="brand.800">
          Search for Flights
        </Heading>
        <FormControl id="departure-city">
          <FormLabel>Departure City</FormLabel>
          <Input
            type="text"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
            placeholder="Enter departure city"
          />
        </FormControl>
        <FormControl id="destination-city">
          <FormLabel>Destination City</FormLabel>
          <Input
            type="text"
            value={destinationCity}
            onChange={(e) => setDestinationCity(e.target.value)}
            placeholder="Enter destination city"
          />
        </FormControl>
        <HStack spacing={4} width="100%">
          <FormControl id="departure-date">
            <FormLabel>Departure Date</FormLabel>
            <Input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </FormControl>
          <FormControl id="return-date">
            <FormLabel>Return Date</FormLabel>
            <Input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </FormControl>
        </HStack>
        <FormControl id="passengers">
          <FormLabel>Number of Passengers</FormLabel>
          <Select
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSearch}>
          Search Flights
        </Button>
      </VStack>
    </Container>
  );
};

export default FlightSearch;