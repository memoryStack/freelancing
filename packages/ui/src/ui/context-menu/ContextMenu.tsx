import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";
import clsx from "clsx";
import { Fragment, type ReactNode } from "react";
import type { MenuItemData } from "../menu";
import "./context-menu.scss";

export interface ContextMenuProps {
  trigger: ReactNode;
  items: MenuItemData[];
  className?: string;
  triggerClassName?: string;
  popupClassName?: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: BaseContextMenu.Root.Props["onOpenChange"];
  showBackdrop?: boolean;
}

export function ContextMenu({
  trigger,
  items,
  className,
  triggerClassName,
  popupClassName,
  open,
  defaultOpen,
  onOpenChange,
  showBackdrop = false,
}: ContextMenuProps) {
  return (
    <BaseContextMenu.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <BaseContextMenu.Trigger className={clsx("ui-context-menu__trigger", triggerClassName)}>
        {trigger}
      </BaseContextMenu.Trigger>

      <BaseContextMenu.Portal>
        {showBackdrop ? <BaseContextMenu.Backdrop className="ui-context-menu__backdrop" /> : null}
        <BaseContextMenu.Positioner className={clsx("ui-context-menu", className)} sideOffset={8}>
          <BaseContextMenu.Popup className={clsx("ui-context-menu__popup", "ui-list-popup", popupClassName)}>
            {items.map((item) => (
              <Fragment key={item.id}>
                <BaseContextMenu.Item
                  className={clsx("ui-context-menu__item", "ui-list-item")}
                  disabled={item.disabled}
                  data-selected={item.selected ? "" : undefined}
                  data-active={item.active ? "" : undefined}
                  onClick={() => item.onSelect?.()}
                >
                  {item.leadingIcon ? <span className="ui-list-item__leading-icon">{item.leadingIcon}</span> : null}
                  <span className="ui-list-item__label">{item.label}</span>
                  <span className="ui-list-item__spacer" />
                  {item.trailingText ? <span className="ui-list-item__trailing-text">{item.trailingText}</span> : null}
                  {item.trailingIcon ? <span className="ui-list-item__trailing-icon">{item.trailingIcon}</span> : null}
                </BaseContextMenu.Item>
              </Fragment>
            ))}
          </BaseContextMenu.Popup>
        </BaseContextMenu.Positioner>
      </BaseContextMenu.Portal>
    </BaseContextMenu.Root>
  );
}
