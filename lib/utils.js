import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function joinAndRandomizeArrays(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  for (let i = combinedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combinedArray[i], combinedArray[j]] = [combinedArray[j], combinedArray[i]];
  }

  return combinedArray;
}

export function randomizeArray(arr) {
  return joinAndRandomizeArrays(arr, []);
}
