import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="flex justify-center items-center bg-gray-200 py-4">
      <AiOutlineCopyrightCircle size={20} />
      <h2>
        {new Date().getFullYear()} Copyright:{" "}
        <a href="https://github.com/vafashukurova" className="font-bold">
          Vefa Shukurova
        </a>
      </h2>
    </div>
  );
}
