import { Beat, BeatColors } from "../model/interfaces";

export const getA11yLabel = (beat: Beat): string => {
  const title = `${beat.beat_type === 0 ? "Бой" : "Перебор"} ${
    beat.inscription
  } `;
  const resultString = beat.strikes
    .map((strike) => {
      switch (strike) {
        case "up":
          return "Вверх";
        case "down":
          return "Вниз";
        case "x":
          return "Щелчок";
        case "t":
          return "Тоника";
        case "downup":
          return "Вниз-вверх";
        case "1":
          return "Первая";
        case "2":
          return "Вторая";
        case "3":
          return "Третья";
        case "4":
          return "Четвертая";
        default:
          return "";
      }
    })
    .join(" ");
  return title + resultString;
};

export const getBeatColors = (themeName: string | undefined): BeatColors => {
  return themeName?.includes("dark")
    ? {
        secondary: "#000000",
        inscription: "#e9e9e9",
        beat: "#7777ff",
      }
    : {
        secondary: "#eeeeee",
        inscription: "#2d2d2d",
        beat: "#0000ff",
      };
};

export const getPlunkColors = (themeName: string | undefined): BeatColors => {
  return themeName?.includes("dark")
    ? {
        secondary: "#000000",
        inscription: "#e9e9e9",
        beat: "#7777ff",
      }
    : {
        secondary: "#eeeeee",
        inscription: "#2d2d2d",
        beat: "#000077",
      };
};
