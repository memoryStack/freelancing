import { Button, SnackbarProvider, useSnackbar } from "@freelancing/ui";

function SnackbarDemo() {
  const { showSnackbar } = useSnackbar();

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Button
        variant="filled"
        onClick={() =>
          showSnackbar({
            description: "All changes saved",
          })
        }
      >
        Description + Close
      </Button>

      <Button
        variant="filled"
        onClick={() =>
          showSnackbar({
            title: "Toast created",
            description: "This is a toast notification.",
          })
        }
      >
        Title + Description + Close
      </Button>

      <Button
        variant="filled"
        onClick={() =>
          showSnackbar({
            description: "Email archived",
            actionProps: {
              className: "label-large",
              children: "Undo",
              onClick: () => {},
            },
            data: { showCloseIcon: false },
          })
        }
      >
        Description + Action
      </Button>

      <Button
        variant="filled"
        onClick={() =>
          showSnackbar({
            description: "Single-line snackbar with action",
            actionProps: {
              className: "label-large",
              children: "Action",
              onClick: () => {
                console.log("@@@@@ action button clicked");
              },
            },
          })
        }
      >
        Description + Action + Close
      </Button>
    </div>
  );
}

export function SnackbarShowcasePage() {
  return (
    <main className="min-h-screen bg-white p-12">
      <a href="/" className="inline-block text-blue-600 underline">
        Back to Design System
      </a>
      <h1 className="mt-6 text-3xl font-semibold">Snackbars</h1>

      <SnackbarProvider timeout={1000000}>
        <SnackbarDemo />
      </SnackbarProvider>
    </main>
  );
}
