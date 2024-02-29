"use client";
import { getDogs } from "../firebaseConfig";

export default function AddButton() {
  return <button onClick={() => getDogs()}>EEFetch and display data</button>;
}
