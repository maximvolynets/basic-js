const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let nameMembers = [];
    members.forEach(memberName => {
      if (!memberName || typeof memberName !== 'string') { 
      } else {
        let nameWithoutSpace = memberName.trim();
        let nameToUpper = nameWithoutSpace.toUpperCase();
        nameMembers.push(nameToUpper[0]);
      }
    });
    const nameTeam = nameMembers.sort().join('');
    return nameTeam;
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
