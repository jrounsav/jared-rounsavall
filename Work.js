var skills = [
  "AWS",
  "JavaScript",
  "React/RN",
  "HTML & CSS",
  "JQuery",
  "Node",
  "Drupal",
  "PHP",
  "MySQL",
  "Java",
  "Python",
  "C/C++",
  "*"
];

function hireJared(job) {
  hasSkill(job)
    ? alert("On it boss")
    : learn(job).then(() => alert("On it boss"));
  return true;
}

async function learn(job) {
  skills.push(job);
  return true;
}

function hasSkill(job) {
  return getSkills().includes(job);
}

function getSkills() {
  return skills;
}

const Work = {
  hireJared,
  learn,
  hasSkill,
  getSkills
};

export default Work;
