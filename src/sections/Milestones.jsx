import { milestones } from '../constants/index.js';

const Milestones = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Milestones & Recognition</h3>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        {milestones.map((item) => (
          <div key={`milestone-${item.id}`} className="milestone-card">
            <div>
              <h4 className="text-white text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-white-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Milestones; 