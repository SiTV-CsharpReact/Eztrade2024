// Styling
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement, // Thêm BarElement vào để đăng ký phần tử cần thiết cho biểu đồ cột
  ScriptableContext,
  TimeScale,
  Chart 
} from "chart.js";

import annotationPlugin from "chartjs-plugin-annotation";
import datas from "../../../data.json";
// import 'chartjs-adapter-moment';
ChartJS.register(
  // Chart.momentAdapter,
  TimeScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement, // Đăng ký BarElement để sử dụng biểu đồ cột
  annotationPlugin
);
const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

export function LineChartGradient() {
  const data = () => {
    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "First dataset",
          data: datas,
          fill: "start",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "#407a5c");
            gradient.addColorStop(0.3, "#405d4e");
            gradient.addColorStop(0.5, "#2f3c3a");
            gradient.addColorStop(0.6, "#292f33");
            gradient.addColorStop(1, "#272c30");
  
            return gradient;
          },
          borderColor: "#1AAF74",
          // segment: {
          //   borderColor: (ctx: any) => {
          //     const xVal = ctx.p1.parsed.y;
  
          //     if (xVal <= 60) {
          //       return "#f34859";
          //     } else {
          //       return "#6ADBAE";
          //     }
          //   },
          // },
          pointStyle: "hidden",
          yAxisID: "y",
        },
        {
          label: "Two dataset",
          data: [30, 63, 75, 49, 34, 65], // Dữ liệu của dòng thứ hai
          fill: false,
          borderDash: [5, 5],
          // type:"dot-line",
          borderColor: "#EEC382",
          // segment: {
          //   borderColor: (ctx: any) => {
          //     const xVal = ctx.p1.parsed.y;
  
          //     if (xVal <= 60) {
          //       return "#f34859";
          //     } else {
          //       return "#6ADBAE";
          //     }
          //   },
          // },
          pointStyle: "hidden",
          yAxisID: "y1",
        },
      ],
    };
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      // xAxis: {
      //   // The axis for this scale is determined from the first letter of the id as `'x'`
      //   // It is recommended to specify `position` and / or `axis` explicitly.
      //   type: 'time',
      // },
      x: {
        // type: 'time',
        // display: true,
        // time:{
        //   unit: "minute",
        // },
        // time: {
        //   unit: "minute",
        //   displayFormats: {
        //     minute: "HH:mm"
        //   }
        // },
        // dateTimeLabelFormats: {
        //   hour: "%Hh",
        // },
        // min: 1987,
        // max: 1989,
        beginAtZero: false, // bat dau tu 0
        grid: {
          display: false,
        },
      },
      y: {
        min: 1987,
        max: 1995,
        beginAtZero: true,
        grid:{
            display:false
        }
      },
    },
    elements: {
      line: {
        tension: 0.35,
      },
      point: {
        radius: 0,
        hitRadius: 10,
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
      annotation: {
        // Thêm phần annotation
        annotations: [
          {
            type: "line",
            mode: "horizontal",
            scaleID: "y",
            value: 1987.3, // Giá trị y của đường ghi chú
            borderColor: "#6f767e", // Màu của đường ghi chú
            borderWidth: 2, // Độ dày của đường ghi chú
            borderDash: [5, 5], // Kiểu nét đứt của đường ghi chú (tùy chọn)
            label: {
              content: "Giới hạn", // Nội dung của ghi chú
              enabled: true, // Cho phép hiển thị ghi chú
            },
          },
        ],
      },
    },
    interaction: {
      intersect: true,
    },
  };

  return (
    <div className="h-30 w-[400px]">
      <Line data={data()} options={options} />
    </div>
  );
}
