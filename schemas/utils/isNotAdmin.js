export default function isNotAdmin({currentUser}) {
  return !currentUser.roles.find((role) => role.name === 'administrator')
}
