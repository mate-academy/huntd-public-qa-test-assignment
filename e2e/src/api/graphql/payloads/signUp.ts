export function signUpPayload(
  email: string,
  password: string,
  repeatPassword: string,
):
  Record<string, unknown> {
  return {
    operationName: 'signUp',
    query: `mutation signUp($email: String!, $phone: String, $password: String!, $repeatPassword: String!, $firstName: String, $lastName: String, $fvType: String, $fvSource: String, $fvMedium: String, $fvCampaign: String, $fvContent: String, $fvTerm: String, $lvType: String, $lvSource: String, $lvMedium: String, $lvCampaign: String, $lvContent: String, $lvTerm: String, $gClientid: String, $gIp: String, $gAgent: String, $gclid: String) {
  signUp(
    email: $email
    phone: $phone
    password: $password
    repeatPassword: $repeatPassword
    firstName: $firstName
    lastName: $lastName
    fvType: $fvType
    fvSource: $fvSource
    fvMedium: $fvMedium
    fvCampaign: $fvCampaign
    fvContent: $fvContent
    fvTerm: $fvTerm
    lvType: $lvType
    lvSource: $lvSource
    lvMedium: $lvMedium
    lvCampaign: $lvCampaign
    lvContent: $lvContent
    lvTerm: $lvTerm
    gClientid: $gClientid
    gIp: $gIp
    gAgent: $gAgent
    gclid: $gclid
  ) {
    ...UserBase
    ...UserPrimaryProfile
    ...UserEngagementFields
    __typename
  }
}

fragment UserBase on User {
  id
  firstName
  lastName
  computedName
  username
  email
  phone
  inactive
  confirmed
  lastActionTime
  created
  isAdminUser
  linkedinUrl
  behanceUrl
  githubUrl
  ethWalletAddress
  __typename
}

fragment UserPrimaryProfile on User {
  primaryProfile
  __typename
}

fragment UserEngagementFields on User {
  fvType
  fvSource
  fvMedium
  fvCampaign
  fvContent
  fvTerm
  lvType
  lvSource
  lvMedium
  lvCampaign
  lvContent
  lvTerm
  gClientid
  gIp
  gAgent
  gclid
  __typename
}
`,
    variables: {
      email,
      password,
      repeatPassword,
    },
  };
}



