export default function Picture({
  src,
  alt,
  className = "spcom_img-filter",
  inlineStyle = {},
  mediaOverRide
}) {
  const imageFormats = ["webp", "jpg"]; // Define the supported formats 

  // Define media query sizes in ascending order
  let mediaSizes = [
    { size: 640, query: "(min-width: 640px)" },
    { size: 150, query: "(min-width: 414px)" },
    { size: 150, query: "(min-width: 150px)" },
  ];

  // check media override is provided then update the media array
  if (mediaOverRide && mediaOverRide.length > 0) mediaSizes = mediaOverRide;

  const generateSourceSet = (src, sizes, formats) => {
    return sizes
      .map((size, index) => {
        return formats.map((format) => {
          // only webp will be appended as extension
          const sourceURL =
            format === "webp" && (src && src.indexOf("-imcv2") > -1)
              ? `${src}-w${sizes[index]}.${format}`
              : `${src}-w${sizes[index]}`;
          return format === "webp" ? (
            <source
              key={`${format}-${size}`}
              media={mediaSizes[index].query}
              srcSet={sourceURL}
              type="image/webp"
            />
          ) : (
            <source
              key={`${format}-${size}`}
              media={mediaSizes[index].query}
              srcSet={sourceURL}
            />
          );
        });
      })
      .flat();
  };

  return (
    <picture className="spcom_picture_container">
      {generateSourceSet(
        src,
        mediaSizes.map((item) => item.size),
        imageFormats
      )}
      <img src={`${src}`} alt={alt} className={className} style={{...inlineStyle}}/>
    </picture>
  );
}
