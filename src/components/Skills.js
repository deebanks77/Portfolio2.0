import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { skills } from "../utils";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Skills are the foundation of any successful project, and I take
                great pride in my ability to deliver exceptional results through
                a combination of technical expertise, creativity, and attention
                to detail. Whether it's developing cutting-edge web
                applications, designing beautiful user interfaces, or optimizing
                website performance, my diverse skill set and passion for
                innovation enable me to tackle any challenge with confidence and
                proficiency. Take a look at some of the skills I bring to the
                table and see how I can help bring your ideas to life.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => {
                  const { name, image } = skill;
                  return (
                    <div className="item" key={index}>
                      <img src={image} alt={name} />
                      <h5>{name}</h5>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="color" />
    </section>
  );
};
