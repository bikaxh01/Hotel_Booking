import { validateUser } from "@/Store/Slice/authSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.userAuth.isAuthenticated);

  useEffect(() => {
    dispatch(validateUser());
  }, [dispatch]);

  return <div>sadfsdfa</div>;
}

export default Home;
