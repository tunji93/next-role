export type ButtonVariant = {
  outline: string = "outline";
};

export type ButtonSize = {
  md: string = "md";
};

export declare module IButton {
  export interface IProps {
    label: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isLoading?: boolean;
    customClass?: string;
    style?: object;
    type?: any;
    disabled?: boolean;
    loaderColor?: string;
    bgColor?: string;
    fontColor?: string;
    outline?: boolean;
    variant?: ButtonVariant;
    size?: ButtonSize;
    loadingDisable?: boolean;
    useLoader?: boolean;
  }

  export interface IState {}
}
