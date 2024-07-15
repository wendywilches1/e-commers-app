import ContentLoader from "react-content-loader";

export function MyLoading(props) {
  return (
    <ContentLoader
      speed={1}
      width={1128}
      height={500}
      viewBox="0 0 1128 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="4" y="35" rx="0" ry="0" width="210" height="199" />
      <rect x="3" y="246" rx="5" ry="5" width="210" height="18" />
      <rect x="3" y="277" rx="5" ry="5" width="210" height="18" />
      <rect x="5" y="333" rx="5" ry="5" width="98" height="23" />
      <rect x="113" y="333" rx="5" ry="5" width="100" height="23" />
      <rect x="3" y="306" rx="5" ry="5" width="210" height="18" />
      <rect x="229" y="36" rx="0" ry="0" width="210" height="199" />
      <rect x="228" y="247" rx="5" ry="5" width="210" height="18" />
      <rect x="228" y="278" rx="5" ry="5" width="210" height="18" />
      <rect x="230" y="334" rx="5" ry="5" width="98" height="23" />
      <rect x="338" y="334" rx="5" ry="5" width="100" height="23" />
      <rect x="228" y="307" rx="5" ry="5" width="210" height="18" />
      <rect x="447" y="34" rx="0" ry="0" width="210" height="199" />
      <rect x="446" y="245" rx="5" ry="5" width="210" height="18" />
      <rect x="446" y="276" rx="5" ry="5" width="210" height="18" />
      <rect x="448" y="332" rx="5" ry="5" width="98" height="23" />
      <rect x="556" y="332" rx="5" ry="5" width="100" height="23" />
      <rect x="446" y="305" rx="5" ry="5" width="210" height="18" />
    </ContentLoader>
  );
}
