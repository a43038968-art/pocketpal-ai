/**
 * Color tokens — light and dark bindings.
 *
 * Sources:
 *   - Light values: current `createBaseColors(AppTheme.Light)` +
 *     `createSemanticColors(_, false)` output from `src/utils/theme.ts`,
 *     preserved verbatim (no visual regression).
 *   - Dark values: restyled to a JanitorAI-like aesthetic (graphite-blue
 *     backgrounds, indigo/violet accents, soft lavender-grey secondary text).
 *     Previously extracted from canonical Figma `RZxDJea4t6jnBZrV4YBacF`,
 *     dark band `3011:*`.
 *
 * `withOpacity` calls are deferred to a util (not inlined as literals) so
 * the output is byte-identical to today's runtime computation — this is
 * what guarantees no visual regression for the surfaceContainer* + border
 * + placeholder etc keys that currently derive via opacity math.
 *
 * NOTE on imports: this module imports from `../../utils/colorUtils` only,
 * which is a pure utility (no React, no Paper, no MobX). The purity
 * constraint for this module forbids React/Paper/MobX imports only.
 */
import {withOpacity, stateLayerOpacity} from '../../utils/colorUtils';

import {TokenColors} from './types';

// Light base colors (verbatim from src/utils/theme.ts:111-147).
const LIGHT_PRIMARY = '#333333';
const LIGHT_SECONDARY = '#1E4DF6';
const LIGHT_TERTIARY = '#7880FF';
const LIGHT_ERROR = '#FF653F';
const LIGHT_BACKGROUND = '#ffffff';
const LIGHT_ON_BACKGROUND = '#111111';
const LIGHT_SURFACE = '#F9FAFB';
const LIGHT_ON_SURFACE = '#333333';
const LIGHT_INVERSE_ON_SURFACE = '#fcfcfc';

export const lightColors: TokenColors = {
  // MD3 base palette (light)
  primary: LIGHT_PRIMARY,
  onPrimary: '#FFFFFF',
  primaryContainer: '#DEE0E6',
  onPrimaryContainer: '#2D2F33',
  secondary: LIGHT_SECONDARY,
  onSecondary: '#FFFFFF',
  secondaryContainer: '#E0E0E0',
  onSecondaryContainer: '#424242',
  tertiary: LIGHT_TERTIARY,
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#F1F3FF',
  onTertiaryContainer: '#013332',
  error: LIGHT_ERROR,
  onError: '#FFFFFF',
  errorContainer: '#E6ACA9',
  onErrorContainer: '#330B09',
  background: LIGHT_BACKGROUND,
  onBackground: LIGHT_ON_BACKGROUND,
  surface: LIGHT_SURFACE,
  onSurface: LIGHT_ON_SURFACE,
  surfaceVariant: '#e4e4e6',
  onSurfaceVariant: '#646466',
  outline: withOpacity(LIGHT_PRIMARY, 0.05),
  outlineVariant: '#a1a1a1',
  mutedLight: '#e5e3e1',
  // Figma `Color/Secondary/Default` — the secondary surface used by
  // small DS buttons (back chevron, audio glyph) over the muted canvas.
  secondaryDefault: '#f3f2f2',
  // MD3 extras
  surfaceDisabled: withOpacity('#fcfcfc', 0.12),
  onSurfaceDisabled: withOpacity('#333333', 0.38),
  inverseSurface: '#858585',
  inverseOnSurface: LIGHT_INVERSE_ON_SURFACE,
  inversePrimary: '#DEE0E6',
  inverseSecondary: '#95ABE6',
  shadow: '#000000',
  scrim: 'rgba(0, 0, 0, 0.25)',
  backdrop: 'rgba(51, 51, 51, 0.6)',

  // Semantic surface variants (light derives via primary-tint math)
  surfaceContainerHighest: withOpacity(LIGHT_PRIMARY, 0.05),
  surfaceContainerHigh: withOpacity(LIGHT_PRIMARY, 0.03),
  surfaceContainer: withOpacity(LIGHT_PRIMARY, 0.02),
  surfaceContainerLow: withOpacity(LIGHT_PRIMARY, 0.01),
  surfaceContainerLowest: LIGHT_SURFACE,
  surfaceDim: withOpacity(LIGHT_PRIMARY, 0.06),
  surfaceBright: LIGHT_SURFACE,

  // Text
  text: LIGHT_ON_BACKGROUND,
  textSecondary: withOpacity(LIGHT_ON_SURFACE, 0.5),
  inverseText: LIGHT_INVERSE_ON_SURFACE,
  inverseTextSecondary: withOpacity(LIGHT_INVERSE_ON_SURFACE, 0.5),

  // Border / placeholder
  border: withOpacity(LIGHT_ON_SURFACE, 0.05),
  placeholder: withOpacity(LIGHT_ON_SURFACE, 0.3),

  // Interactive state opacities
  stateLayerOpacity: 0.12,
  hoverStateOpacity: stateLayerOpacity.hover,
  pressedStateOpacity: stateLayerOpacity.pressed,
  draggedStateOpacity: stateLayerOpacity.dragged,
  focusStateOpacity: stateLayerOpacity.focus,

  // Menu
  menuBackground: LIGHT_SURFACE,
  menuBackgroundDimmed: withOpacity(LIGHT_SURFACE, 0.9),
  menuBackgroundActive: withOpacity(LIGHT_PRIMARY, 0.08),
  menuSeparator: withOpacity(LIGHT_PRIMARY, 0.5),
  menuGroupSeparator: withOpacity('#000000', 0.08),
  menuText: LIGHT_ON_SURFACE,
  menuDangerText: LIGHT_ERROR,

  // Messages
  authorBubbleBackground: '#f2f2f2',
  receivedMessageDocumentIcon: LIGHT_PRIMARY,
  sentMessageDocumentIcon: LIGHT_ON_SURFACE,
  userAvatarImageBackground: 'transparent',
  userAvatarNameColors: [
    LIGHT_PRIMARY,
    LIGHT_SECONDARY,
    LIGHT_TERTIARY,
    LIGHT_ERROR,
  ],
  searchBarBackground: 'rgba(118, 118, 128, 0.12)',

  // Thinking bubble
  thinkingBubbleBackground: '#f0f5fa',
  thinkingBubbleText: '#0a5999',
  thinkingBubbleBorder: 'rgba(10, 89, 153, 0.4)',
  thinkingBubbleShadow: '#0a5999',
  thinkingBubbleChevronBackground: 'rgba(10, 89, 153, 0.1)',
  thinkingBubbleChevronBorder: 'rgba(10, 89, 153, 0.2)',

  // Status bar
  bgStatusActive: '#22c55e',
  bgStatusIdle: '#d1d5db',
  statusLoaded: '#1e9e4f',

  // Buttons
  btnPrimaryBg: '#eff6ff',
  btnPrimaryBorder: '#bfdbff',
  btnPrimaryText: '#1447e6',
  btnReadyBg: '#ecfdf5',
  btnReadyBorder: '#bbf7d0',
  btnReadyText: '#047857',
  btnDownloadBg: '#ecfdf5',
  btnDownloadBorder: '#bbf7d0',
  btnDownloadText: '#047857',

  // Icons
  iconModelTypeText: '#3b82f6',
  iconModelTypeVision: '#9810fa',
  iconModelTypeAudio: '#f97316',

  // Accent — peach pill background (canonical Figma `Color/Accent/Peach`).
  accent: {
    peach: '#FCE7CF',
    // Progress-bar fill (canonical Figma `Color/Green/Strong`).
    greenStrong: '#7c8e8a',
  },
};

// Dark base values — JanitorAI-style palette:
//   background  #111116  deep graphite with a faint blue undertone
//   surface     #1C1C24  cards, inputs
//   variant     #252530  message bubbles, raised elements
//   border      #2E2E3A  thin dark borders
//   accent      #7C3AED / #8B5CF6  neon violet / indigo
//   text        #F4F4F8 (primary), #A1A1B5 (secondary)
const DARK_PRIMARY = '#8B5CF6';
const DARK_SECONDARY = '#7C3AED';
const DARK_TERTIARY = '#A78BFA';
const DARK_ERROR = '#FF653F';
const DARK_BACKGROUND = '#111116';
const DARK_ON_BACKGROUND = '#F4F4F8';
const DARK_SURFACE = '#1C1C24';
const DARK_ON_SURFACE = '#F4F4F8';
const DARK_INVERSE_ON_SURFACE = '#1C1C24';

export const darkColors: TokenColors = {
  // MD3 base palette (dark)
  primary: DARK_PRIMARY,
  onPrimary: '#FFFFFF',
  primaryContainer: '#3B2A78',
  onPrimaryContainer: '#E4DAFF',
  secondary: DARK_SECONDARY,
  onSecondary: '#FFFFFF',
  secondaryContainer: '#2E2250',
  onSecondaryContainer: '#D9CCFF',
  tertiary: DARK_TERTIARY,
  onTertiary: '#1E1442',
  tertiaryContainer: '#3A2D6B',
  onTertiaryContainer: '#E4DAFF',
  error: DARK_ERROR,
  onError: '#4C100D',
  errorContainer: '#661511',
  onErrorContainer: '#E6ACA9',
  background: DARK_BACKGROUND,
  onBackground: DARK_ON_BACKGROUND,
  surface: DARK_SURFACE,
  onSurface: DARK_ON_SURFACE,
  surfaceVariant: '#252530',
  onSurfaceVariant: '#A1A1B5',
  outline: '#2E2E3A',
  outlineVariant: '#3D3D4D',
  mutedLight: '#252530',
  // Figma `Color/Secondary/Default` — dark binding restyled to graphite-blue.
  secondaryDefault: '#2E2E3A',
  // MD3 extras
  surfaceDisabled: withOpacity('#2E2E3A', 0.12),
  onSurfaceDisabled: withOpacity('#A1A1B5', 0.38),
  inverseSurface: '#F4F4F8',
  inverseOnSurface: DARK_INVERSE_ON_SURFACE,
  inversePrimary: '#7C3AED',
  inverseSecondary: LIGHT_SECONDARY, // md3BaseColors.secondary used in current code
  shadow: '#ffffff',
  scrim: 'rgba(0, 0, 0, 0.25)',
  backdrop: 'rgba(17, 17, 22, 0.8)',

  // Semantic surface variants (dark: solid graphite-blue steps, darkest to lightest)
  surfaceContainerHighest: '#252530',
  surfaceContainerHigh: '#20202A',
  surfaceContainer: '#1C1C24',
  surfaceContainerLow: '#17171E',
  surfaceContainerLowest: '#13131A',
  surfaceDim: '#0D0D12',
  surfaceBright: '#2E2E3A',

  // Text
  text: DARK_ON_BACKGROUND,
  textSecondary: '#A1A1B5',
  inverseText: DARK_INVERSE_ON_SURFACE,
  inverseTextSecondary: withOpacity(DARK_INVERSE_ON_SURFACE, 0.5),

  // Border / placeholder
  border: '#2E2E3A',
  placeholder: withOpacity('#A1A1B5', 0.5),

  // Interactive state opacities
  stateLayerOpacity: 0.12,
  hoverStateOpacity: stateLayerOpacity.hover,
  pressedStateOpacity: stateLayerOpacity.pressed,
  draggedStateOpacity: stateLayerOpacity.dragged,
  focusStateOpacity: stateLayerOpacity.focus,

  // Menu
  menuBackground: '#1C1C24',
  menuBackgroundDimmed: withOpacity(DARK_SURFACE, 0.9),
  menuBackgroundActive: withOpacity(DARK_PRIMARY, 0.16),
  menuSeparator: '#2E2E3A',
  menuGroupSeparator: withOpacity('#FFFFFF', 0.08),
  menuText: DARK_ON_SURFACE,
  menuDangerText: DARK_ERROR,

  // Messages
  authorBubbleBackground: '#252530',
  receivedMessageDocumentIcon: DARK_PRIMARY,
  sentMessageDocumentIcon: DARK_ON_SURFACE,
  userAvatarImageBackground: 'transparent',
  userAvatarNameColors: [
    DARK_PRIMARY,
    DARK_SECONDARY,
    DARK_TERTIARY,
    DARK_ERROR,
  ],
  searchBarBackground: '#1C1C24',

  // Thinking bubble
  thinkingBubbleBackground: '#1E1833',
  thinkingBubbleText: '#C4B5FD',
  thinkingBubbleBorder: 'rgba(139, 92, 246, 0.5)',
  thinkingBubbleShadow: '#8B5CF6',
  thinkingBubbleChevronBackground: 'rgba(139, 92, 246, 0.15)',
  thinkingBubbleChevronBorder: 'rgba(139, 92, 246, 0.3)',

  // Status bar
  bgStatusActive: '#22c55e',
  bgStatusIdle: '#4b5563',
  statusLoaded: '#34c768',

  // Buttons
  btnPrimaryBg: '#1E1640',
  btnPrimaryBorder: '#4C2A9C',
  btnPrimaryText: '#C4B5FD',
  btnReadyBg: '#052e16',
  btnReadyBorder: '#166534',
  btnReadyText: '#6ee7b7',
  btnDownloadBg: '#0a1f17',
  btnDownloadBorder: '#143d2d',
  btnDownloadText: '#34d399',

  // Icons
  iconModelTypeText: '#A78BFA',
  iconModelTypeVision: '#c4b5fd',
  iconModelTypeAudio: '#fdba74',

  // Accent — peach pill background (dark binding from canonical Figma).
  accent: {
    peach: '#7A4A1F',
    // Progress-bar fill — dark binding mirrors the light token (same hue).
    greenStrong: '#7c8e8a',
  },
};
