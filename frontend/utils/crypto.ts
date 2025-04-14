import { keccak256, toUtf8Bytes } from "ethers";

export function hashInput(input: string): string {
  return keccak256(toUtf8Bytes(input));
}