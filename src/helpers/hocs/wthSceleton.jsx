import Sceleton from "../../components/Sceleton/Sceleton";

function withSceleton(Component, count) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;
    if (!isLoading) {
      return <Sceleton count={count} />;
    }

    return <Component {...restProps} />;
  };
}

export default withSceleton;
