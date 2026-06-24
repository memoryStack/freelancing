export type CountryCode = {
  iso2: string;
  name: string;
  dialCode: string;
  flagUrl: string;
};

function flagUrl(iso2: string) {
  return `https://flagcdn.com/w40/${iso2.toLowerCase()}.png`;
}

/** Dial-code list for SMS login; consumed by UI via AuthProvider. */
export const COUNTRY_CODES: CountryCode[] = [
  { iso2: "IN", name: "India", dialCode: "+91", flagUrl: flagUrl("IN") },
  { iso2: "US", name: "United States", dialCode: "+1", flagUrl: flagUrl("US") },
  { iso2: "GB", name: "United Kingdom", dialCode: "+44", flagUrl: flagUrl("GB") },
  { iso2: "CA", name: "Canada", dialCode: "+1", flagUrl: flagUrl("CA") },
  { iso2: "AU", name: "Australia", dialCode: "+61", flagUrl: flagUrl("AU") },
  { iso2: "DE", name: "Germany", dialCode: "+49", flagUrl: flagUrl("DE") },
  { iso2: "FR", name: "France", dialCode: "+33", flagUrl: flagUrl("FR") },
  { iso2: "SG", name: "Singapore", dialCode: "+65", flagUrl: flagUrl("SG") },
  { iso2: "AE", name: "United Arab Emirates", dialCode: "+971", flagUrl: flagUrl("AE") },
  { iso2: "JP", name: "Japan", dialCode: "+81", flagUrl: flagUrl("JP") },
  { iso2: "NZ", name: "New Zealand", dialCode: "+64", flagUrl: flagUrl("NZ") },
];

export const DEFAULT_COUNTRY_ISO2 = "IN";

export function findCountryByIso2(iso2: string): CountryCode | undefined {
  return COUNTRY_CODES.find((c) => c.iso2 === iso2);
}

export function formatE164Phone(dialCode: string, localNumber: string): string {
  const digits = localNumber.replace(/\D/g, "");
  const codeDigits = dialCode.replace(/\D/g, "");
  return `+${codeDigits}${digits}`;
}
