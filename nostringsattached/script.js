const arr = [
  "underscore_case",
  "first_name",
  "Some_Variable",
  "calculate_AGE",
  "delayed_departure",
];

function underscorecaseToCamelcaseConverter(arr) {
  for (ar of arr) {
    [p1, p2] = ar.split("_");
    const normalizedP1 = p1.toLowerCase();
    const normalizedP2 = p2.toLowerCase();

    // console.log(normalizedP1, normalizedP2);

    const p2Uppercased = normalizedP2.replace(
      normalizedP2[0],
      normalizedP2[0].toUpperCase()
    );

    console.log(normalizedP1 + p2Uppercased);
  }
}

underscorecaseToCamelcaseConverter(arr);
