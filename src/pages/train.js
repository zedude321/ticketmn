import {
  CalendarIcon,
  ClockIcon,
  DownArrowIcon,
  LocationIcon,
  TrainIcon,
} from "@/assets";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Select from "@/components/select";
import { stations } from "@/data/stations";
import { useState } from "react";

export default function Login() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [time, setTime] = useState("");
  const [show, setShow] = useState(false);

  const handleShowTickets = () => {
    if (start && end && time) {
      setShow(true);
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-pink-600 pt-8">
        <div className="flex flex-col justify-center gap-6 rounded-tl-md rounded-tr-md bg-white p-4 py-8">
          <div className="flex items-center gap-4">
            <div className="w-full">
              <p className="text-sm text-gray-600">Хөдлөх өртөө *</p>
              <Select
                className="w-full"
                value={start}
                setValue={setStart}
                options={stations}
              />
            </div>
            <div className="w-full">
              <p className="text-sm text-gray-600">Очих өртөө *</p>
              <Select
                className="w-full"
                value={end}
                setValue={setEnd}
                options={stations}
              />
            </div>
            <div className="w-full">
              <p className="text-sm text-gray-600">Хэзээ *</p>
              <Select
                className="w-full"
                value={time}
                setValue={setTime}
                showDropdown={false}
              />
            </div>
            <button
              onClick={handleShowTickets}
              className="h-fit w-full rounded-md bg-pink-600 p-2 text-sm text-white"
            >
              Хайх
            </button>
          </div>
          {show && (
            <div className="flex gap-2 rounded-md border p-4">
              <div className="flex w-1/2 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-fit rounded-md bg-pink-600 bg-opacity-10 p-2">
                    <TrainIcon />
                  </div>
                  <div>
                    <span className="flex gap-2">
                      <p>#275</p>
                      <p className="font-bold">Галт тэрэг</p>
                    </span>
                    <p className="text-sm text-gray-500">Энгийн галт тэрэг</p>
                  </div>
                </div>
                <div className="border-t border-dashed" />
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-4 border-gray-200 bg-pink-600">
                    <DownArrowIcon className="text-white" />
                  </div>
                  <div>
                    <p className="font-light">{start}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <CalendarIcon />
                      {time}
                      <ClockIcon />
                      <p className="font-semibold">18:05</p>
                    </div>
                  </div>
                </div>
                <p className="ml-10 font-light text-gray-700">709км</p>
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-4 border-gray-200 bg-pink-600">
                    <LocationIcon className="h-[12px] w-[12px] text-white" />
                  </div>
                  <div>
                    <p className="font-light">{end}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <CalendarIcon />
                      {time}
                      <ClockIcon />
                      <p className="font-semibold">23:55</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-1/2 flex-col gap-4">
                <div className="flex w-full justify-between rounded-lg border border-dashed border-gray-600 bg-gray-200 p-4 text-xs">
                  <div className="w-1/3">
                    <p className="font-medium text-gray-600">
                      Тасалгаат (Тасалгаат/купе)
                    </p>
                    <p className="text-light text-gray-600">Сул суудал: 107</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-right font-medium text-gray-600">
                      <p>Том хүн: 73,400₮</p>
                      <p>Хүүхэд: 28,800₮</p>
                    </span>
                    <button className="h-fit rounded-lg bg-pink-600 px-10 py-2 text-white">
                      Захиалах
                    </button>
                  </div>
                </div>
                <div className="flex w-full justify-between rounded-lg border border-dashed border-gray-600 bg-gray-200 p-4 text-xs">
                  <div className="w-1/3">
                    <p className="font-medium text-gray-600">
                      Нийтийн (Нийтийн/общий)
                    </p>
                    <p className="text-light text-gray-600">Сул суудал: 143</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-right font-medium text-gray-600">
                      <p>Том хүн: 26,400₮</p>
                      <p>Хүүхэд: 7,800₮</p>
                    </span>
                    <button className="h-fit rounded-lg bg-pink-600 px-10 py-2 text-white">
                      Захиалах
                    </button>
                  </div>
                </div>
                <div className="flex w-full justify-between rounded-lg border border-dashed border-gray-600 bg-gray-200 p-4 text-xs">
                  <div className="w-1/3">
                    <p className="font-medium text-gray-600">
                      Унтлагын (Унтлагын/плацкарт)
                    </p>
                    <p className="text-light text-gray-600">Сул суудал: 143</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-right font-medium text-gray-600">
                      <p>Том хүн: 44,000₮</p>
                      <p>Хүүхэд: 21,800₮</p>
                    </span>
                    <button className="h-fit rounded-lg bg-pink-600 px-10 py-2 text-white">
                      Захиалах
                    </button>
                  </div>
                </div>
                <div className="flex w-full justify-between rounded-lg border border-dashed border-gray-600 bg-gray-200 p-4 text-xs">
                  <div className="w-1/3">
                    <p className="font-medium text-gray-600">
                      Зөөлөн /Люкс/ (4 суудалтай зөөлөн)
                    </p>
                    <p className="text-light text-gray-600">Сул суудал: 143</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-right font-medium text-gray-600">
                      <p>Том хүн: 138,000₮</p>
                      <p>Хүүхэд: 57,800₮</p>
                    </span>
                    <button className="h-fit rounded-lg bg-pink-600 px-10 py-2 text-white">
                      Захиалах
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <img src="https://ticket.mn/assets/front_v3/dist/assets/train-DBNTnETR.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
