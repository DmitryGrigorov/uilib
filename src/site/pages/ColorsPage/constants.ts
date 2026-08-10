import { IThemeSite } from "../../themes/types";

interface IColorItems {
  color?: string;
  description?: string;
  transparency?: string;
  colorName?: string;
}
interface IColorToken {
  title?: string;
  colors: Array<IColorItems>;
  subtitle?: string;
}
export const colorTokens = (theme: IThemeSite): Array<IColorToken> => [
  {
    title: "Neutral",
    subtitle: "Neutral palette for surfaces and supporting UI elements",
    colors: [
      {
        color: theme.colors.neutral0,
        description: "Main layout background."
      },
      {
        color: theme.colors.neutral1,
        description: "Primary background for pages and interface elements."
      },
      {
        color: theme.colors.neutral2,
        description: "Secondary background for interface elements."
      },
      {
        color: theme.colors.neutral3,
        description: "Supporting shade"
      },
      {
        color: theme.colors.neutral4,
        description: "Supporting shade"
      },
      {
        color: theme.colors.neutral5,
        description: "Disabled content"
      },
      {
        color: theme.colors.neutral6,
        description: "Dividers, borders, and outlines"
      },
      {
        color: theme.colors.neutral7,
        description: "Token used by <p2> m/s text styles"
      },
      {
        color: theme.colors.neutral8,
        description: "Supporting shade"
      },
      {
        color: theme.colors.neutral9,
        description: "Supporting shade"
      },
      {
        color: theme.colors.neutral10,
        description: "Token used by <p2> xl/l text styles"
      },
      {
        color: theme.colors.neutral11,
        description: "Supporting shade"
      },
      {
        color: theme.colors.neutral12,
        description: "Token used by <h> and <p1> text styles"
      },
      {
        color: theme.colors.neutral13,
        description: "Supporting shade"
      }
    ]
  },
  {
    title: "Orange",
    subtitle:
      "Used for primary interface elements, buttons, active states, and brand accents",
    colors: [
      {
        color: theme.colors.orange1,
        description: "Pressed-state background"
      },
      {
        color: theme.colors.orange2,
        description: "Hover-state background"
      },
      {
        color: theme.colors.orange3,
        description: "Primary interface background"
      },
      {
        color: theme.colors.orange4,
        description: "Supporting shade"
      },
      {
        color: theme.colors.orange5,
        description: "Supporting shade"
      },
      {
        color: theme.colors.orange6,
        description: "Supporting shade"
      },
      {
        color: theme.colors.orange7,
        description: "Supporting background shade"
      },
      {
        color: theme.colors.orange8,
        description: "Supporting shade"
      },
      {
        color: theme.colors.orange9,
        description: "Supporting shade"
      },
      {
        color: theme.colors.orange10,
        description: "Supporting shade"
      },
      {
        color: theme.colors.orange11,
        description: "Supporting shade"
      },
      {
        color: theme.colors.orange12,
        description: "Supporting shade"
      },
      {
        color: theme.colors.orange13,
        description: "Supporting shade"
      },
      {
        color: theme.colors.orange14,
        description: "Supporting shade"
      }
    ]
  },
  {
    title: "Blue",
    subtitle:
      "Supporting color for secondary and informational interface elements",
    colors: [
      {
        color: theme.colors.blue1,
        description: "Pressed-state background"
      },
      {
        color: theme.colors.blue2,
        description: "Hover-state background"
      },
      {
        color: theme.colors.blue3,
        description: "Primary interface background"
      },
      {
        color: theme.colors.blue4,
        description: "Supporting shade"
      },
      {
        color: theme.colors.blue5,
        description: "Supporting shade"
      },
      {
        color: theme.colors.blue6,
        description: "Supporting shade"
      },
      {
        color: theme.colors.blue7,
        description: "Supporting background shade"
      },
      {
        color: theme.colors.blue8,
        description: "Supporting shade"
      },
      {
        color: theme.colors.blue9,
        description: "Supporting shade"
      },
      {
        color: theme.colors.blue10,
        description: "Supporting shade"
      },
      {
        color: theme.colors.blue11,
        description: "Supporting shade"
      },
      {
        color: theme.colors.blue12,
        description: "Supporting shade"
      },
      {
        color: theme.colors.blue13,
        description: "Supporting shade"
      },
      {
        color: theme.colors.blue14,
        description: "Supporting shade"
      }
    ]
  },
  {
    title: "Red",
    subtitle: "Used for interface elements and messages with negative meaning",
    colors: [
      {
        color: theme.colors.red1,
        description: "Pressed-state background"
      },
      {
        color: theme.colors.red2,
        description: "Hover-state background"
      },
      {
        color: theme.colors.red3,
        description: "Primary interface background"
      },
      {
        color: theme.colors.red4,
        description: "Supporting shade"
      },
      {
        color: theme.colors.red5,
        description: "Supporting shade"
      },
      {
        color: theme.colors.red6,
        description: "Supporting shade"
      },
      {
        color: theme.colors.red7,
        description: "Supporting background shade"
      },
      {
        color: theme.colors.red8,
        description: "Supporting shade"
      },
      {
        color: theme.colors.red9,
        description: "Supporting shade"
      },
      {
        color: theme.colors.red10,
        description: "Supporting shade"
      },
      {
        color: theme.colors.red11,
        description: "Supporting shade"
      },
      {
        color: theme.colors.red12,
        description: "Supporting shade"
      },
      {
        color: theme.colors.red13,
        description: "Supporting shade"
      },
      {
        color: theme.colors.red14,
        description: "Supporting shade"
      }
    ]
  },
  {
    title: "Teal",
    subtitle: "Used for interface elements and messages with positive meaning",
    colors: [
      {
        color: theme.colors.teal1,
        description: "Pressed-state background"
      },
      {
        color: theme.colors.teal2,
        description: "Hover-state background"
      },
      {
        color: theme.colors.teal3,
        description: "Primary interface background"
      },
      {
        color: theme.colors.teal4,
        description: "Supporting shade"
      },
      {
        color: theme.colors.teal5,
        description: "Supporting shade"
      },
      {
        color: theme.colors.teal6,
        description: "Supporting shade"
      },
      {
        color: theme.colors.teal7,
        description: "Supporting background shade"
      },
      {
        color: theme.colors.teal8,
        description: "Supporting shade"
      },
      {
        color: theme.colors.teal9,
        description: "Supporting shade"
      },
      {
        color: theme.colors.teal10,
        description: "Supporting shade"
      },
      {
        color: theme.colors.teal11,
        description: "Supporting shade"
      },
      {
        color: theme.colors.teal12,
        description: "Supporting shade"
      },
      {
        color: theme.colors.teal13,
        description: "Supporting shade"
      },
      {
        color: theme.colors.teal14,
        description: "Supporting shade"
      }
    ]
  },
  {
    title: "Amber",
    subtitle: "Used for warning messages",
    colors: [
      {
        color: theme.colors.amber1,
        description: "Pressed-state background"
      },
      {
        color: theme.colors.amber2,
        description: "Hover-state background"
      },
      {
        color: theme.colors.amber3,
        description: "Primary interface background"
      },
      {
        color: theme.colors.amber4,
        description: "Supporting shade"
      },
      {
        color: theme.colors.amber5,
        description: "Supporting shade"
      },
      {
        color: theme.colors.amber6,
        description: "Supporting shade"
      },
      {
        color: theme.colors.amber7,
        description: "Supporting background shade"
      },
      {
        color: theme.colors.amber8,
        description: "Supporting shade"
      },
      {
        color: theme.colors.amber9,
        description: "Supporting shade"
      },
      {
        color: theme.colors.amber10,
        description: "Supporting shade"
      },
      {
        color: theme.colors.amber11,
        description: "Supporting shade"
      },
      {
        color: theme.colors.amber12,
        description: "Supporting shade"
      },
      {
        color: theme.colors.amber13,
        description: "Supporting shade"
      },
      {
        color: theme.colors.amber14,
        description: "Supporting shade"
      }
    ]
  },
  {
    title: "Overlay",
    subtitle: "Overlay color palette",
    colors: [
      {
        color: theme.colors.overlay1,
        description: "Third-level overlay",
        transparency: "48%",
        colorName: "neutral/1"
      },
      {
        color: theme.colors.overlay2,
        description: "Second-level overlay, used by second-level popovers",
        transparency: "64%",
        colorName: "neutral/2"
      },
      {
        color: theme.colors.overlay3,
        description: "First-level overlay, used by popovers and sidebars",
        transparency: "80%",
        colorName: "neutral/6"
      }
    ]
  },
  {
    title: "Yellow",
    subtitle: "Supporting color",
    colors: [
      {
        color: theme.colors.yellow1,
        description: "Pressed-state background"
      },
      {
        color: theme.colors.yellow2,
        description: "Hover-state background"
      },
      {
        color: theme.colors.yellow3,
        description: "Primary interface background"
      },
      {
        color: theme.colors.yellow4,
        description: "Supporting shade"
      },
      {
        color: theme.colors.yellow5,
        description: "Supporting shade"
      },
      {
        color: theme.colors.yellow6,
        description: "Supporting shade"
      },
      {
        color: theme.colors.yellow7,
        description: "Supporting background shade"
      },
      {
        color: theme.colors.yellow8,
        description: "Supporting shade"
      },
      {
        color: theme.colors.yellow9,
        description: "Supporting shade"
      },
      {
        color: theme.colors.yellow10,
        description: "Supporting shade"
      },
      {
        color: theme.colors.yellow11,
        description: "Supporting shade"
      },
      {
        color: theme.colors.yellow12,
        description: "Supporting shade"
      },
      {
        color: theme.colors.yellow13,
        description: "Supporting shade"
      },
      {
        color: theme.colors.yellow14,
        description: "Supporting shade"
      }
    ]
  },
  {
    title: "Green",
    subtitle: "Supporting color",
    colors: [
      {
        color: theme.colors.green1,
        description: "Pressed-state background"
      },
      {
        color: theme.colors.green2,
        description: "Hover-state background"
      },
      {
        color: theme.colors.green3,
        description: "Primary interface background"
      },
      {
        color: theme.colors.green4,
        description: "Supporting shade"
      },
      {
        color: theme.colors.green5,
        description: "Supporting shade"
      },
      {
        color: theme.colors.green6,
        description: "Supporting shade"
      },
      {
        color: theme.colors.green7,
        description: "Supporting background shade"
      },
      {
        color: theme.colors.green8,
        description: "Supporting shade"
      },
      {
        color: theme.colors.green9,
        description: "Supporting shade"
      },
      {
        color: theme.colors.green10,
        description: "Supporting shade"
      },
      {
        color: theme.colors.green11,
        description: "Supporting shade"
      },
      {
        color: theme.colors.green12,
        description: "Supporting shade"
      },
      {
        color: theme.colors.green13,
        description: "Supporting shade"
      },
      {
        color: theme.colors.green14,
        description: "Supporting shade"
      }
    ]
  },
  {
    title: "Cyan",
    subtitle: "Supporting color",
    colors: [
      {
        color: theme.colors.cyan1,
        description: "Pressed-state background"
      },
      {
        color: theme.colors.cyan2,
        description: "Hover-state background"
      },
      {
        color: theme.colors.cyan3,
        description: "Primary interface background"
      },
      {
        color: theme.colors.cyan4,
        description: "Supporting shade"
      },
      {
        color: theme.colors.cyan5,
        description: "Supporting shade"
      },
      {
        color: theme.colors.cyan6,
        description: "Supporting shade"
      },
      {
        color: theme.colors.cyan7,
        description: "Supporting background shade"
      },
      {
        color: theme.colors.cyan8,
        description: "Supporting shade"
      },
      {
        color: theme.colors.cyan9,
        description: "Supporting shade"
      },
      {
        color: theme.colors.cyan10,
        description: "Supporting shade"
      },
      {
        color: theme.colors.cyan11,
        description: "Supporting shade"
      },
      {
        color: theme.colors.cyan12,
        description: "Supporting shade"
      },
      {
        color: theme.colors.cyan13,
        description: "Supporting shade"
      },
      {
        color: theme.colors.cyan14,
        description: "Supporting shade"
      }
    ]
  },
  {
    title: "Purple",
    subtitle: "Supporting color",
    colors: [
      {
        color: theme.colors.purple1,
        description: "Pressed-state background"
      },
      {
        color: theme.colors.purple2,
        description: "Hover-state background"
      },
      {
        color: theme.colors.purple3,
        description: "Primary interface background"
      },
      {
        color: theme.colors.purple4,
        description: "Supporting shade"
      },
      {
        color: theme.colors.purple5,
        description: "Supporting shade"
      },
      {
        color: theme.colors.purple6,
        description: "Supporting shade"
      },
      {
        color: theme.colors.purple7,
        description: "Supporting background shade"
      },
      {
        color: theme.colors.purple8,
        description: "Supporting shade"
      },
      {
        color: theme.colors.purple9,
        description: "Supporting shade"
      },
      {
        color: theme.colors.purple10,
        description: "Supporting shade"
      },
      {
        color: theme.colors.purple11,
        description: "Supporting shade"
      },
      {
        color: theme.colors.purple12,
        description: "Supporting shade"
      },
      {
        color: theme.colors.purple13,
        description: "Supporting shade"
      },
      {
        color: theme.colors.purple14,
        description: "Supporting shade"
      }
    ]
  }
];
