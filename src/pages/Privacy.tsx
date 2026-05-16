import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Database, Lock, Globe } from "lucide-react";

import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";

const sections = [
  {
    title: "1. Responsible Entity",
    content:
      "The developer of DropNote is responsible for data processing within the scope of this app.",
  },
  {
    title: "2. What Data Is Processed",
    content:
      "DropNote only processes data that you enter or configure yourself in the app, such as:",
    items: [
      "Note content (text and formatting)",
      "Note metadata (e.g., title, last modified time, pin/lock status)",
      "App settings (e.g., theme, hotkey, display options)",
    ],
  },
  {
    title: "3. Storage Location and Purpose",
    content:
      "This data is stored locally on your device, especially in your user directory under Library/Application Support/DropNote.",
    items: [
      "Providing note-taking features",
      "Searching your notes",
      "Saving your settings",
      "Exporting notes (TXT/PDF), only when you actively trigger it",
    ],
  },
  {
    title: "4. No Transfer to Third Parties",
    content:
      "DropNote does not transmit note data to external servers. There is no built-in cloud synchronization and no server-side processing.",
  },
  {
    title: "5. No Analytics or Tracking Services",
    content:
      "DropNote does not use tracking tools, ad SDKs, or analytics services for user tracking.",
  },
  {
    title: "6. Network Access",
    content:
      "No API calls or other client-server communication are required for the app's core features. The app is built local-first.",
  },
  {
    title: "7. Security / Protection of Locked Notes",
    content:
      "DropNote offers a note lock feature (e.g., password/biometrics, depending on device configuration). Please note: no software system can guarantee absolute security.",
  },
  {
    title: "8. Your Control Over Data",
    content: "You remain in full control of your data:",
    items: [
      "You can delete notes at any time.",
      "You can export notes locally.",
      "When uninstalling the app, you can manually remove local app data.",
    ],
  },
  {
    title: "9. Changes to This Privacy Policy",
    content:
      "This privacy policy may be updated when features change. The current version with date is authoritative.",
  },
  {
    title: "10. Contact",
    content:
      "If you have questions about privacy in DropNote, please contact the developer via the contact form.",
    link: { href: "https://bbastian.dev/contact", label: "bbastian.dev/contact" },
  },
];

export default function Privacy() {
  return (
    <div className="bg-[#0f1f2e] min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="relative pt-28 pb-20 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a5c]/35 via-[#0f1f2e] to-[#0a1420] pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#355d8e]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-24 right-1/4 w-72 h-72 bg-[#1a3a5c]/15 rounded-full blur-3xl pointer-events-none" />

        <section className="relative z-10 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-gray-700/60 bg-[#0a1420]/80 backdrop-blur-sm shadow-2xl shadow-black/20 p-6 sm:p-8 md:p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#355d8e]/40 bg-[#355d8e]/10 text-[#8fc3ff] text-xs tracking-wide uppercase mb-5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Privacy
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight mb-3">
              Privacy Policy for DropNote
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mb-8">
              Effective date: 27.03.2026
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
              <div className="rounded-xl border border-gray-800/80 bg-[#0f1f2e]/70 p-4">
                <Database className="w-5 h-5 text-[#5ba7ff] mb-2" />
                <p className="text-white text-sm font-medium mb-1">
                  Stored locally
                </p>
                <p className="text-gray-400 text-xs">
                  Your data stays on your device.
                </p>
              </div>
              <div className="rounded-xl border border-gray-800/80 bg-[#0f1f2e]/70 p-4">
                <Globe className="w-5 h-5 text-[#5ba7ff] mb-2" />
                <p className="text-white text-sm font-medium mb-1">
                  No cloud dependency
                </p>
                <p className="text-gray-400 text-xs">
                  No server-side processing.
                </p>
              </div>
              <div className="rounded-xl border border-gray-800/80 bg-[#0f1f2e]/70 p-4">
                <Lock className="w-5 h-5 text-[#5ba7ff] mb-2" />
                <p className="text-white text-sm font-medium mb-1">
                  Full control
                </p>
                <p className="text-gray-400 text-xs">
                  Delete and export anytime.
                </p>
              </div>
            </div>

            <div className="space-y-7">
              <p className="text-gray-300 leading-relaxed">
                DropNote respects your privacy. This app is designed as a local
                notes app and processes data primarily on your device.
              </p>

              {sections.map((section) => (
                <article
                  key={section.title}
                  className="border-t border-gray-800/80 pt-6"
                >
                  <h2 className="text-lg sm:text-xl text-white font-medium mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                    {"link" in section && section.link && (
                      <>
                        {" "}
                        <a
                          href={section.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4d7ef5] hover:text-[#7eb4ff] underline underline-offset-2 transition-colors duration-200"
                        >
                          {section.link.label}
                        </a>
                      </>
                    )}
                  </p>
                  {section.items && (
                    <ul className="mt-3 space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="text-gray-400 leading-relaxed flex gap-2"
                        >
                          <span className="text-[#5ba7ff] mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-xs text-gray-500">
                This page provides a transparent overview of data processing in
                DropNote.
              </p>
              <Link
                to="/"
                className="inline-flex justify-center items-center px-4 py-2 rounded-lg border border-[#355d8e]/60 text-[#cde5ff] hover:bg-[#355d8e]/15 transition-colors duration-200 text-sm"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
