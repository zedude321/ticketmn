export default function Footer() {
  return (
    <div className="mt-16">
      <div className="bg-gray-100 px-32 py-16">
        <div className="flex">
          <div className="flex w-1/2 flex-col gap-8">
            <img
              className="w-32"
              src=" https://m.zangia.mn/l/f/7/SW-NQPH0LF-2FLSLAD-L50DK2L-A4.jpg "
            ></img>
            <div className="flex items-start justify-start gap-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-700"
                width="1.05rem"
                height="1.05rem"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-700"
                width="1.05rem"
                height="1.05rem"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="tabler-icon tabler-icon-brand-instagram"
                viewBox="0 0 24 24"
              >
                <path d="M4 8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4z"></path>
                <path d="M9 12a3 3 0 106 0 3 3 0 10-6 0M16.5 7.5v.01"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-700"
                width="1.05rem"
                height="1.05rem"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="tabler-icon tabler-icon-brand-twitter"
                viewBox="0 0 24 24"
              >
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 00.497-3.753c0-.249 1.51-2.772 1.818-4.013z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-700"
                width="1.05rem"
                height="1.05rem"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="icon icon-tabler icon-tabler-brand-linkedin"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                <path d="M8 11L8 16"></path>
                <path d="M8 8L8 8.01"></path>
                <path d="M12 16L12 11"></path>
                <path d="M16 16v-3a2 2 0 00-4 0"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-700"
                width="1.05rem"
                height="1.05rem"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="tabler-icon tabler-icon-brand-youtube"
                viewBox="0 0 24 24"
              >
                <path d="M3 9a4 4 0 014-4h10a4 4 0 014 4v6a4 4 0 01-4 4H7a4 4 0 01-4-4z"></path>
                <path d="M10 9l5 3-5 3z"></path>
              </svg>
            </div>
            <div className="text-gray-700">
              <p>Бүх эрх хуулиар хамгаалагдсан. 2023 он.</p>
            </div>
          </div>
          <div className="flex w-1/2 gap-4">
            <div className="flex flex-col gap-4">
              <p className=" text-lg text-black">Үндсэн цэс</p>
              <p className="text-sm text-gray-500">Үзвэр</p>
            </div>
            <div className="ml-6 flex flex-col gap-4">
              <p className="flex justify-between text-lg text-black ">Сайт</p>
              <p className="text-sm text-gray-500"> Ерөнхий нөхцөл</p>
              <p className="text-sm text-gray-500"> Нууцлал холбоо</p>
              <p className="text-sm text-gray-500"> Төлбөрийн нөхцөл</p>
            </div>
            <div className="ml-6 flex flex-col gap-4">
              <p className="flex text-lg text-black"> Тусламж</p>
              <p className="text-sm text-gray-500"> Санал хүсэлт</p>
              <p className="text-sm text-gray-500"> Тасалбар авах заавар</p>
              <p className="text-sm text-gray-500"> Лого татах</p>
              <p className="text-sm text-gray-500"> Холбоо барих</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
