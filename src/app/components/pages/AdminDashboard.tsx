import { useState } from "react";
import { Users, Heart, FileText, Plus, Trash2, Edit, Download } from "lucide-react";

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"donatur" | "laporan">("donatur");
  const [showAddModal, setShowAddModal] = useState(false);

  // Mock data donatur
  const [donors, setDonors] = useState([
    { id: 1, name: "Budi Hartono", email: "budi@email.com", phone: "081234567890", totalDonation: 5000000, donationCount: 3 },
    { id: 2, name: "Siti Aminah", email: "siti@email.com", phone: "081234567891", totalDonation: 2000000, donationCount: 1 },
    { id: 3, name: "Ahmad Yani", email: "ahmad@email.com", phone: "081234567892", totalDonation: 10000000, donationCount: 5 },
  ]);

  // Mock data laporan
  const reports = [
    {
      id: 1,
      recipient: "Ahmad Rizki",
      period: "Januari 2026",
      totalReceived: 15000000,
      usage: "Biaya operasi dan perawatan",
      date: "2026-01-31",
    },
    {
      id: 2,
      recipient: "Siti Nurhaliza",
      period: "Februari 2026",
      totalReceived: 20000000,
      usage: "Operasi jantung dan rehabilitasi",
      date: "2026-02-28",
    },
  ];

  const handleDeleteDonor = (id: number) => {
    if (confirm("Yakin ingin menghapus data donatur ini?")) {
      setDonors(donors.filter((d) => d.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl mb-2 text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Kelola data donatur dan laporan donasi</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-800">{donors.length}</div>
              <div className="text-sm text-gray-600">Total Donatur</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-800">
                {donors.reduce((sum, d) => sum + d.donationCount, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Donasi</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl text-gray-800">{reports.length}</div>
              <div className="text-sm text-gray-600">Laporan Dibuat</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab("donatur")}
              className={`px-6 py-4 text-sm transition-colors ${
                activeTab === "donatur"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Users className="w-4 h-4 inline mr-2" />
              Data Donatur
            </button>
            <button
              onClick={() => setActiveTab("laporan")}
              className={`px-6 py-4 text-sm transition-colors ${
                activeTab === "laporan"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Laporan Donatur
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === "donatur" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl text-gray-800">Daftar Donatur</h2>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Tambah Donatur
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm text-gray-600">Nama</th>
                      <th className="px-4 py-3 text-left text-sm text-gray-600">Email</th>
                      <th className="px-4 py-3 text-left text-sm text-gray-600">Telepon</th>
                      <th className="px-4 py-3 text-left text-sm text-gray-600">Total Donasi</th>
                      <th className="px-4 py-3 text-left text-sm text-gray-600">Jumlah Donasi</th>
                      <th className="px-4 py-3 text-left text-sm text-gray-600">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donors.map((donor) => (
                      <tr key={donor.id} className="border-t border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-800">{donor.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{donor.email}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{donor.phone}</td>
                        <td className="px-4 py-3 text-sm text-gray-800">
                          Rp {(donor.totalDonation / 1000000).toFixed(1)} Jt
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">{donor.donationCount}x</td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteDonor(donor.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "laporan" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl text-gray-800">Laporan Donatur</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  <Plus className="w-4 h-4" />
                  Buat Laporan Baru
                </button>
              </div>

              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg text-gray-800 mb-1">
                          Laporan {report.recipient} - {report.period}
                        </h3>
                        <p className="text-sm text-gray-600">Dibuat: {report.date}</p>
                      </div>
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Total Dana Diterima</div>
                        <div className="text-xl text-gray-800">
                          Rp {(report.totalReceived / 1000000).toFixed(1)} Juta
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Penggunaan Dana</div>
                        <div className="text-gray-800">{report.usage}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Donor Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl mb-4 text-gray-800">Tambah Donatur Baru</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nama donatur"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Telepon</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
