import { useState } from "react";
import { Calculator, TrendingUp, TrendingDown, Minus } from "lucide-react";

export function BMICalculatorPage() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to m

    if (w > 0 && h > 0) {
      const bmiValue = w / (h * h);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setCategory("Kekurangan Berat Badan");
      } else if (bmiValue < 25) {
        setCategory("Normal");
      } else if (bmiValue < 30) {
        setCategory("Kelebihan Berat Badan");
      } else {
        setCategory("Obesitas");
      }
    }
  };

  const getBMIColor = () => {
    if (!bmi) return "gray";
    if (bmi < 18.5) return "blue";
    if (bmi < 25) return "green";
    if (bmi < 30) return "yellow";
    return "red";
  };

  const getBMIIcon = () => {
    if (!bmi) return Minus;
    if (bmi < 18.5) return TrendingDown;
    if (bmi < 25) return Minus;
    return TrendingUp;
  };

  const color = getBMIColor();
  const Icon = getBMIIcon();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl mb-2 text-gray-800">Kalkulator BMI</h1>
        <p className="text-gray-600">Hitung Indeks Massa Tubuh Anda</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Calculator Card */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl text-gray-800">Hitung BMI</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Berat Badan (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Masukkan berat badan"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Tinggi Badan (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Masukkan tinggi badan"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={calculateBMI}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Hitung BMI
            </button>
          </div>
        </div>

        {/* Result Card */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl mb-6 text-gray-800">Hasil Perhitungan</h2>

          {bmi ? (
            <div className="space-y-6">
              <div className={`bg-${color}-50 border border-${color}-200 rounded-xl p-6 text-center`}>
                <div className="flex justify-center mb-3">
                  <Icon className={`w-12 h-12 text-${color}-500`} />
                </div>
                <div className={`text-5xl mb-2 text-${color}-600`}>
                  {bmi.toFixed(1)}
                </div>
                <div className={`text-xl text-${color}-700`}>{category}</div>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex justify-between">
                  <span>Kekurangan Berat Badan:</span>
                  <span>&lt; 18.5</span>
                </p>
                <p className="flex justify-between">
                  <span>Normal:</span>
                  <span>18.5 - 24.9</span>
                </p>
                <p className="flex justify-between">
                  <span>Kelebihan Berat Badan:</span>
                  <span>25 - 29.9</span>
                </p>
                <p className="flex justify-between">
                  <span>Obesitas:</span>
                  <span>≥ 30</span>
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400 py-12">
              <Calculator className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p>Masukkan data untuk melihat hasil</p>
            </div>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h3 className="text-lg mb-2 text-blue-800">Tentang BMI</h3>
        <p className="text-sm text-blue-700">
          Body Mass Index (BMI) adalah ukuran yang digunakan untuk menilai apakah berat badan seseorang
          seimbang dengan tinggi badannya. BMI dihitung dengan membagi berat badan (kg) dengan kuadrat
          tinggi badan (m²).
        </p>
      </div>
    </div>
  );
}
