import Card from "@/components/card";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { allPosts } from "@/data/posts";
import { useState } from "react";

export default function Home() {
  const [type, setType] = useState("all");
  return (
    <div>
      <Header />
      <Carousel
        images={[
          "https://www.ticket.mn/files/concerts/images/Untitled_design_-_2024-02-14T115138.769_4QZ6eOI.webp",
          "https://www.ticket.mn/files/concerts/images/kleopatra_main_poster_landscape_Ticket_EjMFvFw.webp",
          "https://www.ticket.mn/files/concerts/images/Untitled-1984_Q6enllp.webp",
          "https://www.ticket.mn/files/concerts/images/Untitled_design_14_GHwawOV.webp",
          "https://www.ticket.mn/files/concerts/images/cover_1_1J48Vwn.webp",
        ]}
      />
      <div className="flex justify-between bg-white">
        <div className="ml-2 mt-4 flex w-full justify-between text-black text-orange-600">
          <div className="flex items-center gap-2 text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              fill="none"
              viewBox="0 0 29 29"
            >
              <path
                fill="#F15D31"
                stroke="#F15D31"
                strokeWidth="0.25"
                d="M11.99 4.272h0c.108-.073 2.204-1.46 7.301-1.46 5.096 0 7.192 1.386 7.301 1.46a.886.886 0 01.385.731v7.284a9.187 9.187 0 01-7.525 9.036.874.874 0 01-.24.01M11.99 4.274L19.154 21.2M11.99 4.272a.887.887 0 00-.384.731v1.41m.384-2.14l-.26 2.242m7.481 14.819a.8.8 0 01-.08-.011m.08.01s0 0 0 0l.011-.124-.01.125s0 0 0 0zm-.08-.01s0 0 0 0l.023-.123m-.023.123s0 0 0 0l.023-.123m-.023.123a9.206 9.206 0 01-1.066-.262m1.088.139a9.103 9.103 0 01-1.156-.292m.068.153l.046-.102-.114-.051m.068.153a9.163 9.163 0 01-2.997 3.62.891.891 0 01-.28.132m3.277-3.752a9.417 9.417 0 01-.106-.034l.038-.119m0 0l-3.209 3.905m0 0l.005-.001-.04-.119.033.121h.002zm0 0l-.012.004-.03-.122.032.121a9.19 9.19 0 01-10.65-4.984l-3.095-6.594h0a.887.887 0 01.038-.825h0c.066-.113 1.375-2.259 5.99-4.424h0c1.869-.877 3.389-1.338 4.545-1.576m3.182 18.4L1.18 12.476c.053-.09 1.342-2.219 5.935-4.374 1.915-.898 3.46-1.357 4.617-1.587m-.125-.102v.102h.125m-.125-.102l.1-.02.025.122m6.92 12.871a9.177 9.177 0 00.036-4.21c.871-.2 1.824.037 2.5.714a.884.884 0 001.254 0 .886.886 0 000-1.253h0a4.457 4.457 0 00-4.314-1.149 7.774 7.774 0 00-.084-.185l-1.155-2.462a2.436 2.436 0 001.523-.71.886.886 0 00-1.253-1.253c-.129.13-.3.2-.482.2a.676.676 0 01-.482-.2h0a.885.885 0 00-.324-.206l-.92-1.963s0 0 0 0a.886.886 0 00-.66-.498l4.36 13.175zm0 0c.209.063.423.118.64.163a7.415 7.415 0 005.914-7.262V5.54c-.747-.33-2.599-.956-5.913-.956-3.324 0-5.173.626-5.914.955l5.272 13.847zM5.73 19.08l-2.865-6.107c.536-.617 1.946-1.97 4.947-3.378 3.002-1.408 4.944-1.628 5.76-1.646l2.865 6.108a7.415 7.415 0 01-2.269 9.086 7.415 7.415 0 01-8.438-4.063z"
              ></path>
              <path
                fill="#F15D31"
                stroke="#F15D31"
                strokeWidth="0.25"
                d="M23.967 10.132h0a.886.886 0 000-1.253h0a.886.886 0 00-1.254 0h0c-.129.129-.3.2-.482.2a.676.676 0 01-.482-.2.887.887 0 00-1.253 0h0a.886.886 0 000 1.253h0c.463.463 1.08.719 1.735.719s1.272-.256 1.736-.719zM5.93 15.823h0a2.44 2.44 0 011.266-1.388 2.439 2.439 0 011.876-.087c.46.167.699.675.532 1.135l-3.674.34zm0 0a.886.886 0 00.532 1.134m-.532-1.134l.532 1.134m1.135-.532s0 0 0 0a.677.677 0 01.351-.386l-.053-.113.053.113a.677.677 0 01.522-.024l-1.965.825a.758.758 0 00.974-.458l.118.043zm0 0a.886.886 0 01-1.135.532m1.135-.532l-1.135.532m0 0s0 0 0 0l.043-.117-.043.117zM11.49 14.598h0a.886.886 0 01-.532-1.135h0a2.457 2.457 0 013.142-1.474l-2.61 2.609zm0 0a.886.886 0 001.134-.532.676.676 0 01.353-.386h0m-1.486.918l1.486-.918m0 0a.675.675 0 01.52-.024h0m-.52.024l.52-.024m0 0a.886.886 0 001.136-.533h0m-1.135.533l1.135-.533m0 0a.886.886 0 00-.533-1.134l.533 1.134zM8.769 19.049a.886.886 0 00.532 1.134h0c.498.18 1.008.266 1.51.266a4.462 4.462 0 004.193-2.941h0a.886.886 0 00-1.667-.602 2.685 2.685 0 01-3.434 1.61m-1.134.533l.117.042-.117-.042s0 0 0 0zm0 0a.886.886 0 011.134-.532m0 0l-.042.117.042-.117s0 0 0 0z"
              ></path>
            </svg>
            Үзвэр
          </div>
          <div className="mr-8 mt-4 flex items-start gap-4 text-sm text-black">
            <button className="h-8 w-16 rounded-md border bg-orange-600 text-white">
              Бүгд
            </button>
            <button className="flex h-8 w-40 items-center justify-center gap-2 rounded-md border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                fill="none"
                viewBox="0 0 14 13"
              >
                <g fill="#374957" clipPath="url(#clip0_1295_18961)">
                  <path d="M6.803.012a5.458 5.458 0 00-5.451 5.452c0 2.857 4.423 6.678 4.929 7.105l.524.443.523-.443c.505-.427 4.93-4.248 4.93-7.105A5.459 5.459 0 006.803.012zm0 10.856C5.143 9.356 2.975 6.9 2.975 5.464a3.828 3.828 0 117.656 0c0 1.432-2.168 3.89-3.828 5.404z"></path>
                  <path d="M6.803 7.04a1.623 1.623 0 100-3.246 1.623 1.623 0 000 3.247z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_1295_18961">
                    <path
                      fill="#fff"
                      d="M0 0H13V13H0z"
                      transform="translate(.303)"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              Улаанбаатар
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex  gap-[30px] bg-white text-slate-600">
        <button
          onClick={() => setType("all")}
          className="ml-[10px] mt-8 flex h-[30px] w-24 items-center justify-center gap-2 rounded-md border bg-slate-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="13"
            fill="none"
            viewBox="0 0 15 13"
          >
            <path
              fill="#4B5362"
              stroke="#EFF1F3"
              strokeWidth="0.4"
              d="M1.834 5.283h11.333A1.22 1.22 0 0114.384 6.5a1.22 1.22 0 01-1.217 1.216H1.834A1.22 1.22 0 01.617 6.5a1.22 1.22 0 011.217-1.217zM10.334 3.466h-8.5A1.22 1.22 0 01.617 2.25a1.22 1.22 0 011.217-1.217h8.5A1.22 1.22 0 0111.55 2.25a1.22 1.22 0 01-1.216 1.216zM1.834 9.533h8.5a1.22 1.22 0 011.216 1.217 1.22 1.22 0 01-1.216 1.216h-8.5A1.22 1.22 0 01.617 10.75a1.22 1.22 0 011.217-1.217z"
            ></path>
          </svg>
          Бүгд
        </button>
        <button
          onClick={() => setType("concert")}
          className="mt-8 flex items-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="none"
            viewBox="0 0 17 17"
          >
            <path
              fill="#95A0B6"
              d="M13.386 6.8l-3.178-3.188A3.392 3.392 0 0116.003.994 3.4 3.4 0 0113.386 6.8zM1.572 13.005l7.82-7.812L11.797 7.6l-7.82 7.82-2.397-2.414h-.008zM.382 15.41l1.793-1.802 1.207 1.207-1.802 1.802L.373 15.41h.009zm8.117-2.66l1.7-1.7V17h-1.7v-4.25z"
            ></path>
          </svg>
          Концерт
        </button>
        <button
          onClick={() => setType("play")}
          className="mt-8 flex items-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="15"
            fill="none"
            viewBox="0 0 18 15"
          >
            <path
              fill="#95A0B6"
              d="M17.28 6.24l-1.08 4.38c-.3 1.38-1.32 2.46-2.64 2.94l-2.58.96c-.24.06-.48 0-.66-.18L8.46 12.3c-.96-1.02-1.32-2.46-1.02-3.84l1.02-4.38c.06-.24.3-.48.6-.48 2.76 0 5.4.66 7.86 1.86.3.24.42.54.36.78zm-7.5 2.94c-.3 1.14.42 2.28 1.56 2.52 1.14.3 2.28-.42 2.52-1.56m.72-2.88A.894.894 0 1014.16 9a.894.894 0 10.42-1.74zM10.5 6.3a.894.894 0 10-.42 1.74.894.894 0 10.42-1.74zm-3.9 5.34l-1.26-.3a4.283 4.283 0 01-2.94-2.7L.72 3.84c-.12-.24 0-.54.24-.72C3.3 1.62 5.82.72 8.58.48c.3 0 .54.12.6.42l.6 1.68h-.72c-.84 0-1.56.54-1.74 1.38l-.66 2.82c-.06 0-.12 0-.18.06C5.4 7.2 4.8 8.4 5.22 9.54l.96-.36c-.06.78.06 1.62.42 2.46zM4.92 5.7c-.18-.48-.66-.72-1.14-.54-.48.12-.78.66-.6 1.14.18.48.66.72 1.14.54a.95.95 0 00.6-1.14z"
            ></path>
          </svg>
          Жүжиг
        </button>
        <button
          onClick={() => setType("music")}
          className="mt-8 flex items-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="17"
            fill="none"
            viewBox="0 0 19 17"
          >
            <path
              fill="#95A0B6"
              d="M5.948 2.558a.558.558 0 011.014 0c.728 1.67 2.738 2.54 4.452 1.93-1.03-5.592-8.89-5.588-9.918 0 1.714.61 3.724-.26 4.452-1.93z"
            ></path>
            <path
              fill="#95A0B6"
              d="M6.454 10.322a5.03 5.03 0 005.013-4.686c-1.84.512-3.91-.23-5.013-1.755-1.103 1.524-3.173 2.267-5.013 1.755a5.03 5.03 0 005.013 4.686zM5.852 11.405c.127.68 1.08.68 1.208 0-.397.04-.812.04-1.208 0zM8.238 12.472v2.603l.93-1.332-.93-1.271zM4.67 14.936v-2.332l-.832 1.14.833 1.192zM5.785 12.896v3.809h1.34v-3.81c-.407.18-.932.18-1.34 0z"
            ></path>
            <path
              fill="#95A0B6"
              d="M10.197 10.158c-.486.376-1.03.68-1.616.897l1.72 2.352c.14.192.143.453.007.648l-1.851 2.65h3.895c.308 0 .557-.25.557-.557v-2.284a3.895 3.895 0 00-2.712-3.706zM2.705 13.407l1.7-2.324a6.134 6.134 0 01-1.693-.925A3.895 3.895 0 000 13.864v2.284c0 .307.25.557.557.557h3.992l-1.851-2.65a.557.557 0 01.007-.648zM16.105 13.839v2.309c.03.738 1.085.738 1.114 0v-2.31c-.361.06-.753.06-1.114 0zM16.662 6.499a2.34 2.34 0 00-2.338 2.338v1.596c.129 3.102 4.548 3.1 4.676 0V8.837a2.34 2.34 0 00-2.338-2.338z"
            ></path>
          </svg>
          Дуурь
        </button>
        <button
          onClick={() => setType("ballet")}
          className="mt-8 flex items-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="none"
            viewBox="0 0 19 19"
          >
            <g fill="#95A0B6" clipPath="url(#clip0_797_14359)">
              <path d="M13.446 7.735c.278-.503.333-1.04.16-1.553a1.89 1.89 0 00-1.081-1.159l-.307-.13a1.958 1.958 0 00-1.625.021c-.535.246-.9.67-1.058 1.225l-1.998 7.033c-.203.712-.118 1.4.252 2.044l1.806 3.15c.227.397.637.634 1.094.634h1.3c.403 0 .76-.177 1.004-.498a1.25 1.25 0 00.214-1.092l-1.165-4.473c-.316-1.217-.157-2.375.486-3.54l.918-1.662zM5.34 1.884a39.432 39.432 0 00-.023 4.302l4.618-3.212-4.594-1.09zM8.464 5.835a3.07 3.07 0 01.282-.675L5.408 7.463c.01.112.021.224.033.334l2.292.61.731-2.572zM11.068.607A.558.558 0 0010.513 0H6a.557.557 0 00-.554.505 37.5 37.5 0 00-.023.257l5.523 1.304c.04-.5.08-.991.123-1.459zM6.507 12.721l.922-3.243-1.84-.49c.21 1.397.516 2.644.918 3.733z"></path>
            </g>
            <defs>
              <clipPath id="clip0_797_14359">
                <path fill="#fff" d="M0 0H19V19H0z"></path>
              </clipPath>
            </defs>
          </svg>
          Балет
        </button>
        <button
          onClick={() => setType("sport")}
          className="mt-8 flex items-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            fill="none"
            viewBox="0 0 16 17"
          >
            <path
              fill="#95A0B6"
              d="M15.291 8.854a1.062 1.062 0 01-1.063 1.063h-2.032a2.49 2.49 0 01-2.125-1.204l-.868-1.441-1.268 3.09 1.852 1.053a2.484 2.484 0 011.254 2.159v2.364a1.062 1.062 0 11-2.125 0v-2.364a.354.354 0 00-.178-.308l-2.892-1.645a2.487 2.487 0 01-1.01-3.062l.893-2.184h-1.25a.354.354 0 00-.317.196l-1.025 2.05a1.063 1.063 0 11-1.9-.95L2.26 5.62A2.467 2.467 0 014.48 4.25h3.984a2.49 2.49 0 012.125 1.204L11.89 7.62a.354.354 0 00.305.172h2.033a1.062 1.062 0 011.062 1.062zM4.706 11.935a1.063 1.063 0 00-1.38.593.355.355 0 01-.33.222H1.48a1.062 1.062 0 100 2.125h1.517A2.468 2.468 0 005.3 13.317a1.063 1.063 0 00-.593-1.382zM9.27 3.542A1.77 1.77 0 109.27 0a1.77 1.77 0 000 3.542z"
            ></path>
          </svg>
          Спорт
        </button>
        <button
          onClick={() => setType("other")}
          className="mt-8 flex items-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            fill="none"
            viewBox="0 0 16 17"
          >
            <path
              fill="#95A0B6"
              d="M15.291 8.854a1.062 1.062 0 01-1.063 1.063h-2.032a2.49 2.49 0 01-2.125-1.204l-.868-1.441-1.268 3.09 1.852 1.053a2.484 2.484 0 011.254 2.159v2.364a1.062 1.062 0 11-2.125 0v-2.364a.354.354 0 00-.178-.308l-2.892-1.645a2.487 2.487 0 01-1.01-3.062l.893-2.184h-1.25a.354.354 0 00-.317.196l-1.025 2.05a1.063 1.063 0 11-1.9-.95L2.26 5.62A2.467 2.467 0 014.48 4.25h3.984a2.49 2.49 0 012.125 1.204L11.89 7.62a.354.354 0 00.305.172h2.033a1.062 1.062 0 011.062 1.062zM4.706 11.935a1.063 1.063 0 00-1.38.593.355.355 0 01-.33.222H1.48a1.062 1.062 0 100 2.125h1.517A2.468 2.468 0 005.3 13.317a1.063 1.063 0 00-.593-1.382zM9.27 3.542A1.77 1.77 0 109.27 0a1.77 1.77 0 000 3.542z"
            ></path>
          </svg>
          Бусад
        </button>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4 p-2">
        {allPosts.map((e, i) => {
          return (type == "all" || e.type == type) && <Card key={i} data={e} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
