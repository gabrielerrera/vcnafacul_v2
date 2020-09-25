export function click(maps) {
  return {
    type: "CLICK",
    Name: maps.Name,
    State: maps.State,
    City: maps.City,
    Neighborhood: maps.Neighborhood,
    Street: maps.Street,
    Number: maps.Number,
    Compements: maps.Compements,
    Site: maps.Site,
  };
}
