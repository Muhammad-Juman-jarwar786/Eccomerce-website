export interface RouteTransitionProps {
  children: React.ReactNode;
}

export interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FeatureCardProps {
  img: string;
  alt: string;
  bgcolor: string;
  txtcolor: string;
  title: string;
  animation: string;
}

export interface CartCounterState {
  value: number;
}
