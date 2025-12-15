import React from 'react';

// 1. Impor gambar bluelogo.png. 
// Sesuaikan path ('./bluelogo.png') dengan lokasi file Anda yang sebenarnya.
import BlueLogo from './images/bluelogo.png';

export const Logo: React.FC<{ className?: string, variant?: 'default' | 'white' }> = ({ 
    className = '', 
    variant = 'default' 
}) => {
    // Ketika menggunakan gambar, properti 'variant' (default/white) 
    // dan 'textColor' mungkin tidak lagi diperlukan, karena gambar sudah memiliki warna sendiri.

    // 2. Ganti seluruh struktur logo teks/CSS dengan tag <img>
    return (
        // Menggunakan className yang diteruskan untuk styling eksternal
        <div className={`flex items-center select-none ${className}`}> 
            <img 
                src={BlueLogo} 
                alt="LapangIn Logo" 
                // Anda mungkin ingin menambahkan class untuk mengatur ukuran logo, misalnya:
                className="h-8 md:h-10" 
            />
        </div>
    );
};