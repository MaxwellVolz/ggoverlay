// Global TypeScript types and interfaces

export interface LoadingState {
  isLoading: boolean;
  progress: number;
}

export interface SceneProps {
  children?: React.ReactNode;
}

export interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}

// Add your custom types here
