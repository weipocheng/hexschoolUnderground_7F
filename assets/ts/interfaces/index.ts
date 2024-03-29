import { ArrayOperationEnum } from '@/assets/ts/enums/'

interface ChangeList {
  method: ArrayOperationEnum;
  image?: HTMLImageElement;
}

interface Canvas {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  lineWidth: number;
  strokeStyle: string;
}

interface ColorItem {
  color: string;
  selected: boolean;
}

export { type ChangeList, Canvas, ColorItem }