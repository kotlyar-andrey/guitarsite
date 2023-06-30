import { Beat } from "../model/interfaces";

interface Props {
  beat: Beat;
}

export const BeatView: React.FC<Props> = ({ beat }) => {
  const oneBeatWidth = 200 / beat.strikes.length;
  const color = "blue";
  const color2 = "#e0e0e0";
  return (
    <svg height="100%" width="100%" viewBox="0 0 200 100">
      <symbol id="down" viewBox="0 0 10 100">
        <line x1="5" y1="0" x2="5" y2="96" strokeWidth={3} />
        <line x1="5" y1="100" x2="9" y2="80" strokeWidth={1.2} />
        <line x1="5" y1="100" x2="1" y2="80" strokeWidth={1.2} />
      </symbol>
      <symbol id="up" viewBox="0 0 10 100">
        <line x1="5" y1="4" x2="5" y2="100" strokeWidth={3} />
        <line x1="5" y1="0" x2="9" y2="20" strokeWidth={1.2} />
        <line x1="5" y1="0" x2="1" y2="20" strokeWidth={1.2} />
      </symbol>
      <symbol id="x" viewBox="0 0 50 100">
        <text fontSize="36" x="25" y="80" textAnchor="middle" letterSpacing="1">
          Щ
        </text>
      </symbol>
      <rect
        x={1}
        y={1}
        width={198}
        height={98}
        stroke={color2}
        strokeWidth={1}
        fill="transparent"
      />
      {beat.inscription && (
        <text fill={color} fontSize="10" x="100" y="12" textAnchor="middle">
          {beat.inscription}
        </text>
      )}
      {beat.strikes.map((strike, strikeIndex) => {
        switch (strike) {
          case "down":
            return (
              <g key={`strike${strikeIndex}`} stroke={color}>
                <use
                  href="#down"
                  x={strikeIndex * oneBeatWidth}
                  y="20"
                  width={oneBeatWidth}
                  height="70"
                />
              </g>
            );
          case "up":
            return (
              <g key={`strike${strikeIndex}`} stroke={color}>
                <use
                  href="#up"
                  x={strikeIndex * oneBeatWidth}
                  y="20"
                  width={oneBeatWidth}
                  height="70"
                />
              </g>
            );
          case "x":
            return (
              <g key={`strike${strikeIndex}`} stroke={color} fill={color}>
                <use
                  href="#x"
                  x={strikeIndex * oneBeatWidth}
                  y="20"
                  width={oneBeatWidth}
                  height="70"
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
