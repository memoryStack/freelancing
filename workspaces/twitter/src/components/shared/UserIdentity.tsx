import { Text } from "@freelancing/ui";
import clsx from "clsx";
import { useAuth } from "../../auth/AuthContext";

type UserAvatarProps = {
  size?: "sm" | "md";
  className?: string;
};

export function UserAvatar({ size = "md", className }: UserAvatarProps) {
  const { userInitial, userAvatarUrl } = useAuth();

  return (
    <div
      className={clsx(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--md-sys-color-primary-container)]",
        size === "sm" ? "h-8 w-8" : "h-10 w-10",
        className,
      )}
    >
      {userAvatarUrl ? (
        <img src={userAvatarUrl} alt="" className="h-full w-full object-cover" />
      ) : (
        <Text variant="label-large" className="text-[var(--md-sys-color-primary)]">
          {userInitial}
        </Text>
      )}
    </div>
  );
}

type UserIdentityProps = {
  layout?: "compact" | "stacked";
  className?: string;
};

export function UserIdentity({ layout = "stacked", className }: UserIdentityProps) {
  const { displayName, userEmail } = useAuth();

  return (
    <div className={clsx("min-w-0", className)}>
      <Text
        variant="title-small"
        className={clsx(
          "truncate font-bold",
          layout === "compact" && "text-sm leading-tight",
        )}
      >
        {displayName}
      </Text>
      {userEmail ? (
        <Text
          variant="body-small"
          className="truncate text-[var(--md-sys-color-on-surface-variant)]"
        >
          {userEmail}
        </Text>
      ) : null}
    </div>
  );
}
