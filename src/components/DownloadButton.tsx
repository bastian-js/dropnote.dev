import { DownloadCloudIcon } from "lucide-react";
import { useIsMacOS } from "../hooks/useIsMacOS";

type Props = {
  onUnavailableClick: () => void;
};

export const DownloadButton: React.FC<Props> = ({ onUnavailableClick }) => {
  const isMac = useIsMacOS();

  if (isMac) {
    return (
      <a
        href="https://github.com/bastian-js/dropnote/releases/latest/download/DropNote.dmg"
        className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#355d8e] text-white font-medium transition-all hover:scale-[1.02] active:scale-95"
      >
        <DownloadCloudIcon className="w-5 h-5" />
        Download for macOS
      </a>
    );
  }

  return (
    <button
      onClick={onUnavailableClick}
      disabled
      className="
    inline-flex items-center gap-2 px-8 py-3 rounded-lg
    border border-gray-700
    text-gray-400
    bg-gray-800/40
    font-medium
    cursor-not-allowed
    opacity-60
    transition
  "
    >
      <DownloadCloudIcon className="w-5 h-5" />
      DropNote is currently available for macOS only.
    </button>
  );
};
