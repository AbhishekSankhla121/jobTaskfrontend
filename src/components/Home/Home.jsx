import { useEffect, useState } from "react";
import BarChart from "./Barchart";
import HistoryLogTable from "./Table";
import Dashboard from "./dashboard";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions/getUser";
import { Button, Flex } from "@chakra-ui/react";

export default function Home() {
  const [condtion, setCondition] = useState("new");
  const { loading, infoGraphSatsticalData } = useSelector(
    (state) => state.info
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(condtion));
  }, [dispatch, condtion]);

  return (
    <>
      <Dashboard />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Flex justifyContent="center" mb={4}>
            <Button
              colorScheme={`${condtion === "new" ? "orange" : "gray"}`}
              mr={2}
              onClick={(e) => {
                e.preventDefault();
                setCondition("new");
              }}
            >
              NEW
            </Button>
            <Button
              colorScheme={`${condtion === "used" ? "orange" : "gray"}`}
              mr={2}
              onClick={(e) => {
                e.preventDefault();
                setCondition("used");
              }}
            >
              USED
            </Button>
            <Button
              colorScheme={`${condtion === "cpo" ? "orange" : "gray"}`}
              onClick={(e) => {
                e.preventDefault();
                setCondition("cpo");
              }}
            >
              CPO
            </Button>
          </Flex>
          {infoGraphSatsticalData && infoGraphSatsticalData.length > 0 ? (
            <div className="barchart">
              <BarChart
                timestamp={infoGraphSatsticalData.map(
                  (item) => item.timestamp[0]
                )}
                dataSet={infoGraphSatsticalData.map(
                  (item) => item.inventoryCount
                )}
                text={"daily Inventory Count"}
                labeltext={"Inventory Count"}
              />
              <BarChart
                timestamp={infoGraphSatsticalData.map(
                  (item) => item.timestamp[0]
                )}
                dataSet={infoGraphSatsticalData.map((item) =>
                  parseInt(item.averageMsrp)
                )}
                text={"daily Average Msrp in USD"}
                labeltext={"Average Msrp"}
              />
            </div>
          ) : (
            <h1>No data available</h1>
          )}
        </>
      )}
      <div className="history">
        <HistoryLogTable />
      </div>
    </>
  );
}
