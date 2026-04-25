import { Menu as BaseMenu } from "@base-ui/react/menu";
import clsx from "clsx";
import { Fragment, type ReactNode } from "react";
import "./menu.scss";

export interface MenuItemData {
  id: string;
  label: ReactNode;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  trailingText?: ReactNode;
  selected?: boolean;
  active?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
}

export interface MenuProps {
  trigger: ReactNode;
  items: MenuItemData[];
  className?: string;
  triggerClassName?: string;
  popupClassName?: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: BaseMenu.Root.Props["onOpenChange"];
  openOnHover?: boolean;
  hoverOpenDelay?: number;
  hoverCloseDelay?: number;
  showBackdrop?: boolean;
  showDividers?: boolean;
  modal?: boolean;
}

/*
  TODO: i have removed all the outlines related styles from the menu.
  we should add them back in when we have a way to control them.
  for now, we will just use the default styles.
*/

export function Menu({
  trigger,
  items,
  className,
  triggerClassName,
  popupClassName,
  open,
  defaultOpen,
  onOpenChange,
  openOnHover = true,
  hoverOpenDelay = 100,
  hoverCloseDelay = 0,
  showBackdrop = false,
  showDividers = false,
  modal = false,
}: MenuProps) {
  return (
    <BaseMenu.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} modal={modal}>
      <BaseMenu.Trigger
        className={clsx("ui-menu__trigger", triggerClassName)}
        openOnHover={openOnHover}
        delay={hoverOpenDelay}
        closeDelay={hoverCloseDelay}
      >
        {trigger}
      </BaseMenu.Trigger>

      <BaseMenu.Portal>
        {showBackdrop ? <BaseMenu.Backdrop className="ui-menu__backdrop" /> : null}
        <BaseMenu.Positioner className={clsx("ui-menu", className)} sideOffset={8}>
          <BaseMenu.Popup className={clsx("ui-menu__popup", "ui-list-popup", popupClassName)}>
            {items.map((item, index) => (
              <Fragment key={item.id}>
                <BaseMenu.Item
                  className={clsx("ui-menu__item", "ui-list-item")}
                  disabled={item.disabled}
                  data-selected={item.selected ? "" : undefined}
                  data-active={item.active ? "" : undefined}
                  onClick={() => {
                    item.onSelect?.();
                  }}
                >
                  {item.leadingIcon ? <span className="ui-list-item__leading-icon">{item.leadingIcon}</span> : null}
                  <span className="ui-list-item__label">{item.label}</span>
                  <span className="ui-list-item__spacer" />
                  {item.trailingText ? <span className="ui-list-item__trailing-text">{item.trailingText}</span> : null}
                  {item.trailingIcon ? <span className="ui-list-item__trailing-icon">{item.trailingIcon}</span> : null}
                </BaseMenu.Item>
                {showDividers && index < items.length - 1 ? (
                  <div className={clsx("ui-menu__divider", "ui-list-divider")} />
                ) : null}
              </Fragment>
            ))}
          </BaseMenu.Popup>
        </BaseMenu.Positioner>
      </BaseMenu.Portal>
    </BaseMenu.Root>
  );
}
