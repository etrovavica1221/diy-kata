const getEmployerRole = (employeeName, employees) => {
  return employees.filter(employee => employee.name === employeeName)[0].role;
};

module.exports = getEmployerRole;
