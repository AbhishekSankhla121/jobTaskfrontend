import React from "react";
import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  Select,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const {
    loading,
    newConditionUnits,
    usedConditionUnits,
    cpoConditionUnits,
    newConditionMsrp,
    usedConditionMsrp,
    cpoConditionMsrp,
    newConditionAverage,
    cpoConditionAverage,
    usedConditionAverage,
    infoGraphSatsticalData,
  } = useSelector((state) => state.info);
  const stats = [
    {
      label: "# New Units",
      value: loading ? "loading" : newConditionUnits,
      color: "orange",
    },
    {
      label: "New MSRP",
      value: loading ? "loading" : `$${newConditionMsrp}`,
      color: "orange",
    },
    {
      label: "New Avg. MSRP",
      value: loading ? "loading" : `$${newConditionAverage}`,
      color: "orange",
    },
    {
      label: "# Used Units",
      value: loading ? "loading" : usedConditionUnits,
      color: "gray",
    },
    {
      label: "Used MSRP",
      value: loading ? "loading" : `$${usedConditionMsrp}`,
      color: "gray",
    },
    {
      label: "Used Avg. MSRP",
      value: loading ? "loading" : `$${usedConditionAverage}`,
      color: "gray",
    },
    {
      label: "# CPO Units",
      value: loading ? "loading" : cpoConditionUnits,
      color: "gray",
    },
    {
      label: "CPO MSRP",
      value: loading ? "loading" : `$${cpoConditionMsrp}`,
      color: "gray",
    },
  ];
  const bg = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");

  const timestamps =
    infoGraphSatsticalData && infoGraphSatsticalData[12].timestamp[0];
  return (
    <Box bg={bg} minH="20" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Inventory
          </Text>
          <Text fontSize="sm" color="gray.500">
            Recent Gathered Data : {loading ? "loading" : timestamps}
          </Text>
        </Box>
        <Flex alignItems="center">
          <Select placeholder="Select Dealer" mr={4}>
            <option value="AAA MITSUBISHI DEALER">AAA MITSUBISHI DEALER</option>
          </Select>
          <Button>FILTER DATA BY</Button>
          <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} ml={4} />
            <MenuList>
              <MenuItem>Support</MenuItem>
              <MenuItem>Settings</MenuItem>
            </MenuList>
          </Menu>
          <Avatar name="Jane Doe" src="" ml={4} />
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} ml={2}>
              Jane
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 8 }} spacing={4} mb={4}>
        {stats.map((stat) => (
          <Box
            key={stat.label}
            p={4}
            bg={cardBg}
            borderRadius="md"
            boxShadow="md"
            textAlign="center"
          >
            <Text fontSize="lg" fontWeight="bold" color="gray.500">
              {stat.value}
            </Text>
            <Text fontSize="sm" color={"orange"}>
              {stat.label}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
