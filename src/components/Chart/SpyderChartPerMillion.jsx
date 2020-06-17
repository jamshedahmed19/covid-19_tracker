import { Radar } from "react-chartjs-2";
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

export default function SpyderChartPerMillion() {
  const { globalData } = useContext(GlobalContext);
  return (
    <div>
      <Radar
        data={{
          labels: [
            "Infected Per Million",
            "Recovered Per Million",
            "Deaths Per Million",
            "Active Per Million",
            "Critical Per Million",
          ],
          datasets: [
            {
              label: "Global Stats Per Million",
              backgroundColor: "rgba(231,67,61, 0.45)",
              borderColor: "rgba(231,67,61,0.45)",
              pointRadius: 0,
              data: [
                globalData.casesPerOneMillion,
                globalData.recoveredPerOneMillion,
                globalData.deathsPerOneMillion,
                globalData.activePerOneMillion,
                globalData.criticalPerOneMillion,
              ],
            },
          ],
        }}
        options={{
          responsive: true,
          legend: { display: false },
          title: { display: false },
          scale: {
            ticks: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
