import { MapPin, Phone, Clock, Navigation, Star } from "lucide-react";

export function NearbyHospitalPage() {
  // Mock data for hospitals
  const hospitals = [
    {
      id: 1,
      name: "RS Cipto Mangunkusumo",
      type: "Rumah Sakit Umum",
      distance: "1.2 km",
      rating: 4.5,
      address: "Jl. Diponegoro No. 71, Jakarta Pusat",
      phone: "(021) 3141592",
      hours: "24 Jam",
      emergency: true,
    },
    {
      id: 2,
      name: "RS Siloam Hospitals",
      type: "Rumah Sakit Swasta",
      distance: "2.5 km",
      rating: 4.7,
      address: "Jl. Garnisun Dalam No. 2-3, Jakarta Pusat",
      phone: "(021) 5021000",
      hours: "24 Jam",
      emergency: true,
    },
    {
      id: 3,
      name: "RS Hermina Kemayoran",
      type: "Rumah Sakit Swasta",
      distance: "3.1 km",
      rating: 4.3,
      address: "Jl. Benyamin Sueb, Kemayoran",
      phone: "(021) 65303355",
      hours: "24 Jam",
      emergency: true,
    },
    {
      id: 4,
      name: "Klinik Pratama Sehat",
      type: "Klinik",
      distance: "0.8 km",
      rating: 4.2,
      address: "Jl. Senen Raya No. 123",
      phone: "(021) 3456789",
      hours: "08.00 - 20.00",
      emergency: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl mb-2 text-gray-800">Rumah Sakit Terdekat</h1>
        <p className="text-gray-600">Temukan fasilitas kesehatan di sekitar Anda</p>
      </div>

      {/* Map Placeholder */}
      <div className="mb-8 bg-gray-100 rounded-2xl h-64 flex items-center justify-center border border-gray-200">
        <div className="text-center text-gray-500">
          <MapPin className="w-16 h-16 mx-auto mb-3 opacity-50" />
          <p>Peta akan ditampilkan di sini</p>
          <p className="text-sm mt-1">Menggunakan lokasi saat ini</p>
        </div>
      </div>

      {/* Location Button */}
      <div className="mb-6 flex justify-center">
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <Navigation className="w-5 h-5" />
          Gunakan Lokasi Saya
        </button>
      </div>

      {/* Hospital List */}
      <div className="space-y-4">
        {hospitals.map((hospital) => (
          <div
            key={hospital.id}
            className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-gray-800 mb-1">{hospital.name}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md">
                        {hospital.type}
                      </span>
                      {hospital.emergency && (
                        <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs rounded-md">
                          UGD 24 Jam
                        </span>
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm text-gray-600">{hospital.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 ml-15">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-600">{hospital.address}</span>
                      <span className="ml-2 text-blue-500">({hospital.distance})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <a href={`tel:${hospital.phone}`} className="text-gray-600 hover:text-blue-500">
                      {hospital.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-600">{hospital.hours}</span>
                  </div>
                </div>
              </div>

              <div className="flex md:flex-col gap-2">
                <button className="flex-1 md:flex-none px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                  Arah
                </button>
                <button className="flex-1 md:flex-none px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h3 className="text-lg mb-2 text-blue-800">Tips Darurat</h3>
        <p className="text-sm text-blue-700 mb-3">
          Dalam keadaan darurat medis, segera hubungi nomor darurat 119 atau langsung ke
          Unit Gawat Darurat (UGD) rumah sakit terdekat.
        </p>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-blue-600" />
          <span className="text-blue-800">Ambulans: 118 | 119</span>
        </div>
      </div>
    </div>
  );
}
