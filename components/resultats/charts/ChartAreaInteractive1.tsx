"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  chartDataResultats1,
  chartDataResultats2,
  chartDataResultats3,
  chartDataResultats4,
  chartDataResultats5,
  chartDataResultats6,
  Point,
} from "./data/chart-data";

// ✅ Définir type propre pour config
type CustomChartConfig = Record<
  string,
  { labelKey: string; color: string }
>;

const chartConfig: CustomChartConfig = {
  post_like: {
    labelKey: "resultats.chart2.legend2.post_like",
    color: "var(--chart-1)",
  },
  follow: {
    labelKey: "resultats.chart2.legend2.follow",
    color: "var(--chart-2)",
  },
  story_like: {
    labelKey: "resultats.chart2.legend2.story_like",
    color: "var(--chart-3)",
  },
  swipe_feed: {
    labelKey: "resultats.chart2.legend2.swipe_feed",
    color: "var(--chart-4)",
  },
};

const datasets = {
  "resultats-1": chartDataResultats1,
  "resultats-2": chartDataResultats2,
  "resultats-3": chartDataResultats3,
  "resultats-4": chartDataResultats4,
  "resultats-5": chartDataResultats5,
  "resultats-6": chartDataResultats6,
} as const;

const parseYYYYMMDDToUTC = (d: string) => new Date(d + "T00:00:00Z");

function ChartAreaInteractive1({
  dataset,
}: {
  dataset: keyof typeof datasets;
}) {
  const { t } = useTranslation();
  const [timeRange, setTimeRange] = React.useState<"90d" | "30d" | "7d">("7d");

  const { data7d, data30d, data90d } = datasets[dataset];
  const data: Point[] =
    timeRange === "7d" ? data7d : timeRange === "30d" ? data30d : data90d;

  const metricKeys = Object.keys(chartConfig) as (keyof typeof chartConfig)[];
  const [activeKeys, setActiveKeys] = React.useState<Set<string>>(
    new Set(metricKeys)
  );

  const toggleKey = (key: string) => {
    setActiveKeys((prev) => {
      const copy = new Set(prev);
      if (copy.has(key)) {
        copy.delete(key);
      } else {
        copy.add(key);
      }
      return copy;
    });
  };

  function CustomLegend({
    activeKeys,
    toggleKey,
  }: {
    activeKeys: Set<string>;
    toggleKey: (key: string) => void;
  }) {
    return (
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 px-2 sm:px-4 pt-4 text-xs sm:text-sm text-black">
        {metricKeys.map((key) => {
          const isActive = activeKeys.has(key);
          return (
            <label
              key={key}
              className="flex items-center space-x-1 sm:space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={isActive}
                onChange={() => toggleKey(key)}
                className="peer sr-only"
              />
              <span className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded border border-black bg-white peer-checked:bg-white">
                {isActive && (
                  <svg
                    className="h-2 w-2 sm:h-3 sm:w-3 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
              <span
                className="flex items-center gap-1"
                style={{
                  color: "black",
                  opacity: isActive ? 1 : 0.6,
                }}
              >
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: chartConfig[key].color,
                    opacity: isActive ? 1 : 0.3,
                  }}
                />
                {t(chartConfig[key].labelKey)}
              </span>
            </label>
          );
        })}
      </div>
    );
  }

  return (
    <Card className="pt-0 bg-white text-black">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b py-4 sm:py-5">
        <div className="flex-1 text-left">
          <CardTitle className="text-base sm:text-lg font-bold text-black">
            {t("resultats.chart2.title")}
          </CardTitle>
          <CardDescription className="text-gray-700 text-sm sm:text-base">
            {t("resultats.chart2.description")}
          </CardDescription>
        </div>

        <Select
          value={timeRange}
          onValueChange={(v) => setTimeRange(v as "90d" | "30d" | "7d")}
        >
          <SelectTrigger className="w-full sm:w-[160px] rounded-lg text-black text-sm sm:text-base">
            <SelectValue placeholder={t("resultats.chart2.range.90d")} />
          </SelectTrigger>
          <SelectContent className="rounded-xl bg-white text-black">
            <SelectItem value="90d">{t("resultats.chart2.range.90d")}</SelectItem>
            <SelectItem value="30d">{t("resultats.chart2.range.30d")}</SelectItem>
            <SelectItem value="7d">{t("resultats.chart2.range.7d")}</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="px-1 sm:px-6 pt-4 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[220px] sm:h-[260px] w-full bg-white"
        >
          <AreaChart data={data} style={{ backgroundColor: "white" }}>
            <CartesianGrid vertical={false} stroke="#e5e7eb" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={6}
              minTickGap={16}
              stroke="black"
              tick={{ fill: "black", fontSize: 10 }}
              tickFormatter={(value) =>
                parseYYYYMMDDToUTC(String(value)).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "short",
                })
              }
            />
            <YAxis
              domain={[0, "dataMax + 1"]}
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              stroke="black"
              tick={{ fill: "black", fontSize: 10 }}
              width={24}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="bg-white text-black border border-gray-300 shadow-md text-xs sm:text-sm"
                  labelFormatter={(value: string | number) =>
                    parseYYYYMMDDToUTC(String(value)).toLocaleDateString(
                      "fr-FR",
                      {
                        weekday: "short",
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )
                  }
                />
              }
            />

            {activeKeys.has("story_like") && (
              <Area
                dataKey="story_like"
                type="monotone"
                fill="var(--chart-3)"
                stroke="var(--chart-3)"
                strokeWidth={2}
              />
            )}
            {activeKeys.has("post_like") && (
              <Area
                dataKey="post_like"
                type="monotone"
                fill="var(--chart-1)"
                stroke="var(--chart-1)"
                strokeWidth={2}
              />
            )}
            {activeKeys.has("swipe_feed") && (
              <Area
                dataKey="swipe_feed"
                type="monotone"
                fill="var(--chart-4)"
                stroke="var(--chart-4)"
                strokeWidth={2}
              />
            )}
            {activeKeys.has("follow") && (
              <Area
                dataKey="follow"
                type="monotone"
                fill="var(--chart-2)"
                stroke="var(--chart-2)"
                strokeWidth={2}
              />
            )}

            <ChartLegend
              content={
                <CustomLegend activeKeys={activeKeys} toggleKey={toggleKey} />
              }
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default ChartAreaInteractive1;
