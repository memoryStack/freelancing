import { Route, Routes } from "react-router";
import { RequireAuth, RequireSession } from "../auth/AuthContext";
import { HomePage } from "../pages/home";
import { CompleteProfilePage } from "../pages/complete-profile";
import { LoginPage } from "../pages/login";
import { EmailLoginPage } from "../pages/login/email";
import { SmsLoginPage } from "../pages/login/sms";
import { IconButtonShowcasePage } from "../pages/icon-buttons";
import { DividerShowcasePage } from "../pages/dividers";
import { CardShowcasePage } from "../pages/card";
import { DrawerShowcasePage } from "../pages/drawers";
import { TooltipShowcasePage } from "../pages/tooltips";
import { TextShowcasePage } from "../pages/text";
import { SnackbarShowcasePage } from "../pages/snackbars";
import { DialogShowcasePage } from "../pages/dialogs";
import { SwitchShowcasePage } from "../pages/switches";
import { CheckboxShowcasePage } from "../pages/checkboxes";
import { RadioShowcasePage } from "../pages/radios";
import { LoaderShowcasePage } from "../pages/loaders";
import { MenuShowcasePage } from "../pages/menus";
import { ContextMenuShowcasePage } from "../pages/context-menus";
import { FieldShowcasePage } from "../pages/fields";
import { TextAreaShowcasePage } from "../pages/textareas";
import { SelectShowcasePage } from "../pages/selects";
import { ComboboxShowcasePage } from "../pages/comboboxes";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/email" element={<EmailLoginPage />} />
      <Route path="/login/sms" element={<SmsLoginPage />} />
      <Route element={<RequireSession />}>
        <Route path="/complete-profile" element={<CompleteProfilePage />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/icon-buttons" element={<IconButtonShowcasePage />} />
        <Route path="/dividers" element={<DividerShowcasePage />} />
        <Route path="/cards" element={<CardShowcasePage />} />
        <Route path="/drawers" element={<DrawerShowcasePage />} />
        <Route path="/tooltips" element={<TooltipShowcasePage />} />
        <Route path="/text" element={<TextShowcasePage />} />
        <Route path="/snackbars" element={<SnackbarShowcasePage />} />
        <Route path="/dialogs" element={<DialogShowcasePage />} />
        <Route path="/switches" element={<SwitchShowcasePage />} />
        <Route path="/checkboxes" element={<CheckboxShowcasePage />} />
        <Route path="/radios" element={<RadioShowcasePage />} />
        <Route path="/loaders" element={<LoaderShowcasePage />} />
        <Route path="/menus" element={<MenuShowcasePage />} />
        <Route path="/context-menus" element={<ContextMenuShowcasePage />} />
        <Route path="/fields" element={<FieldShowcasePage />} />
        <Route path="/textareas" element={<TextAreaShowcasePage />} />
        <Route path="/selects" element={<SelectShowcasePage />} />
        <Route path="/comboboxes" element={<ComboboxShowcasePage />} />
      </Route>
    </Routes>
  );
}
