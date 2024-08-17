export interface ILocationProps {
  origin: string | null;
  destination: string | null;
}

export type ILocationValidatedProps = {
  [K in keyof ILocationProps]: Exclude<ILocationProps[K], null>;
};