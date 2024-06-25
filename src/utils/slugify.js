// Fungsi untuk menghasilkan slug dari judul
export const generateSlug = (title) => {
  if (!title) return '';
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Menghapus karakter khusus
    .replace(/\s+/g, '-') // Mengganti spasi dengan tanda hubung
    .replace(/-+/g, '-'); // Mengganti tanda hubung ganda dengan tunggal
};
