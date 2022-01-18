import React from "react"
import ContentLoader from "react-content-loader"

const StepLoading = (props) => (
  <ContentLoader 
    speed={0.5}
    width={440}
    height={440}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="16" rx="0" ry="0" width="440" height="440" />
  </ContentLoader>
)

export default StepLoading