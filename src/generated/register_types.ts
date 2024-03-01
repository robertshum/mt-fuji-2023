// Import types from dependencies
import "needle.samples.postprocessing"
import "needle.samples.postprocessing/codegen/register_types.ts"

/* eslint-disable */
import { TypeStore } from "@needle-tools/engine"

// Import types
import { ButtonEvent } from "../scripts/buttonEvent.js";

// Register types
TypeStore.add("ButtonEvent", ButtonEvent);
