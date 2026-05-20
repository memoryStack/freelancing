# Graph Report - freelancing  (2026-05-20)

## Corpus Check
- 676 files · ~708,657 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2204 nodes · 3443 edges · 47 communities detected
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 74 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 82|Community 82]]

## God Nodes (most connected - your core abstractions)
1. `Harness` - 72 edges
2. `cn()` - 45 edges
3. `Environment` - 41 edges
4. `Slider` - 39 edges
5. `Ripple` - 27 edges
6. `Dialog` - 25 edges
7. `mixinDelegatesAria()` - 23 edges
8. `Switch` - 21 edges
9. `Field` - 20 edges
10. `IconButton` - 17 edges

## Surprising Connections (you probably didn't know these)
- `cn()` --calls--> `clsx()`  [INFERRED]
  workspaces/design-system/src/app/components/ui/utils.ts → packages/ui/src/ui/textarea/TextArea.tsx
- `setupButton()` --calls--> `setupDispatchHooks()`  [INFERRED]
  workspaces/design-system/material-web/labs/gb/components/button/button.ts → workspaces/design-system/material-web/internal/events/dispatch-hooks.ts
- `handleOpening()` --calls--> `getActiveItem()`  [INFERRED]
  workspaces/design-system/material-web/select/internal/select.ts → workspaces/design-system/material-web/list/internal/list-navigation-helpers.ts
- `handleResend()` --calls--> `requestOtp()`  [INFERRED]
  workspaces/design-system/src/pages/login/email.tsx → workspaces/design-system/src/auth/authApi.ts
- `AuthLinksFooter()` --calls--> `getCookie()`  [INFERRED]
  workspaces/design-system/src/pages/login/index.tsx → workspaces/design-system/src/auth/cookies.ts

## Communities (219 total, 17 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.01
Nodes (25): alertValues(), clsx(), Alert(), CarouselNext(), useCarousel(), DialogDescription(), DialogHeader(), FormControl() (+17 more)

### Community 1 - "Community 1"
Cohesion: 0.03
Nodes (74): ariaPropertyToAttribute(), isAriaAttribute(), ariaAttributeToDataAttribute(), ariaAttributeToDataProperty(), mixinDelegatesAria(), setupDelegatesAriaProperties(), mixinConstraintValidation(), mixinCustomStateSet() (+66 more)

### Community 2 - "Community 2"
Cohesion: 0.02
Nodes (47): MenuItemController, createActivateTypeaheadEvent(), createDeactivateTypeaheadEvent(), isClosableKey(), isElementInSubtree(), TypeaheadController, ListController, List (+39 more)

### Community 3 - "Community 3"
Cohesion: 0.02
Nodes (27): MdElevatedButton, MdFilledButton, MdFilledTonalButton, MdOutlinedButton, MdTextButton, MdChipSet, MdIcon, MdFilledIconButton (+19 more)

### Community 4 - "Community 4"
Cohesion: 0.03
Nodes (35): DelegatesAriaElement, setupTest(), TestElementInternals, TestFocusable, ButtonHarness, ChipHarness, TestButton, getContainerClasses() (+27 more)

### Community 5 - "Community 5"
Cohesion: 0.03
Nodes (10): KnobColorSelector, StoriesRenderer, StoryKnobPanel, StoryRenderer, Knob, KnobValues, Collection, isLitStoryInit() (+2 more)

### Community 6 - "Community 6"
Cohesion: 0.06
Nodes (10): TestTextField, Harness, isElementWithHarness(), TemplateBuilder, getTransformedPseudoClass(), isCSSGroupingRule(), rearrangePseudoElements(), transformPseudoClasses() (+2 more)

### Community 7 - "Community 7"
Cohesion: 0.03
Nodes (21): buttonClasses(), ButtonDirective, setupButton(), Button, Checkbox(), checkboxClasses(), CheckboxDirective, setupCheckbox() (+13 more)

### Community 8 - "Community 8"
Cohesion: 0.05
Nodes (38): isSelectableKey(), dispatchInteractionEvents(), firstUpdated(), formResetCallback(), getErrorText(), getRenderClasses(), getSelectedOptions(), handleClosed() (+30 more)

### Community 9 - "Community 9"
Cohesion: 0.04
Nodes (13): MdFilledField, FieldHarness, MdOutlinedField, Field, TestField, FilledField, FilledTextField, OutlinedField (+5 more)

### Community 10 - "Community 10"
Cohesion: 0.05
Nodes (13): MdDivider, Divider, PrimaryTab, SecondaryTab, shouldReduceMotion(), Tab, isTab(), Tabs (+5 more)

### Community 11 - "Community 11"
Cohesion: 0.05
Nodes (5): inBounds(), isOverlapping(), Slider, SliderHarness, MdSlider

### Community 12 - "Community 12"
Cohesion: 0.07
Nodes (26): CopyCodeButton, HCTSlider, ThemeChanger, syncPlaygroundThemeWithPage(), updateMessageTargetOnIframeLoad(), determinePageNavigationAutoMode(), initializeTheme(), ChangeColorEvent (+18 more)

### Community 13 - "Community 13"
Cohesion: 0.04
Nodes (10): MdCheckbox, CheckboxHarness, Checkbox, setupFormTest(), setupLabelTest(), setupTest(), Radio, RadioHarness (+2 more)

### Community 14 - "Community 14"
Cohesion: 0.06
Nodes (34): AuthApiError, confirmOtp(), fetchCurrentUser(), fetchProfileRequirements(), fetchSession(), parseErrorMessage(), requestOtp(), saveProfile() (+26 more)

### Community 15 - "Community 15"
Cohesion: 0.11
Nodes (23): analyzeElementApi(), analyzeEvents(), analyzeFields(), analyzeMethods(), makeMarkdownFriendly(), nameToAttribute(), MarkdownTable, generateEventsMarkdownTable() (+15 more)

### Community 16 - "Community 16"
Cohesion: 0.07
Nodes (9): NavigationBar, NavigationTab, NavigationBarHarness, TestMdNavigationBar, TestMdNavigationTab, MdNavigationBar, NavigationTabHarness, TestNavigationTab (+1 more)

### Community 17 - "Community 17"
Cohesion: 0.07
Nodes (7): MdAssistChip, MdFilterChip, MdInputChip, MdSuggestionChip, AssistChip, FilterChip, SuggestionChip

### Community 18 - "Community 18"
Cohesion: 0.06
Nodes (6): CatalogComponentHeader, CatalogComponentHeaderTitle, DragPlayground, NavDrawer, TopAppBar, SignalElement()

### Community 19 - "Community 19"
Cohesion: 0.09
Nodes (6): MdDialog, disableDialogAnimations(), setupTest(), DialogHarness, Dialog, isFocusable()

### Community 20 - "Community 20"
Cohesion: 0.12
Nodes (4): cardClasses(), CardDirective, Card, Ripple

### Community 21 - "Community 21"
Cohesion: 0.09
Nodes (3): Switch, SwitchHarness, MdSwitch

### Community 22 - "Community 22"
Cohesion: 0.12
Nodes (8): CircularProgress, LinearProgress, getRenderClasses(), render(), MdCircularProgress, CircularProgressHarness, LinearProgressHarness, MdLinearProgress

### Community 24 - "Community 24"
Cohesion: 0.15
Nodes (3): OutlinedSegmentedButton, SegmentedButton, MdOutlinedSegmentedButton

### Community 25 - "Community 25"
Cohesion: 0.13
Nodes (4): NavigationDrawerModal, NavigationDrawer, MdNavigationDrawer, MdNavigationDrawerModal

### Community 26 - "Community 26"
Cohesion: 0.18
Nodes (3): OutlinedSegmentedButtonSet, SegmentedButtonSet, MdOutlinedSegmentedButtonSet

### Community 27 - "Community 27"
Cohesion: 0.19
Nodes (4): MdBrandedFab, MdFab, FabHarness, Fab

### Community 28 - "Community 28"
Cohesion: 0.19
Nodes (4): MdElevatedCard, MdFilledCard, MdOutlinedCard, Card

### Community 31 - "Community 31"
Cohesion: 0.25
Nodes (4): HomePage(), useScrollTimer(), Footer(), Header()

### Community 32 - "Community 32"
Cohesion: 0.25
Nodes (4): Divider(), dividerClasses(), DividerDirective, Divider

## Knowledge Gaps
- **25 isolated node(s):** `MdNavigationDrawer`, `MdNavigationDrawerModal`, `TestMdNavigationBar`, `TestMdNavigationTab`, `TestDefaultValueFormAssociated` (+20 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `setupDispatchHooks()` connect `Community 1` to `Community 3`, `Community 21`, `Community 7`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Why does `Harness` connect `Community 6` to `Community 1`, `Community 2`, `Community 3`, `Community 4`, `Community 9`, `Community 10`, `Community 11`, `Community 13`, `Community 16`, `Community 19`, `Community 21`, `Community 22`, `Community 23`, `Community 27`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Why does `setupButton()` connect `Community 7` to `Community 1`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **What connects `MdNavigationDrawer`, `MdNavigationDrawerModal`, `TestMdNavigationBar` to the rest of the system?**
  _25 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.01 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.03 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.02 - nodes in this community are weakly interconnected._