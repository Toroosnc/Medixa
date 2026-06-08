import { useState } from "react";
import { Search, Pill, Clock, AlertCircle, Info } from "lucide-react";

export function SmartMedicinePage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for medicines
  const medicines = [
    {
      id: 1,
      name: "Paracetamol",
      category: "Analgesik",
      dosage: "500mg",
      frequency: "3x sehari",
      indication: "Demam, nyeri ringan hingga sedang",
      warning: "Jangan melebihi 4000mg per hari",
    },
    {
      id: 2,
      name: "Amoxicillin",
      category: "Antibiotik",
      dosage: "500mg",
      frequency: "3x sehari",
      indication: "Infeksi bakteri",
      warning: "Habiskan sesuai resep dokter",
    },
    {
      id: 3,
      name: "Omeprazole",
      category: "Antasida",
      dosage: "20mg",
      frequency: "1x sehari",
      indication: "Maag, asam lambung",
      warning: "Konsumsi sebelum makan",
    },
    {
      id: 4,
      name: "Cetirizine",
      category: "Antihistamin",
      dosage: "10mg",
      frequency: "1x sehari",
      indication: "Alergi, gatal-gatal",
      warning: "Dapat menyebabkan kantuk",
    },
  ];

  const filteredMedicines = medicines.filter((med) =>
    med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    med.indication.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl mb-2 text-gray-800">Pintar Obat</h1>
        <p className="text-gray-600">Cari informasi obat dan dosis yang tepat</p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama obat atau indikasi..."
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>
      </div>

      {/* Medicine Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredMedicines.map((medicine) => (
          <div
            key={medicine.id}
            className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Pill className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-800">{medicine.name}</h3>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md">
                    {medicine.category}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Pill className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-600">Dosis</div>
                  <div className="text-gray-800">{medicine.dosage}</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-600">Frekuensi</div>
                  <div className="text-gray-800">{medicine.frequency}</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-600">Indikasi</div>
                  <div className="text-gray-800">{medicine.indication}</div>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
                <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-amber-800">{medicine.warning}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMedicines.length === 0 && (
        <div className="text-center text-gray-400 py-12">
          <Search className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p>Tidak ada obat yang ditemukan</p>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg mb-2 text-red-800">Perhatian</h3>
            <p className="text-sm text-red-700">
              Informasi ini hanya untuk referensi. Selalu konsultasikan dengan dokter atau apoteker
              sebelum mengonsumsi obat. Jangan mengobati diri sendiri tanpa anjuran tenaga medis profesional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
