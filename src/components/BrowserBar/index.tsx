const BrowserBar = () => {
  return (
    <div className="flex flex-row items-center gap-4 bg-gray-700 px-4 py-2.5 lg:grid lg:grid-cols-[8rem_1fr_8rem] lg:gap-8">
      <div className="flex items-center">
        <div className="h-3 w-3 rounded-full bg-[#ED6A5E]">
        </div>
        <div className="ml-2 h-3 w-3 rounded-full bg-[#F6BE4F]">
        </div>
        <div className="ml-2 h-3 w-3 rounded-full bg-[#62C554]">
        </div>
      </div>
      <div className="mx-auto flex w-4/5 select-none items-center gap-2 overflow-hidden rounded-md bg-gray-800 p-2 text-xs text-gray-200 ring-1 ring-inset ring-gray-500 md:px-4">
        <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_419_7995)">
            <path d="M13.0869 5.30005H11.0869V3.80005C11.0869 3.0044 10.7708 2.24134 10.2082 1.67873C9.64563 1.11612 8.88256 0.800049 8.08691 0.800049C7.29126 0.800049 6.5282 1.11612 5.96559 1.67873C5.40298 2.24134 5.08691 3.0044 5.08691 3.80005V5.30005H3.08691C2.8217 5.30005 2.56734 5.40541 2.37981 5.59294C2.19227 5.78048 2.08691 6.03483 2.08691 6.30005V13.3C2.08691 13.5653 2.19227 13.8196 2.37981 14.0072C2.56734 14.1947 2.8217 14.3 3.08691 14.3H13.0869C13.3521 14.3 13.6065 14.1947 13.794 14.0072C13.9816 13.8196 14.0869 13.5653 14.0869 13.3V6.30005C14.0869 6.03483 13.9816 5.78048 13.794 5.59294C13.6065 5.40541 13.3521 5.30005 13.0869 5.30005ZM6.08691 3.80005C6.08691 3.26962 6.29763 2.76091 6.6727 2.38584C7.04777 2.01076 7.55648 1.80005 8.08691 1.80005C8.61735 1.80005 9.12605 2.01076 9.50113 2.38584C9.8762 2.76091 10.0869 3.26962 10.0869 3.80005V5.30005H6.08691V3.80005Z" fill="#C4C4CC">
            </path>
          </g>
          <defs>
            <clipPath id="clip0_419_7995">
              <rect fill="white" height="16" transform="translate(0.0869141 0.300049)" width="16">
              </rect></clipPath>
          </defs>
        </svg>https://maykbrito.github.io/devlinks/</div>
      <div className="hidden justify-end md:flex">
        <svg className="text-gray-400" height="24" width="24">
          <path d="M12.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
          </path>
        </svg>
      </div>
    </div>
  )
}

export default BrowserBar