import { Link } from "react-router";
import { Calculator, Pill, MapPin, Heart, Activity, Users } from "lucide-react";

export function HomePage() {
  const features = [
    {
      icon: Calculator,
      title: "Kalkulator BMI",
      description: "Hitung Indeks Massa Tubuh Anda dengan mudah dan cepat",
      link: "/bmi",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: Pill,
      title: "Pintar Obat",
      description: "Cari informasi obat dan dosis yang tepat untuk Anda",
      link: "/medicine",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: MapPin,
      title: "Rumah Sakit Terdekat",
      description: "Temukan rumah sakit terdekat dari lokasi Anda",
      link: "/hospitals",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "Donasi",
      description: "Bantu pasien yang membutuhkan biaya pengobatan",
      link: "/donation",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Pengguna Aktif" },
    { icon: Activity, value: "50,000+", label: "Konsultasi" },
    { icon: Heart, value: "98%", label: "Kepuasan" },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-4">
            <span className="text-2xl">⚕️</span>
            <span className="text-sm text-blue-700">Selamat Datang di MEDIXA</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl mb-4 text-gray-800">
          Kesehatan Anda, <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Prioritas Kami
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Platform kesehatan terpadu untuk membantu Anda mengelola kesehatan dengan lebih baik
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/bmi"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full hover:opacity-90 transition-opacity"
          >
            Mulai Sekarang
          </Link>
          <Link
            to="/donation"
            className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
          >
            Berdonasi
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-3xl text-center mb-8 text-gray-800">Fitur Unggulan</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.link}
                to={feature.link}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-200"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white rounded-2xl p-8 border border-gray-200">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-3">
                  <Icon className="w-10 h-10 text-blue-500" />
                </div>
                <div className="text-3xl text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl mb-4">Siap Memulai Perjalanan Kesehatan Anda?</h2>
        <p className="mb-6 text-blue-50">
          Daftar sekarang dan dapatkan akses penuh ke semua fitur kami
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full hover:shadow-lg transition-shadow"
          >
            Daftar Sekarang
          </Link>
          <Link
            to="/login"
            className="inline-block px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-colors"
          >
            Sudah Punya Akun
          </Link>
        </div>
      </section>
    </div>
  );
}
