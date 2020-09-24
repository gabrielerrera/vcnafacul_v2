export function click(maps) {
  return {
    type: "CLICK",
    id: maps.id,
    name: maps.name
  }
}