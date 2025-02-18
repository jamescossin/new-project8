import { Box, Button, Container, Heading, Image, Stack, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.800" color="white" py={20} textAlign="center">
        <Container maxW="container.lg">
          <VStack spacing={6}>
            <Heading as="h1" size="2xl">
              Welcome to Trojan Diner & Sports Bar
            </Heading>
            <Text fontSize="xl">
              A family-friendly restaurant offering a wide variety of delicious food.
            </Text>
            <Button as={Link} to="/menu" colorScheme="yellow" size="lg">
              View Our Menu
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Featured Image */}
      <Box>
        <Image
          src="http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/delicious-food"
          alt="Delicious Food at Trojan Diner & Sports Bar"
          width="100%"
          height="500px"
          objectFit="cover"
        />
      </Box>

      {/* About Section */}
      <Container maxW="container.lg" py={16}>
        <Stack direction={{ base: "column", md: "row" }} spacing={10} align="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/restaurant-interior"
            alt="Trojan Diner & Sports Bar Interior"
            width="50%"
            borderRadius="lg"
          />
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="xl">
              About Us
            </Heading>
            <Text fontSize="lg">
              At Trojan Diner & Sports Bar, we take pride in serving delicious meals in a cozy and welcoming atmosphere.
              Whether you're here for a family dinner or to catch a game, we have something for everyone.
            </Text>
            <Button as={Link} to="/about" colorScheme="yellow">
              Learn More
            </Button>
          </VStack>
        </Stack>
      </Container>

      {/* Menu Preview Section */}
      <Box bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={10}>
            Explore Our Menu
          </Heading>
          <HStack spacing={6} justify="center">
            <VStack>
              <Image
                src="http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/burger"
                alt="Burger"
                width="250px"
                borderRadius="lg"
              />
              <Text fontSize="lg">Tasty Burgers</Text>
            </VStack>
            <VStack>
              <Image
                src="http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/pizza"
                alt="Pizza"
                width="250px"
                borderRadius="lg"
              />
              <Text fontSize="lg">Delicious Pizza</Text>
            </VStack>
            <VStack>
              <Image
                src="http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/steak"
                alt="Steak"
                width="250px"
                borderRadius="lg"
              />
              <Text fontSize="lg">Juicy Steaks</Text>
            </VStack>
          </HStack>
          <VStack mt={8}>
            <Button as={Link} to="/menu" colorScheme="yellow">
              View Full Menu
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Sports Bar Section */}
      <Container maxW="container.lg" py={16}>
        <Stack direction={{ base: "column", md: "row" }} spacing={10} align="center">
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="xl">
              Catch the Game With Us
            </Heading>
            <Text fontSize="lg">
              Enjoy live sports on our big screens while treating yourself to great food and drinks!
            </Text>
            <Button as={Link} to="/sports-bar" colorScheme="yellow">
              Learn More
            </Button>
          </VStack>
          <Image
            src="http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/sports-bar"
            alt="Sports Bar"
            width="50%"
            borderRadius="lg"
          />
        </Stack>
      </Container>

      {/* Footer Section */}
      <Box bg="gray.800" color="white" py={10} textAlign="center">
        <Container maxW="container.lg">
          <Text fontSize="lg">© {new Date().getFullYear()} Trojan Diner & Sports Bar. All rights reserved.</Text>
          <Divider my={4} borderColor="gray.600" />
          <HStack spacing={6} justify="center">
            <Button as={Link} to="/contact" colorScheme="yellow">
              Contact Us
            </Button>
            <Button as={Link} to="/about" colorScheme="yellow">
              About Us
            </Button>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;