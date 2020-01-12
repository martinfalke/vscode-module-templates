"use strict";
import { commands, ExtensionContext, window } from "vscode";

export function activate(context: ExtensionContext) {
  const commandId = "extension.newModuleFromTemplate";

  const command = commands.registerCommand(commandId, () => {
    window.showInformationMessage("Hey");
  });

  context.subscriptions.push(command);
}
