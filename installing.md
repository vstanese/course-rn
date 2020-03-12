If you run into issues installing the Expo Cli there are a few things you can try.

## Windows
You should not need to run any commands in an elevated admin terminal. First thing you might try is to use the GitBash terminal rather than the Windows Command Prompt or Powershell.

Next, make sure that your project files are on the C drive rather than on some external or remote drive. This may be causing permissions errors or inconsistencies with the install.

If you continue to have issues, delete your package-lock.json file, node_modules directory and run `npm cache clean -f`. Then run a new `npm install` as a regular user. Afterwards, run an `npm start` again to install the Expo Cli tools.

## macOS
You may have run into an endless loop where the terminal prompt keeps asking you to install the global cli tools. If this is the case, you'll need to install the tools manually.

`npm install expo-cli --global`

If this command fails due to permissions errors, please refer to the npm docs on avoiding the use of sudo:

https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

Make sure you do not miss step #4 where you add the new npm directory to your $PATH.

After completing these steps, you should now be able to run `npm install expo-cli --global`

Then attempt to run an `npm start` again - you should not get prompted to install the tools this time and the Metro Bundler should start up.

IMPORTANT - If you are using macOS Catalina, it is highly likely that your default shell is now zsh. If so, you will need to instead create a ~/.zprofile instead of a ~/.profile when following these instructions:

https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally