export default function Button({ handleClick }) {
  return (
    <button
      className="bg-[#1A73E8] px-5 py-2 rounded-sm mt-2 text-white hover:bg-[#1A73E8]/90"
      onClick={handleClick}
    >
      Find
    </button>
  );
}
