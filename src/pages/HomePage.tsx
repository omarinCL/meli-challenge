import React from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setBreadcrumAction } from "../redux/actions";

function HomePage() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setBreadcrumAction([]));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Bienvenido!</div>;
}

export default HomePage;
