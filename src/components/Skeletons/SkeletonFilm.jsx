import ContentLoader from "react-content-loader"

const SkeletonFilm = (props) => (
  <ContentLoader 
    speed={2}
    width={130}
    height={200}
    viewBox="0 0 130 200"
    backgroundColor="#313030"
    foregroundColor="#5e5e5e"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="130" height="200" />
  </ContentLoader>
)

export default SkeletonFilm

