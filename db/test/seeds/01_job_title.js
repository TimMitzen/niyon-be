
exports.seed = async function(knex) {
  await knex("job_title").insert([
      {job_title: 'Full Stack Web Developer'},
      {job_title: 'Data Scientist'},
      {job_title: 'UI Designer'},
      {job_title: 'iOS Developer'},
      {job_title: 'Android Developer'},
      {job_title: 'Network Programmer'},
      {job_title: 'AWS Solutions Architect'},
      {job_title: 'Front-End Developer'},
      {job_title: 'Back-End Developer'},
      {job_title: 'Software Engineer'},
      {job_title: 'Junior Developer'},
      {job_title: 'Senior Developer'},
      {job_title: 'Software Architect'},
      {job_title: 'Dev Ops Specialist'},
      {job_title: 'Java Developer'},
      {job_title: 'SQL Developer'},
      {job_title: '.NET Developer'},
      {job_title: 'Python Developer'},
      {job_title: 'Web Analytics Developer'},
      {job_title: 'UX Designer'},
      {job_title: 'Ruby Developer'},
      {job_title: 'Systems Engineer'},
      {job_title: 'Project Manager'},
      {job_title: 'Director of Technology'},
      {job_title: 'Webmaster'},
      {job_title: 'Student'},
      {job_title: 'Freelancer'}
  ])
};