import React, { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useColorModeValue,
  Button,
  VStack,
  HStack,
  Select,
} from "@chakra-ui/react";

const data = [
  {
    date: "Mar 10, 24",
    newInventory: 241,
    newTotalMsrp: "$9,109,873",
    newAverageMsrp: "$37,800",
    usedInventory: 83,
    usedTotalMsrp: "$2,274,985",
    usedAverageMsrp: "$27,409",
    usedAverageMsrpValue: "$437,488",
  },
  {
    date: "Mar 01, 24",
    newInventory: 241,
    newTotalMsrp: "$9,109,873",
    newAverageMsrp: "$37,800",
    usedInventory: 83,
    usedTotalMsrp: "$2,274,985",
    usedAverageMsrp: "$27,409",
    usedAverageMsrpValue: "$437,488",
  },
  {
    date: "Feb 29, 24",
    newInventory: 241,
    newTotalMsrp: "$9,109,873",
    newAverageMsrp: "$37,800",
    usedInventory: 83,
    usedTotalMsrp: "$2,274,985",
    usedAverageMsrp: "$27,409",
    usedAverageMsrpValue: "$437,488",
  },
  {
    date: "Feb 28, 24",
    newInventory: 241,
    newTotalMsrp: "$9,109,873",
    newAverageMsrp: "$37,800",
    usedInventory: 83,
    usedTotalMsrp: "$2,274,985",
    usedAverageMsrp: "$27,409",
    usedAverageMsrpValue: "$437,488",
  },
  {
    date: "Feb 10, 24",
    newInventory: 241,
    newTotalMsrp: "$9,109,873",
    newAverageMsrp: "$37,800",
    usedInventory: 83,
    usedTotalMsrp: "$2,274,985",
    usedAverageMsrp: "$27,409",
    usedAverageMsrpValue: "$437,488",
  },
  {
    date: "Feb 10, 24",
    newInventory: 241,
    newTotalMsrp: "$9,109,873",
    newAverageMsrp: "$37,800",
    usedInventory: 83,
    usedTotalMsrp: "$2,274,985",
    usedAverageMsrp: "$27,409",
    usedAverageMsrpValue: "$437,488",
  },
  {
    date: "Feb 10, 24",
    newInventory: 241,
    newTotalMsrp: "$9,109,873",
    newAverageMsrp: "$37,800",
    usedInventory: 83,
    usedTotalMsrp: "$2,274,985",
    usedAverageMsrp: "$27,409",
    usedAverageMsrpValue: "$437,488",
  },
  {
    date: "Feb 01, 24",
    newInventory: 241,
    newTotalMsrp: "$9,109,873",
    newAverageMsrp: "$37,800",
    usedInventory: 83,
    usedTotalMsrp: "$2,274,985",
    usedAverageMsrp: "$27,409",
    usedAverageMsrpValue: "$437,488",
  },
  // Add more rows as needed
];

const HistoryLogTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const tableBg = useColorModeValue("white", "gray.800");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box bg={tableBg} p={4} borderRadius="md" boxShadow="md">
      <TableContainer>
        <Table variant="simple">
          <TableCaption>History Log</TableCaption>
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>New Inventory</Th>
              <Th>New Total MSRP</Th>
              <Th>New Average MSRP</Th>
              <Th>Used Inventory</Th>
              <Th>Used Total MSRP</Th>
              <Th>Used Average MSRP</Th>
              <Th>Used Average MSRP Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <Tr key={index}>
                  <Td>{row.date}</Td>
                  <Td>{row.newInventory}</Td>
                  <Td>{row.newTotalMsrp}</Td>
                  <Td>{row.newAverageMsrp}</Td>
                  <Td>{row.usedInventory}</Td>
                  <Td>{row.usedTotalMsrp}</Td>
                  <Td>{row.usedAverageMsrp}</Td>
                  <Td>{row.usedAverageMsrpValue}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack mt={4} justifyContent={"flex-end"}>
        <Select
          width={10}
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
        </Select>
        <HStack>
          <Button
            onClick={() => handleChangePage(null, page - 1)}
            isDisabled={page === 0}
          >
            Previous
          </Button>
          <Button
            onClick={() => handleChangePage(null, page + 1)}
            isDisabled={page >= Math.ceil(data.length / rowsPerPage) - 1}
          >
            Next
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default HistoryLogTable;
