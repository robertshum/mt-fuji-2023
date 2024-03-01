/* eslint-disable */
import { TypeStore } from "@needle-tools/engine"

// Import types
import { ButtonEvent } from "../scripts/buttonEvent.js";
import { FocusDistancer } from "../scripts/FocusDistancer.js";

// Register types
TypeStore.add("ButtonEvent", ButtonEvent);
TypeStore.add("FocusDistancer", FocusDistancer);
