// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="flex-1 p-6">
//       <h1 className="text-3xl font-bold mb-4 animate-fade-in">
//         Welcome to Your Dashboard
//       </h1>
//       <div className="grid grid-cols-3 gap-4">
//         <div className="p-5 bg-white shadow rounded-lg transition-transform duration-300 hover:scale-105">
//           📊 Sales Data
//         </div>
//         <div className="p-5 bg-white shadow rounded-lg transition-transform duration-300 hover:scale-105">
//           📈 Growth Metrics
//         </div>
//         <div className="p-5 bg-white shadow rounded-lg transition-transform duration-300 hover:scale-105">
//           💰 Revenue Overview
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import {
  SciChartSurface,
  NumericAxis,
  FastLineRenderableSeries,
  XyDataSeries,
  EllipsePointMarker,
  XyScatterRenderableSeries,
  StackedColumnCollection,
  StackedColumnRenderableSeries,
  FastMountainRenderableSeries,
  SciChartPieSurface,
  PieSegment,
  SciChartJsNavyTheme,
  LegendModifier,
  RolloverModifier,
  MouseWheelZoomModifier,
  ZoomPanModifier,
  ZoomExtentsModifier,
} from "scichart";
import { SciChartReact } from "scichart-react";

const strokeColors = ["#274b92", "#47bde6", "#ae418d", "#e97064", "#68bcae"];
const fillColors = [
  "#274b9288",
  "#47bde688",
  "#ae418d88",
  "#e9706488",
  "#68bcae88",
];

const initLineChart = async (rootElement) => {
  const { sciChartSurface, wasmContext } = await SciChartSurface.create(
    rootElement,
    {
      theme: new SciChartJsNavyTheme(),
    }
  );
  const xAxis = new NumericAxis(wasmContext);
  const yAxis = new NumericAxis(wasmContext);
  sciChartSurface.xAxes.add(xAxis);
  sciChartSurface.yAxes.add(yAxis);

  const lineSeries = new FastLineRenderableSeries(wasmContext, {
    dataSeries: new XyDataSeries(wasmContext, {
      xValues: [1, 2, 3, 4, 5],
      yValues: [2, 4, 6, 8, 10],
      dataSeriesName: "Line Series",
    }),
    stroke: strokeColors[0],
  });
  sciChartSurface.renderableSeries.add(lineSeries);

  sciChartSurface.chartModifiers.add(new LegendModifier());
  sciChartSurface.chartModifiers.add(
    new RolloverModifier({ showRolloverLine: true, showTooltip: true })
  );
  sciChartSurface.chartModifiers.add(new MouseWheelZoomModifier());
  sciChartSurface.chartModifiers.add(new ZoomPanModifier());
  sciChartSurface.chartModifiers.add(new ZoomExtentsModifier());

  return { sciChartSurface };
};

const initScatterChart = async (rootElement) => {
  const { sciChartSurface, wasmContext } = await SciChartSurface.create(
    rootElement,
    {
      theme: new SciChartJsNavyTheme(),
    }
  );
  const xAxis = new NumericAxis(wasmContext);
  const yAxis = new NumericAxis(wasmContext);
  sciChartSurface.xAxes.add(xAxis);
  sciChartSurface.yAxes.add(yAxis);

  const scatterSeries = new XyScatterRenderableSeries(wasmContext, {
    dataSeries: new XyDataSeries(wasmContext, {
      xValues: [1, 2, 3, 4, 5],
      yValues: [3, 5, 7, 9, 11],
      dataSeriesName: "Scatter Series",
    }),
    pointMarker: new EllipsePointMarker(wasmContext, {
      width: 10,
      height: 10,
      stroke: strokeColors[1],
      fill: fillColors[1],
    }),
  });
  sciChartSurface.renderableSeries.add(scatterSeries);

  sciChartSurface.chartModifiers.add(new LegendModifier());
  sciChartSurface.chartModifiers.add(
    new RolloverModifier({ showRolloverLine: true, showTooltip: true })
  );
  sciChartSurface.chartModifiers.add(new MouseWheelZoomModifier());
  sciChartSurface.chartModifiers.add(new ZoomPanModifier());
  sciChartSurface.chartModifiers.add(new ZoomExtentsModifier());

  return { sciChartSurface };
};
const initStackedColumnChart = async (rootElement) => {
  const { sciChartSurface, wasmContext } = await SciChartSurface.create(
    rootElement,
    {
      theme: new SciChartJsNavyTheme(),
    }
  );
  const xAxis = new NumericAxis(wasmContext);
  const yAxis = new NumericAxis(wasmContext);
  sciChartSurface.xAxes.add(xAxis);
  sciChartSurface.yAxes.add(yAxis);

  const stackedColumnCollection = new StackedColumnCollection(wasmContext);
  const series1 = new StackedColumnRenderableSeries(wasmContext, {
    dataSeries: new XyDataSeries(wasmContext, {
      xValues: [1, 2, 3, 4, 5],
      yValues: [2, 3, 4, 5, 6],
      dataSeriesName: "Stacked Column Series 1",
    }),
    stroke: strokeColors[2],
    fill: fillColors[2],
  });
  const series2 = new StackedColumnRenderableSeries(wasmContext, {
    dataSeries: new XyDataSeries(wasmContext, {
      xValues: [1, 2, 3, 4, 5],
      yValues: [1, 2, 3, 4, 5],
      dataSeriesName: "Stacked Column Series 2",
    }),
    stroke: strokeColors[3],
    fill: fillColors[3],
  });
  stackedColumnCollection.add(series1, series2);
  sciChartSurface.renderableSeries.add(stackedColumnCollection);

  sciChartSurface.chartModifiers.add(new LegendModifier());
  sciChartSurface.chartModifiers.add(
    new RolloverModifier({ showRolloverLine: true, showTooltip: true })
  );
  sciChartSurface.chartModifiers.add(new MouseWheelZoomModifier());
  sciChartSurface.chartModifiers.add(new ZoomPanModifier());
  sciChartSurface.chartModifiers.add(new ZoomExtentsModifier());

  return { sciChartSurface };
};

const initMountainChart = async (rootElement) => {
  const { sciChartSurface, wasmContext } = await SciChartSurface.create(
    rootElement,
    {
      theme: new SciChartJsNavyTheme(),
    }
  );
  const xAxis = new NumericAxis(wasmContext);
  const yAxis = new NumericAxis(wasmContext);
  sciChartSurface.xAxes.add(xAxis);
  sciChartSurface.yAxes.add(yAxis);

  const mountainSeries = new FastMountainRenderableSeries(wasmContext, {
    dataSeries: new XyDataSeries(wasmContext, {
      xValues: [1, 2, 3, 4, 5],
      yValues: [5, 4, 3, 2, 1],
      dataSeriesName: "Mountain Series",
    }),
    fill: fillColors[4],
  });
  sciChartSurface.renderableSeries.add(mountainSeries);

  sciChartSurface.chartModifiers.add(new LegendModifier());
  sciChartSurface.chartModifiers.add(
    new RolloverModifier({ showRolloverLine: true, showTooltip: true })
  );
  sciChartSurface.chartModifiers.add(new MouseWheelZoomModifier());
  sciChartSurface.chartModifiers.add(new ZoomPanModifier());
  sciChartSurface.chartModifiers.add(new ZoomExtentsModifier());

  return { sciChartSurface };
};

const initPieChart = async (rootElement) => {
  const sciChartSurface = await SciChartPieSurface.create(rootElement, {
    theme: new SciChartJsNavyTheme(),
  });
  const pieChartData = [
    { value: 40, text: "Segment 1", color: strokeColors[0] },
    { value: 30, text: "Segment 2", color: strokeColors[1] },
    { value: 20, text: "Segment 3", color: strokeColors[2] },
    { value: 10, text: "Segment 4", color: strokeColors[3] },
  ];

  pieChartData.forEach((segment) =>
    sciChartSurface.pieSegments.add(new PieSegment(segment))
  );

  return { sciChartSurface };
};

const Dashboard = () => {
  SciChartSurface.loadWasmFromCDN();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: "#1a2a4a",
        padding: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <SciChartReact
            initChart={initLineChart}
            style={{ width: "100%", height: "400px" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <SciChartReact
            initChart={initScatterChart}
            style={{ width: "100%", height: "400px" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <SciChartReact
            initChart={initStackedColumnChart}
            style={{ width: "100%", height: "400px" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <SciChartReact
            initChart={initMountainChart}
            style={{ width: "100%", height: "400px" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <SciChartReact
            initChart={initPieChart}
            style={{ width: "100%", height: "400px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
