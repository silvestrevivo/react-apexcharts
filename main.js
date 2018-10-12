// Chart options
const options = {
  chart: {
    height: 450,
    witdh: "100%",
    type: "bar",
    background: "#f4f4f4",
    foreColor: "#333"
  },
  series: [
    {
      name: "Population", // name is up to you
      data: [
        // this could be from a API
        8550405,
        3971883,
        2720546,
        2296224,
        1567442,
        1563025,
        1469845,
        1394928,
        1300092,
        1026908
      ]
    }
  ],
  xaxis: {
    categories: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Philadelphia",
      "Phoenix",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose"
    ]
  }
};

// Init chart
const chart = new ApexCharts(document.getElementById("chart"), options);

// Render chart
chart.render();
