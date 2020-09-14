export async function Change(user) {
  return { type: "CHANGE", user: user }
}