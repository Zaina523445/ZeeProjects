'use client';
import { useState } from 'react';
import { MdClose, MdOpenInNew } from 'react-icons/md';
import { HiOutlineBadgeCheck } from 'react-icons/hi';

function CertificateModal({ cert }) {
  const [isOpen, setIsOpen] = useState(false);

  const getEmbedUrl = (link) => {
    if (link.includes('drive.google.com')) {
      const fileId = link.match(/\/d\/(.*?)\//)?.[1];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    if (link.includes('coursera.org')) {
      return link;
    }
    return link;
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-3 flex items-center gap-1 text-xs text-[#16f2b3] hover:text-pink-400 transition-colors duration-300 w-fit cursor-pointer"
      >
        <HiOutlineBadgeCheck size={14} />
        <span>View Certificate</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-[#0d1224] rounded-xl border border-violet-500 w-[90vw] max-w-[900px] h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-violet-500">
              <p className="text-white text-sm font-medium">{cert.title}</p>
              <div className="flex items-center gap-3">
                
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-[#16f2b3] hover:text-pink-400 transition-colors duration-300"
                >
                  <MdOpenInNew size={16} />
                  <span>Open in new tab</span>
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-pink-500 transition-colors duration-300"
                >
                  <MdClose size={22} />
                </button>
              </div>
            </div>
            <div className="flex-1 p-2">
              <iframe
                src={getEmbedUrl(cert.link)}
                className="w-full h-full rounded-lg"
                allow="autoplay"
                title={cert.title}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CertificateModal;
