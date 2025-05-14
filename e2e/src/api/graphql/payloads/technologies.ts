export function technologiesPayload(
  query: string,
): Record<string, unknown> {
  return {
    operationName: 'technologies',
    query: `query technologies($query: String, $requiredTechnologiesIds: [Int!]) {
  technologies(query: $query, requiredTechnologiesIds: $requiredTechnologiesIds) {
    ...TechnologyBase
    __typename
  }
}

fragment TechnologyBase on Technology {
  id
  name
  __typename
}
`,
    variables: { query },
  };
}



