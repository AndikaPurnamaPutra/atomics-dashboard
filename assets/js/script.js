let barChart = document.getElementById("barChart");

new Chart(barChart, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        data: [
          135000, 54000, 115000, 19000, 89000, 162500, 84000, 58000, 24000,
          61000, 172800, 91000,
        ],
        backgroundColor: "rgb(143,178,229)",
        borderRadius: 50,
      },
      {
        label: "Outcome",
        data: [
          57000, 29000, 91000, 78000, 129000, 33000, 127000, 113000, 41000,
          104000, 50000, 119000,
        ],
        backgroundColor: "#E2EBF7",
        borderRadius: 50,
      },
    ],
  },
  options: {
    categoryPercentage: 0.35,
    barPercentage: 1,
    plugins: {
      legend: {
        display: false, // Menyembunyikan label
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawOnChartArea: false,
        },
      },
      y: {
        beginAtZero: true,
        display: false,
      },
    },
  },
});

// Doughnut Chart
// Data untuk chart
let total = 100;
let data1 = 20;
let data2 = 36;
let remaining = total - data1 - data2;

let data = {
  labels: ["Data 1", "Data 2", "Remaining"],
  datasets: [
    {
      data: [data1, data2, remaining],
      backgroundColor: [
        "rgba(255, 174, 99, 0.8)", // Warna untuk Data 1
        "rgba(143, 178, 230, 0.8)", // Warna untuk Data 2
        "rgba(180, 157, 231, 0.1)", // Warna untuk Sisa
      ],
      borderWidth: 0,
    },
  ],
};

// Konfigurasi chart
let options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Menyembunyikan label
    },
  },
};

// Mendapatkan elemen canvas dan membuat chart doughnut
let doughnutChart = new Chart(
  document.getElementById("doughnutChart").getContext("2d"),
  {
    type: "doughnut",
    data: data,
    options: options,
  }
);

// Line Chart
// Monthly
let chrt1 = document.getElementById("lineChartMonthly").getContext("2d");

let lineChartMonthly = new Chart(chrt1, {
  type: "line",
  data: {
    labels: ["", "", ""],
    datasets: [
      {
        label: "monthly",
        data: [20, 21.9, 23],
        backgroundColor: ["white"],
        borderColor: ["rgb(143,178,229)"],
        borderWidth: 2,
        pointRadius: 5,
        borderStyle: "dotted",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false, // Menyembunyikan label
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          drawBorder: false,
          drawOnChartArea: false,
          display: false,
        },
      },
      y: {
        reverse: true,
        grace: "5%",
        border: {
          dash: [8, 4],
        },
        grid: {
          drawBorder: false,
          display: true,
        },
        ticks: {
          stepSize: 1,
          min: 20,
          max: 23,
          callback: function (value, index, values) {
            return Math.round(value); // Menampilkan nilai tanpa desimal
          },
        },
      },
    },
  },
});

// Yearly
let chrt2 = document.getElementById("lineChartYearly").getContext("2d");

let lineChartYearly = new Chart(chrt2, {
  type: "line",
  data: {
    labels: ["", "", ""], // Tidak ada label pada sumbu X
    datasets: [
      {
        label: "yearly",
        data: [1, 2.2, 4], // Data numerik pada sumbu Y
        backgroundColor: ["white"],
        borderColor: ["#FFAE63"],
        borderWidth: 2,
        pointRadius: 5,
        borderStyle: "dotted",
      },
    ],
  },
  options: {
    indexAxis: 'y', // Memutar sumbu menjadi vertikal
    plugins: {
      legend: {
        display: false, // Menyembunyikan label
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          drawBorder: false,
          drawOnChartArea: false,
          display: false,
        },
      },
      y: {
        labels: ["Jan", "Feb", "Mar", "Apr"], // Label bulan diatur sebagai nilai sumbu Y
        grace: "5%",
        border: {
          dash: [8, 4],
        },
        grid: {
          drawBorder: false,
          display: true,
        },
      },
    },
  },
});
