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
  ChartConfig,
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

// ✅ Import datasets
import { datasets2, Point2 } from "./data/chart-data-2";

// On laisse les couleurs mais on traduit les labels via i18next
const chartConfig = {
  new_followers: { label: "new_followers", color: "var(--chart-1)" },
  new_likes: { label: "new_likes", color: "var(--chart-2)" },
} satisfies ChartConfig;

const parseYYYYMMDDToUTC = (d: string) => new Date(d + "T00:00:00Z");

function ChartAreaInteractive2({
  dataset,
}: {
  dataset:
    | "resultats-1"
    | "resultats-2"
    | "resultats-3"
    | "resultats-4"
    | "resultats-5"
    | "resultats-6";
}) {
  const { t } = useTranslation();
  const [timeRange, setTimeRange] = React.useState<"90d" | "30d" | "7d">("7d");
  const { data7d, data30d, data90d } = datasets2[dataset];
  const data: Point2[] =
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
      <div className="flex flex-wrap justify-center gap-4 px-4 pt-6 text-black">
        {metricKeys.map((key) => {
          const isActive = activeKeys.has(key);
          return (
            <label
              key={key}
              className="flex items-center space-x-2 text-sm cursor-pointer"
            >
              <input
                type="checkbox"
                checked={isActive}
                onChange={() => toggleKey(key)}
                className="peer sr-only"
              />
              <span className="flex h-5 w-5 items-center justify-center rounded border border-black bg-white peer-checked:bg-white">
                {isActive && (
                  <svg
                    className="h-3 w-3 text-black"
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
              <span className="flex items-center gap-1">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: chartConfig[key].color,
                    opacity: isActive ? 1 : 0.3,
                  }}
                />
                <span
                  style={{
                    color: "black",
                    opacity: isActive ? 1 : 0.6,
                  }}
                >
                  {t(`resultats.chart1.legend1.${chartConfig[key].label}`)}
                </span>
              </span>
            </label>
          );
        })}
      </div>
    );
  }

  return (
    <Card className="pt-0 bg-white text-black">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 space-y-0 border-b py-4 sm:py-5">
        <div className="flex-1 text-left">
          <CardTitle className="text-base sm:text-lg font-bold text-black">
            {t("resultats.chart1.title")}
          </CardTitle>
          <CardDescription className="text-gray-700 text-sm sm:text-base">
            {t("resultats.chart1.description")}
          </CardDescription>
        </div>

        {/* ✅ Sélecteur visible aussi sur mobile */}
        <Select
          value={timeRange}
          onValueChange={(v) => setTimeRange(v as "90d" | "30d" | "7d")}
        >
          <SelectTrigger
            className="w-full sm:w-[160px] rounded-lg text-black text-sm sm:text-base"
            aria-label="Select a value"
          >
            <SelectValue placeholder={t("resultats.chart1.range.90d")} />
          </SelectTrigger>
          <SelectContent className="rounded-xl bg-white text-black">
            <SelectItem value="90d">{t("resultats.chart1.range.90d")}</SelectItem>
            <SelectItem value="30d">{t("resultats.chart1.range.30d")}</SelectItem>
            <SelectItem value="7d">{t("resultats.chart1.range.7d")}</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[260px] w-full bg-white"
        >
          <AreaChart data={data} style={{ backgroundColor: "white" }}>
            <CartesianGrid vertical={false} stroke="#e5e7eb" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              stroke="black"
              tick={{ fill: "black" }}
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
              tick={{ fill: "black" }}
              width={28}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="bg-white text-black border border-gray-300 shadow-md"
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

            {activeKeys.has("new_followers") && (
              <Area
                dataKey="new_followers"
                type="monotone"
                fill="var(--chart-1)"
                stroke="var(--chart-1)"
                strokeWidth={2}
              />
            )}

            {activeKeys.has("new_likes") && (
              <Area
                dataKey="new_likes"
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

export default ChartAreaInteractive2;
