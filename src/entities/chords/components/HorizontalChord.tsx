import React from "react";

import { Chord } from "../model/interfaces";

import {
  getRoomeNumber,
  getTonicCoords,
  getStrokeWidth,
  getNoteColors,
  getA11yLabel,
  getA11yHint,
} from "./utils";

interface Props {
  chord: Chord;
}

export const HorizontalChord: React.FC<Props> = ({ chord }) => {
  const { x: tonicX, y: tonicY } = getTonicCoords("horizontal", chord.title[0]);

  const strings = [0, 1, 2, 3, 4, 5];

  const frets = [0, 1, 2, 3, 4];

  const fretNumbers = [0, 1, 2, 3];

  const stringEnd = chord.start_lad === 1 ? 190 : 195;

  const dark = false;

  const fillColor = dark ? "white" : "black";

  return (
    <svg height="100%" width="100%" viewBox="0 0 200 100">
      {/* Название */}
      <text fill={fillColor} fontSize="10" x="100" y="7" textAnchor="middle">
        {chord.title}
      </text>
      <text
        fill={fillColor}
        fontSize="8"
        fontWeight="bold"
        x="100"
        y="14"
        textAnchor="middle"
      >
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
          x1="10"
          y1={94 - string * 12}
          x2={stringEnd}
          y2={94 - string * 12}
          stroke={dark ? "#eee" : "grey"}
          strokeWidth={getStrokeWidth(string)}
        />
      ))}
      {/* Лады */}
      {frets.map((fret) => (
        <line
          key={`fretN${fret}`}
          x1={10 + fret * 45}
          y1="25"
          x2={10 + fret * 45}
          y2="94"
          stroke={dark ? "#F9F9F9" : "gray"}
          strokeWidth={fret === 4 && chord.start_lad === 1 ? 4 : 1}
        />
      ))}
      {/* Номера ладов */}
      {fretNumbers.map((fret) => (
        <text
          key={`fretNumberN${fret}`}
          fill={fillColor}
          fontSize="9"
          x={168 - fret * 45}
          y="25"
        >
          {getRoomeNumber(chord.start_lad + fret)}
        </text>
      ))}
      {/* Ноты */}
      {chord.bare && (
        <>
          <ellipse
            cx="168"
            cy="64"
            rx="5"
            ry="32"
            stroke="red"
            strokeWidth="0.5"
            fill="pink"
          />
          <text fill="red" fontSize="7" x="168" y="64" textAnchor="middle">
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
                x1="3"
                y1={94 - 12 * index - 2}
                x2="7"
                y2={94 - 12 * index + 2}
                stroke={dark ? "#f0f0f0" : "gray"}
                strokeWidth="1"
              />
              <line
                x1="3"
                y1={94 - 12 * index + 2}
                x2="7"
                y2={94 - 12 * index - 2}
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
                cx={168 - (realLad - 1) * 45}
                cy={94 - 12 * index}
                r="5"
                fill={fillColor}
                stroke={textColor}
                strokeWidth="0.5"
              />
              <text
                fill={textColor}
                fontSize="9"
                x={168.8 - (realLad - 1) * 45}
                y={97 - 12 * index}
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
