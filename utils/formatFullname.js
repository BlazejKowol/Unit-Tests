module.exports = (fullName) => {
  const [ firstName, lastName ] = fullName.split(' ');
  if(fullName.length < 1 || fullName.split(' ').length !== 2) return 'Error';
  if(!firstName || !lastName) return 'Error';
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
};
