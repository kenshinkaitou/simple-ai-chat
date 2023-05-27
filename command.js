
import help from "./command/help.js";
import stream from "./command/stream.js";
import entry from "./command/entry.js";

export default function commands(userInput) {
  const args = userInput.trim()
                .replace(/\s\s+/g, ' ')
                .split(' ').slice(1);

  if (userInput.startsWith(":help")) {
    return help();
  }

  if (userInput.startsWith(":entry")) {
    return entry(args);
  }

  if (userInput.startsWith(":stream")) {
    return stream(args);
  }

  return "Unknown command.";
}