import { useTheme } from "next-themes";
import { Beat } from "../model/interfaces";
import { getA11yLabel, getPlunkColors } from "./util";
import { useMounted } from "~/shared/hooks/mounted";
import { Loading } from "~/shared/components/Loading";

interface Props {
  beat: Beat;
}

export const PlunkView: React.FC<Props> = ({ beat }) => {
  const inscriptionHeight = 12;
  const oneFretSize = (100 - inscriptionHeight) / beat.strikes.length;

  const { theme } = useTheme();
  const colors = getPlunkColors(theme);

  const mounted = useMounted();

  if (!mounted) return <Loading />;

  return (
    <svg
      height="100%"
      width="100%"
      viewBox="0 0 40 100"
      aria-label={getA11yLabel(beat)}
    >
      <symbol id="t" viewBox="0 0 40 40">
        <circle cx="22" cy="20" r="15" strokeWidth="2" fill="transparent" />
        <text
          fontSize="22"
          x="22"
          y="28"
          textAnchor="middle"
          letterSpacing="1"
          fill={colors.beat}
        >
          T
        </text>
      </symbol>
      <symbol id="downup" viewBox="0 0 40 40">
        <line x1="10" y1="0" x2="10" y2="40" strokeWidth={2} />
        <line x1="5" y1="25" x2="10" y2="40" strokeWidth={1} />
        <line x1="15" y1="25" x2="10" y2="40" strokeWidth={1} />
        <line x1="30" y1="0" x2="30" y2="40" strokeWidth={2} />
        <line x1="30" y1="0" x2="25" y2="15" strokeWidth={2} />
        <line x1="30" y1="0" x2="35" y2="15" strokeWidth={2} />
      </symbol>
      <symbol id="fret1" viewBox="0 0 40 40">
        <text fontSize="28" x="22" y="32" textAnchor="middle" letterSpacing="1">
          1
        </text>
      </symbol>
      <symbol id="fret2" viewBox="0 0 40 40">
        <text fontSize="28" x="22" y="32" textAnchor="middle" letterSpacing="1">
          2
        </text>
      </symbol>
      <symbol id="fret3" viewBox="0 0 40 40">
        <text fontSize="28" x="22" y="32" textAnchor="middle" letterSpacing="1">
          3
        </text>
      </symbol>
      <symbol id="fret4" viewBox="0 0 40 40">
        <text fontSize="28" x="22" y="32" textAnchor="middle" letterSpacing="1">
          4
        </text>
      </symbol>
      <rect
        x={1}
        y={1}
        width={38}
        height={98}
        stroke={colors.secondary}
        strokeWidth={1}
        fill="transparent"
      />
      {beat.inscription && (
        <text
          fill={colors.inscription}
          fontSize="8"
          x="20"
          y={inscriptionHeight - 2}
          textAnchor="middle"
        >
          {beat.inscription}
        </text>
      )}
      {beat.strikes.map((fret, fretIndex) => {
        switch (fret) {
          case "t":
            return (
              <g key={`fret${fretIndex}`} stroke={colors.beat}>
                <use
                  href="#t"
                  x={(40 - oneFretSize) / 2}
                  y={fretIndex * oneFretSize + inscriptionHeight}
                  width={oneFretSize}
                  height={oneFretSize}
                  stroke={colors.beat}
                />
              </g>
            );
          case "downup":
            return (
              <g key={`fret${fretIndex}`} stroke={colors.beat}>
                <use
                  href="#downup"
                  x={(40 - oneFretSize) / 2}
                  y={fretIndex * oneFretSize + inscriptionHeight}
                  width={oneFretSize}
                  height={oneFretSize}
                />
              </g>
            );
          case "1":
          case "2":
          case "3":
          case "4":
            return (
              <g key={`fret${fretIndex}`} stroke={colors.beat}>
                <use
                  href={`#fret${fret}`}
                  x={(40 - oneFretSize) / 2}
                  y={fretIndex * oneFretSize + inscriptionHeight}
                  width={oneFretSize}
                  height={oneFretSize}
                  stroke={colors.beat}
                  fill={colors.beat}
                />
              </g>
            );
          default:
            break;
        }
      })}
    </svg>
  );
};
