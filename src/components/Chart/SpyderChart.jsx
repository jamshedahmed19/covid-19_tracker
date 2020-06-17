import { Radar } from "react-chartjs-2";
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

export default function SpyderChart() {
  const { globalData } = useContext(GlobalContext);
  return (
    <div>
      <Radar
        data={{
          labels: ["Infected", "Recovered", "Deaths", "Active", "Critical"],
          datasets: [
            {
              label: "Global Stats Total",
              backgroundColor: "rgba(255,150,0,0.25)",
              borderColor: "rgba(255,152,0,0.45)",
              pointRadius: 0,
              data: [
                globalData.cases,
                globalData.recovered,
                globalData.deaths,
                globalData.active,
                globalData.critical,
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
