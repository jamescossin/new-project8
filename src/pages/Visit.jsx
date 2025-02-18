import React from "react";
import { Box, Heading, Text, VStack, Icon, Link } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const VisitUs = () => {
  return (
    <Box maxW="600px" mx="auto" p={6} textAlign="center">
      <Heading mb={4}>Visit Us</Heading>
      <VStack spacing={4} align="center">
        <Box>
          <Icon as={FaMapMarkerAlt} boxSize={6} color="teal.500" />
          <Text mt={2} fontSize="lg">
            123 Main Street, City, Country
          </Text>
        </Box>
        <Box>
          <Icon as={FaPhone} boxSize={6} color="teal.500" />
          <Text mt={2} fontSize="lg">+123 456 7890</Text>
        </Box>
        <Box>
          <Icon as={FaEnvelope} boxSize={6} color="teal.500" />
          <Text mt={2} fontSize="lg">
            <Link href="mailto:info@example.com" color="teal.500">
              info@example.com
            </Link>
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default VisitUs;