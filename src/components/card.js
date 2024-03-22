import { CalendarIcon, LocationIcon } from "@/assets";

export default function Card({ data, onPress }) {
  return (
    data && (
      <div
        onClick={onPress}
        className="h-fit w-full cursor-pointer overflow-hidden rounded-lg border"
      >
        <img alt="title" src={data.img} />
        <div className="flex flex-col gap-3 p-2 text-sm text-black">
          <a className="font-semibold">{data.title}</a>
          <div>
            <div className="flex items-center gap-1 text-gray-500">
              <LocationIcon />
              <span>{data.location}</span>
            </div>
            {data.type != "museum" && (
              <div className="flex items-center gap-1 text-gray-500">
                <CalendarIcon />
                <span>{data.date}</span>
              </div>
            )}
          </div>
          {data.type == "museum" && (
            <button
              className={`w-2/3 rounded-xl bg-green-500 py-2 text-xs text-white`}
            >
              ТАСАЛБАР АВАХ
            </button>
          )}
          {data.type != "museum" && (
            <button
              className={`w-2/3 rounded-xl bg-orange-600 py-2 text-xs text-white`}
            >
              ТАСАЛБАР АВАХ
            </button>
          )}
        </div>
      </div>
    )
  );
}
