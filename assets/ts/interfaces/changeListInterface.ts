import { ArrayOperationEnum } from '~/assets/ts/enums/arrayOperationEnum'

export interface ChangeList {
  method: ArrayOperationEnum;
  image?: HTMLImageElement;
}