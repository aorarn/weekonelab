/**
 * Every component in src/components/ui, grouped for the showcase page.
 * Section ids are derived from the name with toId(), so the nav, overview
 * cards and <Section> anchors always agree.
 */

export type ShowcaseEntry = { name: string; description: string };
export type ShowcaseGroup = {
  id: string;
  title: string;
  entries: ShowcaseEntry[];
};

export function toId(name: string) {
  return name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export const groups: ShowcaseGroup[] = [
  {
    id: "actions",
    title: "Actions",
    entries: [
      { name: "Button", description: "Actions and form submission" },
      { name: "ButtonGroup", description: "Buttons joined into one control" },
      { name: "Toggle", description: "Two-state pressable button" },
      { name: "ToggleGroup", description: "Set of toggles, single or multiple" },
    ],
  },
  {
    id: "forms",
    title: "Forms",
    entries: [
      { name: "Input", description: "Single-line text field" },
      { name: "Textarea", description: "Multi-line text field" },
      { name: "InputGroup", description: "Input with addons, text and buttons" },
      { name: "InputOTP", description: "One-time passcode entry" },
      { name: "Label", description: "Accessible label for a control" },
      { name: "Field", description: "Label, control, help text and errors" },
      { name: "Checkbox", description: "Boolean or multi-choice option" },
      { name: "RadioGroup", description: "Pick exactly one option" },
      { name: "Switch", description: "Instant on/off setting" },
      { name: "Slider", description: "Pick a value or range" },
      { name: "Select", description: "Styled dropdown picker" },
      { name: "NativeSelect", description: "Browser-native <select>" },
      { name: "Combobox", description: "Searchable select, single or multi" },
      { name: "Calendar", description: "Date and range picker" },
    ],
  },
  {
    id: "data-display",
    title: "Data display",
    entries: [
      { name: "Card", description: "Grouped content container" },
      { name: "Badge", description: "Status and count labels" },
      { name: "Avatar", description: "User image with fallback" },
      { name: "Table", description: "Rows and columns of records" },
      { name: "Item", description: "List row with media and actions" },
      { name: "Empty", description: "Empty-state placeholder" },
      { name: "Kbd", description: "Keyboard shortcut hint" },
      { name: "Marker", description: "Inline divider and timeline marker" },
      { name: "Separator", description: "Visual divider" },
      { name: "AspectRatio", description: "Fixed-ratio media box" },
      { name: "Chart", description: "Recharts with design tokens" },
      { name: "Carousel", description: "Swipeable slides" },
      { name: "CodeBlock", description: "Code with copy and diff lines" },
    ],
  },
  {
    id: "feedback",
    title: "Feedback",
    entries: [
      { name: "Alert", description: "Inline status message" },
      { name: "Toast", description: "Transient notification" },
      { name: "Progress", description: "Task completion bar" },
      { name: "Spinner", description: "Indeterminate loading" },
      { name: "Skeleton", description: "Loading placeholder" },
      { name: "Tooltip", description: "Hint on hover or focus" },
      { name: "HoverCard", description: "Rich preview on hover" },
      { name: "Popover", description: "Floating panel on click" },
    ],
  },
  {
    id: "overlays",
    title: "Overlays",
    entries: [
      { name: "Dialog", description: "Modal overlay window" },
      { name: "AlertDialog", description: "Confirmation that needs a decision" },
      { name: "Sheet", description: "Panel sliding from an edge" },
      { name: "Drawer", description: "Swipeable bottom panel" },
      { name: "Command", description: "Command palette and search" },
    ],
  },
  {
    id: "navigation",
    title: "Menus & navigation",
    entries: [
      { name: "DropdownMenu", description: "Menu from a trigger button" },
      { name: "ContextMenu", description: "Right-click menu" },
      { name: "Menubar", description: "Desktop-style menu bar" },
      { name: "NavigationMenu", description: "Site navigation with flyouts" },
      { name: "Breadcrumb", description: "Path to the current page" },
      { name: "Pagination", description: "Page through results" },
      { name: "Tabs", description: "Switch between views" },
      { name: "Sidebar", description: "App navigation shell" },
    ],
  },
  {
    id: "layout",
    title: "Layout",
    entries: [
      { name: "Accordion", description: "Stacked expandable sections" },
      { name: "Collapsible", description: "Show and hide one region" },
      { name: "Resizable", description: "Drag-to-resize panels" },
      { name: "ScrollArea", description: "Styled scroll container" },
      { name: "Direction", description: "Right-to-left support" },
    ],
  },
  {
    id: "conversation",
    title: "Conversation & AI",
    entries: [
      { name: "Message", description: "Chat message with avatar and meta" },
      { name: "Bubble", description: "Chat bubble with reactions" },
      { name: "MessageScroller", description: "Auto-scrolling chat list" },
      { name: "Attachment", description: "File chip with upload state" },
      { name: "Trace", description: "Step-by-step activity log" },
      { name: "Questionnaire", description: "One-question-at-a-time form" },
    ],
  },
];

export const componentCount = groups.reduce(
  (total, group) => total + group.entries.length,
  0,
);
