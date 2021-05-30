export interface Individual{
  id: string,
  href: string,
  aristocraticTitle: string,
  birthDate:string,
  age: number,
  countryOfBirth: string,
  deathDate:string,
  // disability: Disability[],
  familyName: string,
  familyNamePrefix: string,
  formattedName: string,
  fullName: string,
  gender: string,
  generation: string,
  givenName: string,
  // individualIdentification: IndividualIdentification[],
  // languageAbility: LanguageAbility[],
  legalName: string,
  location: string,
  maritalStatus: string,
  middleName: string,
  nationality: string,
  // otherName: OtherNameIndividual[],
  placeOfBirth: string,
  preferredGivenName: string,
  // skill: Skill[],
  status: string,
  title: string
  // contactMedium: ContactMedium[],
  // creditRating: PartyCreditProfile[],
  // externalReference: ExternalReference[],
  // partyCharacteristic: Characteristic[],
  // Characteristic: RelatedParty[],
  // taxExemptionCertificate: TaxExemptionCertificate[]
}

export interface Disability{
  disabilityCode: string,
  disabilityName: string,
  validFor: TimePeriod
}

export interface IndividualIdentification{
  attachment: AttachmentRefOrValue,
  identificationId: string,
  identificationType: string,
  issuingAuthority: string,
  issuingDate: string,
  validFor: TimePeriod
}

export interface LanguageAbility{
  isFavouriteLanguage: boolean,
  languageCode: string,
  languageName: string,
  listeningProficiency: string,
  readingProficiency: string,
  speakingProficiency: string,
  validFor: TimePeriod,
  writingProficiency: string
}

export interface OtherNameIndividual{
  aristocraticTitle: string,
  familyName: string,
  familyNamePrefix: string,
  formattedName: string,
  fullName: string,
  generation: string,
  givenName: string,
  legalName: string,
  middleName: string,
  preferredGivenName: string,
  title: string,
  validFor: TimePeriod
}

export interface Skill{
  comment: string,
  evaluatedLevel: string,
  skillCode: string,
  skillName: string,
  validFor: TimePeriod
}

export interface IndividualStateType{
  type: string
}

export interface ContactMedium{
  characteristic: MediumCharacteristic,
  mediumType: string,
  preferred: boolean,
  validFor: TimePeriod
}

export interface PartyCreditProfile{
  creditAgencyName: string,
  creditAgencyType: string,
  ratingReference: string,
  ratingScore: number,
  validFor: TimePeriod
}

export interface ExternalReference{
  externalReferenceType: string,
  name: string
}

export interface Characteristic{
  name: string,
  value: any,
  valueType: string
}

export interface RelatedParty{
  href: string,
  id: string,
  name: string,
  role: string
}

export interface TaxExemptionCertificate{
  attachment: AttachmentRefOrValue,
  id: string,
  taxDefinition: TaxDefinition[]
}

export interface AttachmentRefOrValue{
  description: string,
  href: string,
  id: string,
  url: string,
  name: string,
  attachmentType: string,
  mimeType: string,
  isRef: string,
  content: string,
  size: number,
  validFor: TimePeriod
}

export interface TaxDefinition{
  id: string,
  name: string,
  taxType: string
}

export interface MediumCharacteristic{
  city: string,
  contactType: string,
  country: string,
  emailAddress: string,
  faxNumber: string,
  phoneNumber: string,
  postCode: string,
  socialNetworkId: string,
  stateOrProvince: string,
  street1: string,
  street2: string
}

export interface TimePeriod{
  startDateTime: string,
  endDateTime: string
}

