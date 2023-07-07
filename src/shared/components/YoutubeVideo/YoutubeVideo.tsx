interface Props {
  videoUrl: string;
  size?: "small" | "normal";
}

export const YoutubeVideo: React.FC<Props> = ({ videoUrl, size }) => {
  const width = size && size === "small" ? "280" : "560";
  const height = size && size === "small" ? "158" : "315";
  return (
    <iframe
      width={width}
      height={height}
      src={videoUrl}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
    ></iframe>
  );
};
