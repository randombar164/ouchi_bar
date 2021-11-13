export type PickType<T, K extends keyof T> = T[K];

export type concreteIngredientType = {
  id: number;
  baseIngredientId: number;
  name: string;
  tag?: string;
  createdAt: string;
  updatedAt: string;
  imgSrc: string;
}

export type ModalProps = {
  isShow: boolean;
  onClose: ()=>void;
}

export type IngredientCardProps = {
  imgSrc: string;
  name: string;
};
