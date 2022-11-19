import TransitionOne from "../../components/TransitionOne";
import classes from "../../assets/cssModules/index.module.css";

const Home = () => {
  const Bg_Video =
  "https://res.cloudinary.com/dde6glimb/video/upload/v1665922766/Waves_vsucxi.mp4";
  return (
       <div className="App">
        <video autoPlay muted loop id="myBGVideo">
          <source src={Bg_Video} type="" ></source>
        </video>
    <div className={classes.container}>
        <video autoPlay muted loop id="myBGVideo">
          <source src={Bg_Video} type=""></source>
        </video>
      <TransitionOne />
    </div>
    </div>
  );
};

export default Home;
