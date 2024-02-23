import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../store/configStore";
import { getDataChart, getPlotLine } from "./features/chartIndex";
import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts";
import { _getDateTs} from "../../util/util";
import { TProps } from "../../model/Index";

const ChartIndex: React.FC<TProps> = ({ name, san }: TProps) => {
  const { dataChartIndex } = useAppSelector((state) => state.chartIndex);
  const [dataSpline, setDataSpline] = useState<any>([]);
  const [dataBar, setDataBar] = useState<any>([]);
  const [indexValue, setIndexValue] = useState<number>(0);
  //console.log('index Value:'+indexValue,'index line:'+dataSpline, 'index dataBar:'+dataBar);
  console.log(indexValue,dataSpline,dataBar);
  useEffect(() => {
    if (san === "HSX") {
      const data = getDataChart(dataChartIndex, name);
      const value = getPlotLine(dataChartIndex, name);

      setIndexValue(value);
      setDataSpline(data[0]);
      setDataBar(data[1]);
    } else {
      if (san === "HNX") {
        const data = getDataChart(dataChartIndex, name);
        const value = getPlotLine(dataChartIndex, name);
        setIndexValue(value);
        setDataBar(data[1]);
        setDataSpline(data[0]);
      }
    }
  }, [dataChartIndex, name, san]);
  const highchartsOptions = Highcharts && Highcharts.getOptions();
  const colors = highchartsOptions?.colors;
  const opacityColor = colors
    ? Highcharts.color(colors[0]).setOpacity(0).get("rgba")
    : "#ffffff";
  console.log(opacityColor);
  const options = {
    chart: {
      marginTop: 0,
      marginRight: 0,
      marginLeft: 0,
      marginBottom: 20,
      plotBorderWidth: 1,
      plotBorderColor: "#545454",
      plotBackgroundColor: {
        linearGradient: [0, 0, 50, 380],
        stops: [
          [0, "#080808"],
          [1, "#a08909"],
        ],
        reflow: true,
      },
      borderRadius: 2,
      backgroundColor: "#1A1D1F",
      width: 300,
      height: 100,
      events: {
        load: function (this: Highcharts.Chart) {
          const xAxis = this.xAxis[0];
          const today = new Date();
          const dd = today.getDate();
          const mm = today.getMonth(); //January is 0!
          const yyyy = today.getFullYear();
          const HH1 = 9;
          const HH2 = 15;
          const MM = 0; // minute

          const xminTmp = new Date(yyyy, mm, dd, HH1, MM);
          const xmaxTmp = new Date(yyyy, mm, dd, HH2, MM);

          const xmin = _getDateTs(xminTmp);
          const xmax = _getDateTs(xmaxTmp);
          xAxis.setExtremes(xmin, xmax, true, false);
        },
      },
    },
    accessibility: {
      enabled: false, // Tắt tính năng khả năng truy cập
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        hour: "%Hh",
      },
      gridLineWidth: 1.5,
      gridLineColor: "#35353550",
      lineWidth: 0,
      tickWidth: 0,
      minPadding: 0,
      maxPadding: 0,
      tickInterval: 3600000,
      labels: {
        useHTML: true,
        style: {
          color: "#a5a5a5",
          fontSize: "10px",
          fontBold: "500",
        },
      },
      offset: -9,
      zIndex: 1,
    },
    yAxis: [
      {
        title: {
          text: "",
        },
        labels: {
          enabled: false,
        },
        gridLineWidth: 0,
        opposite: true,
        lineWidth: 0,
      },
      {
        title: {
          text: "",
        },
        endOnTick: true,
        lineWidth: 0,
        labels: {
          enabled: false,
        },
        gridLineWidth: 0,
        tickAmount: 10,

        plotLines: [
          {
            color: "#6F767E",
            width: 1.5,
            value: indexValue,
            zIndex: 10,
            dashStyle: "ShortDash",
            label: {
              text: indexValue,
              align: "center",
              style: {
                color: "#fff",
                fontSize: "10px",
                fontBold: "500",
              },
              x: -10,
            },
          },
        ],
      },
    ],
    time: {
      useUTC: false,
    },

    tooltip: {
      // followPointer: true,
      shadow: false,
      backgroundColor: "#ffffffc9",
      borderColor: "#07d800",
      borderRadius: 5,
      borderWidth: 1,
      padding: 6,
      useHTML: true,
      style: {
        width: 150,
        fontSize: "11px",
        fontWeight: "500",
        position: "relative",
        top: 400,
      },
      shared: true,
    },
    legend: {
      symbolPadding: 0,
      symbolWidth: 0,
      symbolHeight: 0,
      squareSymbol: false,
      enabled: false,
    },
    plotOptions: {
      spline: {
        color: "#1AAF74",
      
        lineWidth: 1.5,
        marker: {
          enabled: false,
          states: {
            hover: {
              animation: {
                duration: 500,
              },
              enabled: true,
              radius: 0,
              radiusPlus: 2,
              lineColor: "white",
              fillColor: "white",
            },
          },
        },
        zones: [
          {
            value: indexValue,
            color: "#F34859",
            // color: "#1AAF74",
          },
          {
            // color: "#00c010",
            color: "#1AAF74",
          },
        ],
      
      },
      column: {
        color: "#3b82f680",
        borderWidth: 0,
        borderRadius: 0,
        pointWidth: 0.2,
        states: {
          hover: {
            enabled: true,
          },
        },
      },
    },
    series: [
      {
        name: "Bar",
        type: "column",
        yAxis: 0,
        data: dataBar,
      },
      {
        name: "Spline",
        type: "spline",
        yAxis: 1,
        data: dataSpline,
      
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, "#1AAF74"],
            [1, opacityColor],
          ],
        },
      },
    ],
    // responsive: {
    //   rules: [
    //     {
    //       condition: {
    //         maxWidth: 200,
    //       },
    //       // Make the labels less space demanding on mobile
    //       chartOptions: {
    //         yAxis: {
    //           labels: {
    //             align: "left",
    //             x: 0,
    //             y: -2,
    //           },
    //           title: {
    //             text: "",
    //           },
    //         },
    //       },
    //     },
    //   ],
    // },
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
     // containerProps={{ style: { width: "100%" } }}
    />
  );
};

export default ChartIndex;
