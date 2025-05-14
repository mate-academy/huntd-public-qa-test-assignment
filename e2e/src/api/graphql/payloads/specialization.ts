export function specializationPayload(): Record<string, unknown> {
  return {
    operationName: 'specialization',
    query: `query specialization($query: String) {
  specializations(query: $query) {
    ...SpecializationBase
    __typename
  }
}

fragment SpecializationBase on Specialization {
  id
  name
  __typename
}
`,
    variables: {},
  };
}



