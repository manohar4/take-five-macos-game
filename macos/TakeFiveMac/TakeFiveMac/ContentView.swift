import AppKit
import SwiftUI
import WebKit

struct ContentView: View {
    @State private var pageURL = GameURL.defaultURL
    @State private var isShowingAddress = false

    var body: some View {
        GameWebView(url: pageURL)
            .toolbar {
                ToolbarItemGroup(placement: .navigation) {
                    Button {
                        isShowingAddress.toggle()
                    } label: {
                        Label("Open a room", systemImage: "person.2.fill")
                    }
                    .help("Open a Take 5 room link")

                    Button {
                        pageURL = GameURL.defaultURL
                    } label: {
                        Label("Home", systemImage: "house.fill")
                    }
                    .help("Return to the Take 5 home screen")
                }
            }
            .sheet(isPresented: $isShowingAddress) {
                RoomLinkSheet(url: $pageURL)
            }
    }
}

private enum GameURL {
    static let defaultURL = URL(string: "https://take-five-friends-game.onrender.com/")!

    static func validatedRoomURL(from text: String) -> URL? {
        let trimmed = text.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmed.isEmpty else { return defaultURL }

        if !trimmed.hasPrefix("http") {
            guard trimmed.count == 4, trimmed.allSatisfy(\.isNumber) else { return nil }
        }

        let candidate = trimmed.hasPrefix("http")
            ? trimmed
            : "https://take-five-friends-game.onrender.com/?room=\(trimmed)"
        guard let url = URL(string: candidate),
              url.host == defaultURL.host else { return nil }
        return url
    }
}

private struct RoomLinkSheet: View {
    @Binding var url: URL
    @Environment(\.dismiss) private var dismiss
    @State private var roomLink = ""
    @State private var hasError = false

    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            Text("Join a Take 5 room")
                .font(.title2.weight(.bold))
            Text("Paste a Take 5 invite link or enter its four digit room code.")
                .foregroundStyle(.secondary)
            TextField("Room link or code", text: $roomLink)
                .textFieldStyle(.roundedBorder)
            if hasError {
                Text("Use a Take 5 Friends invite link or a four digit room code.")
                    .font(.caption)
                    .foregroundStyle(.red)
            }
            HStack {
                Spacer()
                Button("Cancel") { dismiss() }
                Button("Open room") {
                    guard let roomURL = GameURL.validatedRoomURL(from: roomLink) else {
                        hasError = true
                        return
                    }
                    url = roomURL
                    dismiss()
                }
                .keyboardShortcut(.defaultAction)
            }
        }
        .padding(24)
        .frame(width: 440)
    }
}

private struct GameWebView: NSViewRepresentable {
    let url: URL

    func makeCoordinator() -> Coordinator { Coordinator() }

    func makeNSView(context: Context) -> WKWebView {
        let preferences = WKWebpagePreferences()
        preferences.allowsContentJavaScript = true

        let configuration = WKWebViewConfiguration()
        configuration.defaultWebpagePreferences = preferences
        configuration.websiteDataStore = .default()

        let view = WKWebView(frame: .zero, configuration: configuration)
        view.navigationDelegate = context.coordinator
        view.allowsBackForwardNavigationGestures = true
        view.setValue(false, forKey: "drawsBackground")
        view.load(URLRequest(url: url))
        context.coordinator.loadedURL = url
        return view
    }

    func updateNSView(_ view: WKWebView, context: Context) {
        guard context.coordinator.loadedURL != url else { return }
        context.coordinator.loadedURL = url
        view.load(URLRequest(url: url))
    }

    final class Coordinator: NSObject, WKNavigationDelegate {
        var loadedURL: URL?

        func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
            guard let destination = navigationAction.request.url else {
                decisionHandler(.cancel)
                return
            }
            if destination.host == GameURL.defaultURL.host {
                decisionHandler(.allow)
            } else {
                NSWorkspace.shared.open(destination)
                decisionHandler(.cancel)
            }
        }
    }
}
