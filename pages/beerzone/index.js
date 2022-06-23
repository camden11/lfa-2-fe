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
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
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

const chartData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 2, 10, 3, 4, 2, 1],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const Beerzone = ({ data }) => {
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
      data: placeholderData,
    },
  };
};

export default Beerzone;
