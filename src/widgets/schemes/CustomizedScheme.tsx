import { Scheme, SchemeView } from "~/entities/schemes";
import { useSongSettings } from "~/features/songSettings";
import { useStore } from "~/shared/hooks/store";

interface Props {
  scheme: Scheme;
}

export const CustomizedScheme: React.FC<Props> = ({ scheme }) => {
  const schemeSize = useStore(useSongSettings, (state) => state.schemeSize);
  const size = schemeSize || 3;
  const height = size * 50 + 20;

  const imageSizeCoef = scheme.width / scheme.height;

  const width = height * imageSizeCoef;

  const fontSize = `${size * 4 + 3}px`;

  return (
    <div style={{ fontSize }}>
      <SchemeView scheme={scheme} width={width} height={height} />
    </div>
  );
};
