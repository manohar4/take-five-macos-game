import SwiftUI

@main
struct TakeFiveMacApp: App {
    var body: some Scene {
        WindowGroup("Take 5 Friends") {
            ContentView()
                .frame(minWidth: 960, minHeight: 700)
        }
        .windowResizability(.contentMinSize)
    }
}
