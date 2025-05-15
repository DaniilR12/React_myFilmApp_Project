import React from "react";
import ContentLoader from "react-content-loader"

export type SkeletonProps = React.ComponentProps<typeof ContentLoader>;

const SkeletonLoadingTrailer:React.FC<SkeletonProps> = (props) => (
  <ContentLoader 
    speed={2}
    width={1309}
    height={683}
    viewBox="0 0 1309 683"
    backgroundColor="#313030"
    foregroundColor="#5e5e5e"
    {...props}
  >
    <rect x="0" y="0" rx="38" ry="38" width="1309" height="683" />
  </ContentLoader>
)

export default SkeletonLoadingTrailer
