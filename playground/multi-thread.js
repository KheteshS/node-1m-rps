import { Worker, isMainThread } from "worker_threads";
import { fileURLToPath } from "url";

if (isMainThread) {
  // Spawn 12 system level threads
  /* 
    PowerShell: Execute Get-WmiObject –class Win32_processor | ft NumberOfCores,NumberOfLogicalProcessors to get the number of cores of your machine 
    mine is 4
  */
  for (let i = 0; i < 4; i++) {
    new Worker(fileURLToPath(import.meta.url));
  }
} else {
  // Run this in each of the threads
  while (true) {}
}
