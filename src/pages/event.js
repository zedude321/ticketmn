import React, { useState, useEffect } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Event() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("uurchlult:", count);
  }, [count]);

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
    setCount(count + 1);
  };
  return (
    <div>
      <Header />
      <div className="relative w-full bg-white">
        <div className="relative flex w-full flex-col  items-center justify-center bg-white">
          <div className="flex grid grid-cols-5 ">
            <button className="h-8 w-64 flex-auto border-transparent bg-orange-600 pr-24 text-white hover:bg-orange-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-6 inline-block h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
              <span className="inline-block">Үзвэр сонгох</span>
            </button>
            <button className="h-8 w-64 flex-auto border-transparent bg-orange-600 pr-24 text-white hover:bg-orange-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-6 inline-block h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
              <span className="inline-block">Үзвэр сонгох</span>
            </button>
            <button className="h-8  w-64 flex-auto border-transparent pr-24 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-6 inline-block h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
              <span className="inline-block">Үзвэр сонгох</span>
            </button>
            <button className="h-8  w-64 flex-auto border-transparent pr-24 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-6 inline-block h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
              <span className="inline-block">Үзвэр сонгох</span>
            </button>
            <button className="h-8 w-64 flex-auto border-transparent pr-24 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-6 inline-block h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
              <span className="inline-block">Үзвэр сонгох</span>
            </button>
          </div>
          <img
            src="https://www.ticket.mn/files/concerts/images/%D1%85%D0%B0_eMjIZGm.webp"
            alt="Image Description"
            className="h-2/4"
          ></img>
        </div>

        <div className="bg-white">
          <div className="mb-2 ml-10 font-bold">
            Сумын цолтон болон залуу бөхчүүдийн ээлжит барилдаан
          </div>
          <div className="flex flex-row">
            <div className="ml-10 mt-4 text-black ">
              <div className="mb-1 flex items-center py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a6 6 0 00-6 6c0 3.333 4 9 6 11 2-1.667 6-7 6-11a6 6 0 00-6-6zm0 8a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Хаана:
                <span className="px-2 font-semibold"> Бөхийн өргөө</span>
              </div>
              <div className="mb-1 flex items-center py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
                </svg>
                Хэзээ:
                <span className="px-2 font-semibold">2024.03.14 11:00</span>
              </div>
              <div className="mb-1 flex items-center py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z" />
                </svg>
                Уран бүтээлч:
                <span className="px-2 font-semibold">
                  Сумын цолтон болон залуу бөхчүүд
                </span>
              </div>
              <div className="mb-1 flex items-center py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
                </svg>
                Үргэлжлэх хугацаа:
                <span className="px-2 font-semibold">8 цаг</span>
              </div>
              <div className="mb-1 flex items-center py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
                </svg>
                Насны ангилал:<span className="px-2 font-semibold">16+</span>
              </div>
              <div className="mb-1 flex items-center py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M240-80q-50 0-85-35t-35-85v-120h120v-560h600v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-600H320v480h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm0 0h-40 400-360Z" />
                </svg>
                Тоглолтын төрөл:
                <span className="px-2 font-semibold">Бөхийн барилдаан</span>
              </div>
            </div>
            <div className="ml-32">
              <div className="mb-2 ml-24 text-sm">Тасалбарын үнэ:</div>
              <div>
                Тасалбар А: <span className="ml-16  inline-block">20,000₮</span>
              </div>
              <div>
                Тасалбар Б: <span className="ml-16  inline-block">10,000₮</span>
              </div>
            </div>

            <div className="ml-20 h-40 w-96 rounded-md border border-gray-300 pt-4">
              <div className="ml-4 text-lg font-bold">
                Өдөр, цагаа сонгоно уу
              </div>
              <div className="absolute mt-6 w-1/4 items-center  ">
                <div className="ml-4 h-20 rounded-md border border-gray-300   ">
                  <div className="p-2 text-sm font-bold ">
                    2024.03.1{" "}
                    <span className="ml-40 inline-block font-semibold ">
                      11:00
                    </span>
                  </div>
                  <div className="absolute ml-48 mt-2 flex w-20 justify-center rounded-md bg-red-500 font-bold text-white ">
                    {" "}
                    тоо: {count}
                  </div>

                  <button
                    className="absolute ml-2 h-10 w-40 rounded-md bg-orange-500 text-sm font-bold text-white"
                    onClick={handleButtonClick}
                  >
                    ТАСАЛБАР АВАХ
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-10 h-0.5 w-3/5 rounded-md bg-orange-600"></div>

          <div className="w-2/3">
            <div className="ml-10 mt-2 text-xl font-bold">
              Дэлгэрэнгүй мэдээлэл
            </div>
            <div className="ml-10 ">
              Гуравдугаар сарын 22-ны Баасан гарагийн 13:00 цагаас Төв аймгийн
              Батсүмбэр сумын түүхт 100 жилийн ойд зориулсан, тус сумаас төрөн
              гарсан Монгол Улсын начин Бат-Очирын Пүрэвдоржийн нэрэмжит улс,
              аймгийн алдар цолтой хүчит 128 бөхийн барилдаан Монгол Бөхийн
              Өргөөнд болно.
            </div>
            <div className="ml-10 mt-6">
              Барилдах бөхчүүдийг гуравдугаар сарын 20-21-ний өдрүүдэд
              10:00-17:00 цагийн хооронд цахимаар бүртгэнэ. Үзэгчид
              www.ticket.mn-ээс тасалбараа захиалан авах боломжтой.
            </div>
            <div className="ml-10 mt-6">
              Тус барилдааны түрүү бөх таван сая, үзүүр бөх гурван сая, дөрөвт
              шалгарсан бөхчүүд тус бүр 1,5 сая төгрөгийн бай шагнал гардана.
              Бөхчүүд, бөх сонирхогчдыг хүрэлцэн ирэхийг урьж байна.
            </div>
            <div className="ml-10 mt-6">МОНГОЛЫН ҮНДЭСНИЙ БӨХИЙН ХОЛБОО</div>
            <div className="ml-10 mt-10 text-xl font-bold">Байршил</div>
            <iframe
              title="Maps"
              src="https://www.google.com/maps/d/embed?mid=1PJBc8avP2z8fxmyeNj9HWybNN_NqbNE&amp;ehbc=2E312F&amp;noprof=1"
              className="ml-10 mt-10 h-screen w-full"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
