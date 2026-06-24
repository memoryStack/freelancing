import { Dialog } from "@freelancing/ui";
import { LoginCard } from "./LoginCard";

type LoginDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCancel: () => void;
};

export function LoginDialog({ open, onOpenChange, onCancel }: LoginDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title="Session expired"
      description={
        <LoginCard
          showBrand={false}
          helperText="After signing in, you'll return here and your last action will resume automatically."
        />
      }
      showDivider={false}
      cancelLabel="Not now"
      onCancel={onCancel}
    />
  );
}
