import ContentLoader from "react-content-loader";

const CardSceleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={150}
      height={200}
      viewBox="0 0 150 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="-1" rx="10" ry="10" width="150" height="90" />
      <rect x="0" y="110" rx="3" ry="3" width="150" height="15" />
      <rect x="0" y="135" rx="3" ry="3" width="93" height="15" />
      <rect x="0" y="173" rx="8" ry="8" width="80" height="24" />
      <rect x="115" y="165" rx="8" ry="8" width="32" height="32" />
    </ContentLoader>
  );
};

export default CardSceleton;
