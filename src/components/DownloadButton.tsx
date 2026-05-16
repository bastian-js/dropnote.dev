import { DownloadCloudIcon } from "lucide-react";

type Props = {
  onClick: () => void;
};

export const DownloadButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#355d8e] text-white font-medium transition-all hover:scale-[1.02] active:scale-95"
    >
      <DownloadCloudIcon className="w-5 h-5" />
      Download for macOS
    </button>
  );
};
