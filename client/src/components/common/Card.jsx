import React from "react";
import { Link } from "react-router-dom";

/**
 * Komponen kartu sederhana dan reusable untuk menampilkan solusi/kapabilitas.
 * Mendukung gambar/ikon opsional dan tautan opsional.
 * * @param {object} props
 * @param {string} props.title - Judul Kartu.
 * @param {string} props.description - Deskripsi singkat.
 * @param {string} [props.imageUrl] - URL gambar/ikon opsional.
 * @param {string} [props.link] - URL tujuan redirect opsional.
 */
function Card({ title, description, imageUrl, link }) {
  // Tentukan apakah Card harus menjadi Link atau hanya Div
  const CardContainer = link ? Link : "div";
  const cardProps = link ? { to: link } : {};

  return (
    // Menggunakan Div h-full untuk menampung card container
    <div className="h-full">
      <CardContainer
        {...cardProps}
        // Kelas CardContainer dengan styling border dan shadow
        className={`
          bg-white justify-between rounded-2xl shadow-lg p-8 h-full flex flex-col border-t-10 border-transparent hover:border-t-[var(--color-accent)] transition-colors duration-300
          ${
            link
              ? "hover:shadow-xl cursor-pointer"
              : ""
          }
        `}
      >
        {/* Konten Atas */}
        <div>
          {/* Opsi 1: Menampilkan Gambar/Ikon jika imageUrl ada */}
          {imageUrl && (
            <div className="mb-4 w-12 h-12">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {/* Opsi 2: Menampilkan border/warna jika tidak ada gambar (opsional, meniru image_829143.png) */}
          {!imageUrl && (
            <div className="w-1/4 mb-4"></div>
          )}

          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        {/* Tautan Bawah (Hanya ditampilkan jika link ada) */}
        {link && (
          <div className="mt-4">
            <span className="text-accent font-semibold hover:underline text-sm">
              Selengkapnya &rarr;
            </span>
          </div>
        )}
      </CardContainer>
    </div>
  );
}

export default Card;
