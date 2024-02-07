export enum GlowCirclePositions {
  top = "top",
  center = "center",
  bottom = "bottom",
}

export interface GlowCircleProps {
  position: GlowCirclePositions;
  isTriple?: boolean;
}
