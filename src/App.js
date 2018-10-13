import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  state = {
    options: {
      chart: {
        background: "#f4f4f4",
        foreColor: "#333"
      },
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
        style: {
          fontSize: "35px",
          color: "#5f9ea0",
          fontFamily: ["Lucida Grande", "sans-serif"]
        }
      }
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
    ]
  };

  disposition = () => {
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal
          }
        }
      }
    });
  };

  render() {
    let disposition = this.state.options.plotOptions.bar.horizontal;
    return (
      <div className="container">
        <React.Fragment>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width="100%"
            height="500"
          />
          <button onClick={this.disposition}>
            {disposition === true ? "Horizontal" : "Vertical"}
          </button>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
