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
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  fill: {
    colors: ["#67908C"]
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: "React ApexCharts",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "35px",
      color: "#F06020",
      fontFamily: ["Lucida Grande", "sans-serif"]
    }
  }
};

// Init chart
const chart = new ApexCharts(document.getElementById("chart"), options);

// Render chart
chart.render();

// Events
let button = document.getElementById("button");
button.addEventListener("click", () => {
  let disposition = options.plotOptions.bar.horizontal;
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: !disposition
      }
    }
  });
  options.plotOptions.bar.horizontal = !disposition;
  button.innerHTML = disposition === true ? "Horizontal" : "Vertical";
});
