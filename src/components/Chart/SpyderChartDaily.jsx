
import { Doughnut } from "react-chartjs-2";

import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

export default function SpyderChartDaily() {
  const { globalData } = useContext(GlobalContext);
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "Daily Stats",
              backgroundColor: ["#ff9800", "#4caf50", "#f44336"],
              borderColor: ["#ff9800", "#4caf50", "#f44336"],
              data: [
                globalData.todayCases,
                globalData.todayRecovered,
                globalData.todayDeaths,
              ],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: false },
        }}
      />
    </div>
  );
}
