export interface CommandProps {
  handleCommand: (command: string) => void;
  reset: () => void;
}
