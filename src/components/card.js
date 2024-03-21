import { CalendarIcon, LocationIcon } from "@/assets";

export default function Card({ data, onPress }) {
  return (
    <div
      onClick={onPress}
      className="w-1/4 cursor-pointer overflow-hidden rounded-lg border"
    >
      <img alt="title" src={data.img} />
      <div className="flex flex-col gap-3 p-2 text-sm text-black">
        <a className="font-semibold">{data.title}</a>
        <div>
          <div className="flex items-center gap-1 text-gray-500">
            <LocationIcon />
            <span>{data.location}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <CalendarIcon />
            <span>{data.date}</span>
          </div>
        </div>
        <button className="w-2/3 rounded-xl bg-orange-600 py-2 text-xs text-white">
          ТАСАЛБАР АВАХ
        </button>
      </div>
    </div>
  );
}
