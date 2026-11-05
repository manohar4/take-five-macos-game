# Take 5 Friends for macOS

This is a native SwiftUI macOS shell for the live Take 5 Friends game. It opens the same Render-hosted game, so online rooms and game updates stay in sync with the browser version.

## Run with Xcode

1. Open `TakeFiveMac.xcodeproj` in Xcode.
2. Select the **TakeFiveMac** scheme and **My Mac** destination.
3. Set your Apple development team under **Signing & Capabilities** if Xcode asks for one.
4. Press Run.

The app includes an **Open a room** toolbar action. Paste an invite link or enter a four digit room code to join friends directly from the app.

## Create a distributable app

In Xcode select **Product → Archive**, then choose **Distribute App**. For sharing outside the Mac App Store, use the Developer ID route once you have an Apple Developer Program membership. For personal use, running from Xcode is enough.
