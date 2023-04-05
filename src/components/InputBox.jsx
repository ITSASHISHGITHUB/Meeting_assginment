export default function InputBox({ type, id, label, setInput, value }) {
  return (
    <div className="flex flex-col font-sans w-1/4">
      <label htmlFor={id}>
        {label} <span className="text-red-700">*</span>
      </label>
      <input
        type={type}
        name="date"
        id={id}
        className="border-2 border-[#D4D6DB] rounded-md p-1"
        value={value}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
