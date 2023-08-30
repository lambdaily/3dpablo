import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import BallCanvas from './canvas/Ball';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {/* <h3>
        Html5 - Css3 - Javascript - React - Tailwind - Node js - GIT - Figma
      </h3> */}
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
