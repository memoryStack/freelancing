import { Switch, Text, Divider, Field } from '@freelancing/ui';

export default function SettingsPanel() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Dark Mode */}
      <div>
        <Text variant="title-medium" className="mb-2">
          Dark Mode
        </Text>
        <Switch label="Enable dark mode" />
      </div>

      <Divider />

      {/* Game Over */}
      <div>
        <Text variant="title-medium" className="mb-3">
          Game Over
        </Text>
        <Switch label="Game over on 3 mistakes" className="mb-3" />
        <Field
          type="number"
          label="Number of mistakes allowed in game"
          value="3"
          readOnly
        />
      </div>

      <Divider />

      {/* Visual Highlights */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <Text variant="title-medium">Visual Highlights</Text>
          <Text
            variant="label-large"
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Preview
          </Text>
        </div>
        <div className="flex flex-col gap-3">
          <Switch label="Show how often a number can still be filled" />
          <Switch label="Show feedback when mistake is made" defaultChecked />
          <Switch label="Highlight cells with different background colors" defaultChecked />
          <Switch label="Highlight notes of a number" defaultChecked />
        </div>
      </div>

      <Divider />

      {/* Fill Numbers */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <Text variant="title-medium">Fill Numbers</Text>
          <Text
            variant="label-large"
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Preview
          </Text>
        </div>
        <div className="flex flex-col gap-3">
          <Switch label="Fill notes without Pencil" />
          <Switch label="Allow filling all the notes in cell" />
          <Switch label="Lock number and fill on Cell tap" defaultChecked />
        </div>
      </div>

      <Divider />

      {/* Sounds */}
      <div>
        <Text variant="title-medium" className="mb-3">
          Sounds
        </Text>
        <Switch label="Enable or disable all game sounds" defaultChecked />
      </div>

      <Divider />

      {/* Hints */}
      <div>
        <Text variant="title-medium" className="mb-3">
          Hints
        </Text>
        <Switch label="Show reminders to use hints when stuck" defaultChecked />
      </div>
    </div>
  );
}
