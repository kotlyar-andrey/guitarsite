import { Chord } from "../model/interfaces";
import { HorizontalChord } from "./HorizontalChord";
import { VerticalChord } from "./VerticalChord";

interface Props {
  chord: Chord;
  orientation?: "horizontal" | "vertical";
}

export const ChordView = ({ chord, orientation }: Props) => {
  return orientation === "vertical" ? (
    <VerticalChord chord={chord} />
  ) : (
    <HorizontalChord chord={chord} />
  );
};
