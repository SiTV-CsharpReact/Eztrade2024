import React, { useEffect, useState } from 'react'
import {  useAppSelector } from '../../store/configStore';
import { getDataChart, getPlotLine } from './features/chartIndex';
import { HighchartsReact } from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { formatNumber } from '../../util/util';
import { red } from '@mui/material/colors';
import { TProps } from '../../model/Index';

   function formatNumberToM(value: any) {
    // Kiểm tra nếu giá trị lớn hơn hoặc bằng 1 triệu
    if (value >= 1000000) {
      // Chia cho 1 triệu và làm tròn đến 2 chữ số thập phân
      return (value / 1000000).toFixed(2) + "M";
    } else {
      // Giữ nguyên giá trị nếu nhỏ hơn 1 triệu
      if (!value || value === 0 || value === "0") return 0; // hoac ''
      else return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
  }
  function _getDateTs(dateTime: any): number {
    let d: number = 0; // Khởi tạo biến d với kiểu number và gán giá trị ban đầu là 0
    if (dateTime instanceof Date) { // Kiểm tra xem dateTime có phải là một đối tượng Date không
        d = dateTime.getTime(); // Lấy thời gian Unix của dateTime
    } else if (typeof dateTime === 'string') { // Kiểm tra xem dateTime có kiểu là string không
        d = new Date(dateTime).getTime(); // Chuyển đổi chuỗi thành đối tượng Date và lấy thời gian Unix
    }
    return d; // Trả về giá trị thời gian Unix
}

const ChartIndex: React.FC<TProps> = ({ name, san }: TProps) => {
  
    const { dataChartIndex } = useAppSelector((state) => state.chartIndex);
    const [dataSpline, setDataSpline] = useState<any>([]);
    const [dataBar, setDataBar] = useState<any>([]);
    const [indexValue, setIndexValue] = useState<number>(0);
    // console.log(indexValue,dataSpline);

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
          borderRadius:2,
          backgroundColor: "#1A1D1F",
        /* The commented lines `// width: 300, // height: 100,` are setting the width and height of the
        chart. By uncommenting these lines and providing specific values, you can set the width and
        height of the chart to a fixed size. However, in the current code, these lines are commented
        out, which means the chart will take up the full width and height of its container element. */
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
              fontBold:'500'
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
                color: "#FFFF00",
                width: 1,
                value: indexValue,
                zIndex: 10,
                dashStyle: 'ShortDash',
                label: {
                  text: indexValue,
                  align: 'center',
                  style: {
                    color: '#fff',
                    fontSize: '10px',
                    fontBold:'500'
                  },
                  x: -10
              }
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
            top:400
          },
          shared: true,
          formatter: function (this: Highcharts.TooltipFormatterContextObject){
            const points = this.points;
            const index: any = points?.map((point, ind) => {
              if (ind === 1) {
                if (point.y !== null && point.y !== undefined) {
                  if (point.y >= indexValue) {
                    point.series.chart.tooltip.options.borderColor = "#07d800";
                  } else {
                    point.series.chart.tooltip.options.borderColor = "red";
                  }
                  return { x: point.x, y: point.y };
                }
              }
              return "";
            });
          
            const hour: any = new Date(Number(index[1].x)).getHours();
            const minutes =
              new Date(Number(index[1].x)).getMinutes().toString().length === 1
                ? "0" + new Date(Number(index[1].x)).getMinutes()
                : new Date(Number(index[1].x)).getMinutes();
          
            return `
           
            <span style="color:#000">Thời gian: <b style="font-size:12px;font-weight:600;color:#000" class="font-bold text-sm">${
              hour + ":" + minutes
            }</b></span><br/><span style="color:#000">Index:  <b style="font-size:12px;color:#000" class="font-bold text-sm">${
              index[1].y
            }</b></span><br/>${
              this.y === 0
                ? ""
                : `<span style="color:#000">Khối lượng: <b style="font-size:12px;color:#000" class="font-bold text-sm">${formatNumber(
                    formatNumberToM(this.y)
                  )} </b></span>`
            } `;
          },
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
            lineWidth: 1.5,
            marker: {
              enabled: false,
              states: {
                hover: {
                  animation: {
                    duration: 500,
                  },
                  enabled: true,
                        radius:0,
                        radiusPlus:2,
                        lineColor: 'white',
                        fillColor: 'white'
                },
              },
            },
           
            zones: [
              {
                value: 1000,
                color: red,
              },
              {
                // color: "#00c010",
                color: "#00FF00",
              },
            ],
          },
          column: {
            color: "#5F9DFE",
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
         
          },
        ],
        responsive: {
          rules: [{
              condition: {
                  maxWidth: 200
              },
              // Make the labels less space demanding on mobile
              chartOptions: {
                  
                  yAxis: {
                      labels: {
                          align: 'left',
                          x: 0,
                          y: -2
                      },
                      title: {
                          text: ''
                      }
                  }
              }
          }]
      }
      };
  return (
    <HighchartsReact highcharts={Highcharts} options={options}  containerProps={{ style: { width: '100%'} }} />
  )
}

export default ChartIndex