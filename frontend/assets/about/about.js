export const coder = {
    name: "Yash Bagal",
    skills: [
      'React', 'MySql', 
      'C++', 'C', 'Java',
      'Python', 'Linux', 
      'Docker'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function() {
      return this.hardWorker &&
      this.problemSolver && 
      this.skills.length >= 5;
    }
  };
  