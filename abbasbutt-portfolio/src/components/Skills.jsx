import React from 'react';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
  'E-commerce', 'UI/UX Design', 'Branding', 'Stripe Integration', 'Git'
];

const Skills = () => (
  <section className="py-10">
    <h2 className="text-2xl font-bold mb-4">Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skills.map((skill, idx) => (
        <span key={idx} className="bg-white border p-2 rounded text-center shadow">{skill}</span>
      ))}
    </div>
  </section>
);

export default Skills;