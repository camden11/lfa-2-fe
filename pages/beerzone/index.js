import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import Layout from "~/components/layout";
import { nightView as placeholderData } from "data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Camden", "Chris", "John", "Kacper", "Marcus", "Ryan", "Yuvi"];

const options = {
  indexAxis: "y",
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Tonight's beers",
    },
  },
};

const Beerzone = ({ beerData }) => {
  const sortedData = beerData.sort((boyA, boyB) => {
    return boyA.totalDrinks > boyB.totalDrinks ? -1 : 1;
  });
  const labels = sortedData.map((boy) => boy.name);
  const data = sortedData.map((boy) => boy.totalDrinks);
  const chartData = {
    labels,
    datasets: [
      {
        label: "Beers",
        data,
        backgroundColor: "rgba(236, 157, 0, 0.75)",
      },
    ],
  };
  return (
    <Layout>
      <h1>Beerzone</h1>
      <Bar options={options} data={chartData} />
    </Layout>
  );
};

export const getServerSideProps = (ctx) => {
  return {
    props: {
      beerData: placeholderData,
    },
  };
};

export default Beerzone;
