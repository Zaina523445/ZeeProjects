'use client';
import { useState } from 'react';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import Image from 'next/image';

function CertificateModal({ cert }) {
  return (
    <div className="relative mt-3 group w-fit">
      <div className="flex items-center gap-1 text-xs text-[#16f2b3] cursor-pointer">
        <HiOutlineBadgeCheck size={14} />
        <span>Hover to preview certificate</span>
      </div>
      {cert.image && (
        <div className="absolute bottom-8 left-0 z-50 hidden group-hover:block w-[320px] rounded-lg overflow-hidden shadow-2xl border border-violet-500">
          <Image src={cert.image} alt={cert.title} width={320} height={220} className="w-full h-auto object-cover" />
        </div>
      )}
    </div>
  );
}

export default CertificateModal;
