import React from "react";
import bgImg from "../assests/home-background.png";
import { ImageSlider, Recommends, NewRelease, Romance } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import db from "../utils/Firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);

  let recommended = [];
  let newRelease = [];
  let romance = [];

  useEffect(() => {
    if (username) {
      db.collection("movies").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          switch (doc.data().type) {
            case "recommended":
              recommended = [...recommended, { id: doc.id, ...doc.data() }];
              break;
            case "newRelease":
              newRelease = [...newRelease, { id: doc.id, ...doc.data() }];
              break;
            case "romance":
              romance = [...romance, { id: doc.id, ...doc.data() }];
              break;
          }
        });

        dispatch(
          setMovies({
            recommended: recommended,
            newRelease: newRelease,
            romance: romance,
          })
        );
      });
    } else {
      navigate("/");
    }
  }, []);

  if (!username) {
    return;
  }

  console.log("Home Page Rended!");
  return (
    <div className="min-h-[calc(100vh-250px)] relative overflow-x-hidden top-20">
      <div
        className="absolute h-full top-0 right-0 left-0 -z-10 opacity-20"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <ImageSlider />
      <Recommends />
      <NewRelease />
      <Romance />
    </div>
  );
};

export default Home;
