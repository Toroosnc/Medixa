import { useState } from "react";
import { Heart, Upload, Users, TrendingUp } from "lucide-react";

export function DonationPage() {
  const [formData, setFormData] = useState({
    amount: "",
    recipientId: "",
    message: "",
    paymentProof: null as File | null,
  });

  // Mock data penerima donasi
  const recipients = [
    {
      id: "1",
      name: "Ahmad Rizki",
      age: 8,
      condition: "Leukemia",
      hospital: "RSUP Dr. Sardjito",
      needed: 50000000,
      collected: 35000000,
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400",
    },
    {
      id: "2",
      name: "Siti Nurhaliza",
      age: 12,
      condition: "Jantung Bocor",
      hospital: "RS Jantung Harapan Kita",
      needed: 75000000,
      collected: 45000000,
      image: "https://images.unsplash.com/photo-1594007759138-855170ec23ef?w=400",
    },
    {
      id: "3",
      name: "Budi Santoso",
      age: 6,
      condition: "Tumor Otak",
      hospital: "RS Dharmais",
      needed: 100000000,
      collected: 60000000,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Donation submitted:", formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, paymentProof: e.target.files[0] });
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl mb-2 text-gray-800">Donasi Untuk Mereka</h1>
        <p className="text-gray-600">Setiap donasi Anda sangat berarti bagi mereka</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-800">3</div>
              <div className="text-sm text-gray-600">Pasien Membutuhkan</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-800">1,234</div>
              <div className="text-sm text-gray-600">Donatur</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-800">140 Jt</div>
              <div className="text-sm text-gray-600">Total Terkumpul</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recipient Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {recipients.map((recipient) => {
          const progress = (recipient.collected / recipient.needed) * 100;
          return (
            <div key={recipient.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <div className="text-6xl">👶</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-1 text-gray-800">{recipient.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{recipient.age} tahun • {recipient.condition}</p>
                <p className="text-sm text-gray-600 mb-4">📍 {recipient.hospital}</p>

                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Terkumpul</span>
                    <span className="text-gray-800">
                      Rp {(recipient.collected / 1000000).toFixed(0)} Jt
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Target: Rp {(recipient.needed / 1000000).toFixed(0)} Jt
                  </div>
                </div>

                <button
                  onClick={() => setFormData({ ...formData, recipientId: recipient.id })}
                  className="w-full py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm"
                >
                  Donasi Sekarang
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Donation Form */}
      {formData.recipientId && (
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl text-gray-800">Form Donasi</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Penerima Donasi</label>
              <select
                value={formData.recipientId}
                onChange={(e) => setFormData({ ...formData, recipientId: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Pilih penerima donasi</option>
                {recipients.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} - {r.condition}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Jumlah Donasi (Rp)</label>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                placeholder="Masukkan jumlah donasi"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Pesan Dukungan (Opsional)</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tulis pesan dukungan Anda"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Upload Bukti Transfer</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                  id="file-upload"
                  required
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer text-blue-500 hover:text-blue-600"
                >
                  {formData.paymentProof ? formData.paymentProof.name : "Klik untuk upload"}
                </label>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG hingga 5MB</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Kirim Donasi
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
