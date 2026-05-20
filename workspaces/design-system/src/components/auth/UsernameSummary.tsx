import { Button } from "@freelancing/ui";

type UsernameSummaryProps = {
  value: string;
  onEdit: () => void;
};

export function UsernameSummary({ value, onEdit }: UsernameSummaryProps) {
  return (
    <div className="flex items-center gap-2 rounded border border-slate-300 px-3 py-2.5">
      <span className="min-w-0 flex-1 truncate text-sm text-slate-800">{value}</span>
      <Button type="button" variant="text" className="shrink-0 px-2 py-0 text-sm" onClick={onEdit}>
        Edit
      </Button>
    </div>
  );
}
