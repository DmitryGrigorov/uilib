export interface IZIndexScale {
  zIndex1: number;
  zIndex2: number;
  zIndex3: number;
  zIndex4: number;
  zIndex5: number;
  zIndex6: number;
  zIndex7: number;
  zIndex8: number;
  zIndex9: number;
  zIndex10: number;
  zIndex11: number;
  zIndex12: number;
  zIndex13: number;
  zIndex14: number;
  zIndex15: number;
}

export interface IZIndex {
  background: number;
  widget: number;
  foreground: number;
  drawer: number;
  modal: number;
  tooltip: number;
}

const ZINDEX_SCALE: IZIndexScale = {
  zIndex1: 100,
  zIndex2: 200,
  zIndex3: 300,
  zIndex4: 400,
  zIndex5: 500,
  zIndex6: 600,
  zIndex7: 700,
  zIndex8: 800,
  zIndex9: 900,
  zIndex10: 1000,
  zIndex11: 1100,
  zIndex12: 1200,
  zIndex13: 1300,
  zIndex14: 1400,
  zIndex15: 1500
};

export const ZINDEX: IZIndex = {
  background: ZINDEX_SCALE.zIndex1,
  widget: ZINDEX_SCALE.zIndex4,
  foreground: ZINDEX_SCALE.zIndex9,
  drawer: ZINDEX_SCALE.zIndex10,
  modal: ZINDEX_SCALE.zIndex11,
  tooltip: ZINDEX_SCALE.zIndex12
};
