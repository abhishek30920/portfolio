export default function Skillicon({ icon, name, color }) {
  return (
    <div className="bg-[#1a1a1a] rounded-xl p-4 transform hover:-translate-y-2 transition-transform">
      <i 
        className={`fab fa-${icon} text-4xl`} 
        style={{ color }}
      />
      <p className="mt-2 text-sm text-[#8892b0]">{name}</p>
    </div>
  );
}