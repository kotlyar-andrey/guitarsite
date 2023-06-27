import React from "react";
import { Chord } from "../model/interfaces";

interface Props {
  chord: Chord;
}

import {
  getRoomeNumber,
  getTonicCoords,
  getStrokeWidth,
  getNoteColors,
  getA11yLabel,
  getA11yHint,
} from "./utils";

export const VerticalChord = ({ chord }: Props) => {
  const { x: tonicX, y: tonicY } = getTonicCoords("vertical", chord.title[0]);

  const strings = [0, 1, 2, 3, 4, 5];

  const frets = [0, 1, 2, 3, 4];

  const fretNumbers = [0, 1, 2, 3];

  const stringBegin = chord.start_lad === 1 ? 30 : 25;

  const dark = false;

  const fillColor = dark ? "white" : "black";

  return (
    <svg height="100%" widths="100%" viewBox="0 0 100 200">
      {/* Название */}
      <text fill={fillColor} fontSize="16" x="50" y="12" textAnchor="middle">
        {chord.title}
      </text>
      <text fill={fillColor} fontSize="8" x="50" y="20" textAnchor="middle">
        {chord.muz_title}
      </text>

      {/* Тоника */}
      <text
        fill={fillColor}
        fontSize="6"
        fontWeight="bold"
        x={tonicX}
        y={tonicY}
        textAnchor="middle"
      >
        T
      </text>
      {/* Струны */}
      {strings.map((string) => (
        <line
          key={`stringN${string}`}
          x1={90 - string * 15}
          y1={stringBegin}
          x2={90 - string * 15}
          y2="190"
          stroke={dark ? "#eee" : "grey"}
          strokeWidth={getStrokeWidth(string)}
        />
      ))}

      {/* Лады */}
      {frets.map((fret) => (
        <line
          key={`fretN${fret}`}
          x1="10"
          y1={30 + fret * 40}
          x2="90"
          y2={30 + fret * 40}
          stroke={dark ? "#F9F9F9" : "gray"}
          strokeWidth={fret === 0 && chord.start_lad === 1 ? 4 : 1}
        />
      ))}

      {/* Номера ладов */}
      {fretNumbers.map((fret) => (
        <text
          key={`fretNumberN${fret}`}
          fill={fillColor}
          fontSize="9"
          x="2"
          y={53 + fret * 40}
        >
          {getRoomeNumber(chord.start_lad + fret)}
        </text>
      ))}

      {/* Ноты */}
      {chord.bare && (
        <>
          <ellipse
            cx="52.5"
            cy="50"
            rx="40"
            ry="6"
            stroke="red"
            strokeWidth="0.5"
            fill="pink"
          />

          <text fill="red" fontSize="8" x="52.5" y="52.5" textAnchor="middle">
            1
          </text>
        </>
      )}
      {chord.lads.map((fret, index) => {
        const realLad = fret.lad - chord.start_lad + 1;
        const number = fret.number;
        // Крестики
        if (fret.lad === -1) {
          return (
            <React.Fragment key={`fret-${chord.pk}-${index}`}>
              <line
                x1={90 - 15 * index - 2}
                y1="22"
                x2={90 - 15 * index + 2}
                y2="18"
                stroke={dark ? "#f0f0f0" : "gray"}
                strokeWidth="1"
              />
              <line
                x1={90 - 15 * index - 2}
                y1="18"
                x2={90 - 15 * index + 2}
                y2="22"
                stroke={dark ? "#f0f0f0" : "gray"}
                strokeWidth="1"
              />
            </React.Fragment>
          );
        } else if (fret.lad !== 0) {
          const { fillColor, textColor } = getNoteColors(number);
          return (
            <React.Fragment key={`lad-${chord.pk}-${index}`}>
              <circle
                cx={90 - 15 * index}
                cy={(realLad - 1) * 40 + 50}
                r="7"
                fill={fillColor}
                stroke={textColor}
                strokeWidth="0.5"
              />
              <text
                fill={textColor}
                fontSize="9"
                x={90 - 15 * index}
                y={(realLad - 1) * 40 + 52}
                textAnchor="middle"
              >
                {number}
              </text>
            </React.Fragment>
          );
        }
      })}
    </svg>
  );
};
