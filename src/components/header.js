import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div>
      <div className="flex items-center justify-end gap-2 bg-gray-100 py-2 pr-5 text-xs">
        <img
          className="h-3 w-3"
          src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/phone-ringing-icon.png"
        ></img>
        <p className="flex justify-center text-black "> 1900-1800</p>
        <img
          className="h-3 w-3"
          src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Grey-Logo.wine.svg"
        ></img>
        <img
          className="h-3 w-3"
          src="https://www.svgrepo.com/show/30539/instagram-logo.svg"
        ></img>
        <img
          className="h-3 w-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Antu_im-twitter.svg/1024px-Antu_im-twitter.svg.png"
        ></img>
        <img
          className="h-3 w-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ497HhSEJP0AX6D_pVmTBgKYR0HZVbVFpuE9KFC5364udRe6CfakviOjEf8gP3mOdsMr0&usqp=CAU"
        ></img>
        <img
          className="h-3 w-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGi2LnYEuZio1dtQfbZUosD1JrfvfJs1NJAp7FP6UhrhjRw5cfIuh5A84oap-04Rzao6s&usqp=CAU"
        ></img>
      </div>
      <div className="flex items-center justify-between bg-white">
        <img
          className=" h-16 pl-6   "
          src="https://m.zangia.mn/l/f/7/SW-NQPH0LF-2FLSLAD-L50DK2L-A4.jpg"
        ></img>
        <div className="ml-6 flex justify-center gap-6 p-4">
          <div
            onClick={() => router.push("/")}
            className="flex cursor-pointer flex-col items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#868e96"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="icon icon-tabler icon-tabler-masks-theater"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M13.192 9h6.616a2 2 0 011.992 2.183l-.567 6.182A4 4 0 0117.25 21h-1.5a4 4 0 01-3.983-3.635l-.567-6.182A2 2 0 0113.192 9zM15 13h.01M18 13h.01M15 16.5c1 .667 2 .667 3 0M8.632 15.982A4.037 4.037 0 018.25 16h-1.5a4 4 0 01-3.983-3.635L2.2 6.183A2 2 0 014.192 4h6.616a2 2 0 012 2M6 8h.01M9 8h.01M6 12c.764-.51 1.528-.63 2.291-.36"></path>
            </svg>

            <p className="flex items-center justify-center text-gray-700 ">
              {" "}
              Үзвэр{" "}
            </p>
          </div>
          <div
            onClick={() => router.push("/")}
            className="flex cursor-pointer flex-col items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#868e96"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="icon icon-tabler icon-tabler-building-bank"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M3 21L21 21"></path>
              <path d="M3 10L21 10"></path>
              <path d="M5 6L12 3 19 6"></path>
              <path d="M4 10L4 21"></path>
              <path d="M20 10L20 21"></path>
              <path d="M8 14L8 17"></path>
              <path d="M12 14L12 17"></path>
              <path d="M16 14L16 17"></path>
            </svg>

            <p className="flex justify-center text-gray-700"> Музей </p>
          </div>
          <div
            onClick={() => router.push("/train")}
            className="flex cursor-pointer flex-col items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/9svg"
              width="26"
              height="25"
              fill="none"
              viewBox="0 0 26 25"
            >
              <path
                fill="#4B5362"
                fillRule="evenodd"
                d="M21.704 4.793a2.864 2.864 0 00-2.257-2.801l-.007-.002a30.648 30.648 0 00-12.617.007h-.006a2.858 2.858 0 00-2.25 2.793c-.006 2.945-.006 9.135-.006 12.379a2.864 2.864 0 002.864 2.864H18.84a2.864 2.864 0 002.864-2.864V4.793zm-1.562-.001v12.377c0 .718-.582 1.302-1.302 1.302H7.425c-.72 0-1.302-.584-1.302-1.302 0-3.243 0-9.43.007-12.377V4.79c0-.609.423-1.135 1.018-1.265 3.99-.834 7.98-.83 11.97-.006a1.303 1.303 0 011.024 1.273z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#4B5362"
                fillRule="evenodd"
                d="M17.634 19.555l1.558 3.7a.78.78 0 101.44-.606l-1.559-3.7a.78.78 0 10-1.44.606zM7.247 18.949l-1.559 3.7a.782.782 0 001.44.606l1.558-3.7a.78.78 0 10-1.44-.606z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#4B5362"
                d="M8.486 16.655a1.039 1.039 0 100-2.077 1.039 1.039 0 000 2.077zM17.835 16.655a1.039 1.039 0 100-2.077 1.039 1.039 0 000 2.077z"
              ></path>
              <path
                fill="#4B5362"
                fillRule="evenodd"
                d="M11.63 16.398h3.061a.782.782 0 000-1.563h-3.06a.782.782 0 000 1.563zM19.366 21.067H6.9a.782.782 0 000 1.563h12.466a.782.782 0 000-1.563zM19.108 6.271a1.823 1.823 0 00-1.823-1.823H8.981a1.823 1.823 0 00-1.823 1.823v5.188a1.826 1.826 0 001.823 1.823h8.304c.484 0 .947-.192 1.29-.534.341-.342.533-.806.533-1.29V6.272zm-1.562 0v5.188a.261.261 0 01-.26.26H8.98a.26.26 0 01-.26-.26V6.27a.26.26 0 01.26-.26h8.304a.261.261 0 01.26.26z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="flex justify-center text-gray-700"> Галт тэрэг </p>
          </div>
        </div>

        <button
          onClick={() => router.push("/login")}
          className="mr-6 flex items-center justify-center rounded-md border p-10 py-2 text-lg text-orange-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="icon icon-tabler icon-tabler-user"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <circle cx="12" cy="7" r="4"></circle>
            <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"></path>
          </svg>
          Нэвтрэх
        </button>
      </div>
    </div>
  );
}
