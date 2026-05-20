import { Field } from "@freelancing/ui";

const OTP_PATTERN = /^\d*$/;

type OtpFieldProps = {
  value: string;
  onValueChange: (value: string) => void;
  label?: string;
  maxLength?: number;
  error?: string;
  disabled?: boolean;
};

export function OtpField({
  value,
  onValueChange,
  label = "Enter the code",
  maxLength = 6,
  error,
  disabled,
}: OtpFieldProps) {
  const handleChange = (next: string) => {
    const digits = next.replace(/\D/g, "").slice(0, maxLength);
    onValueChange(digits);
  };

  return (
    <Field
      type="text"
      inputMode="numeric"
      label={label}
      required
      value={value}
      onValueChange={handleChange}
      disabled={disabled}
      invalid={Boolean(error)}
      error={error}
      autoComplete="one-time-code"
      name="otp"
    />
  );
}

export function isValidOtp(otp: string, length = 6): boolean {
  return OTP_PATTERN.test(otp) && otp.length === length;
}
