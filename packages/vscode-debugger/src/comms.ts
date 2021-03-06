import { ChildProcess } from "child_process";

export const THREAD_BITS = 10;

const THREAD_MASK = ~(-1 << THREAD_BITS);

export function toThread(local: number) {
  return local & THREAD_MASK;
}

export interface Handler {
  id: number;
  name?: string;
  closed?: boolean;
  childProcess?: ChildProcess;
  send(data: any): void;
  onerror?: (data: any) => void;
  onmessage?: (data: any) => void;
  onclose?: () => void;
  close(): void;
}
