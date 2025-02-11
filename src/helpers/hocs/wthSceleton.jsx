import Sceleton from "../../components/Sceleton/Sceleton";

function withSceleton(Component, count, type) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props
        if (!isLoading) {
      return <Sceleton count={count} type={type}/>;
    }

    return <Component {...restProps} />;
  };
}

export default withSceleton;
