const handleDownload = () => {
  const pdfUrl = "/src/assets/documents/CV - Albert Lanza.pdf";
  window.open(pdfUrl, "_blank");
};

const NameComponent = () => {
  return (
    <div className="h-full flex">
      <div className="flex-grow grid grid-cols-2 grid-rows-1 rounded-lg bg-[#f6f7f9] dark:bg-[#171719]">
        <h3 className="col-span-1 flex self-center justify-center ml-4 text-center pb-1 text-4xl font-extrabold">
          Albert Lanza Rio
        </h3>
        <div className="col-span-1 grid grid-cols-3 m-4">
          <a
            href="https://www.linkedin.com/in/albert-lanza-rio/"
            target="_blank"
            rel="noreferrer"
            className="flex mx-4 my-1 rounded-2xl items-center place-content-center fill-[#626366] hover:fill-white dark:fill-white bg-[#d1d5db] dark:bg-[#0f0f11] hover:bg-[#0a66c2] hover:dark:bg-[#0a66c2] hover:inner-border-2 hover:inner-border-[#004182]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-6 rounded-md"
              viewBox="0 0 455 455"
            >
              <g>
                <path
                  style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                  d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"
                />
                <path
                  style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                  d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087   c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345   c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537   c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002   z"
                />
              </g>
            </svg>
          </a>

          <button
            className="flex mx-4 my-1 rounded-2xl items-center place-content-center fill-[#626366] hover:fill-white dark:fill-white bg-[#d1d5db] dark:bg-[#0f0f11] hover:bg-[#7c878e] hover:dark:bg-[#7c878e] hover:inner-border-2 hover:inner-border-[#434b50]"
            onClick={handleDownload}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 rounded-md"
              viewBox="0 0 689 875"
              version="1.1"
            >
              <path
                d="M 37.585 1.119 C 24.707 4.139, 10.010 16.140, 3.840 28.673 L 0.500 35.458 0.500 440.979 L 0.500 846.500 3.431 852.478 C 7.333 860.438, 14.449 867.370, 22.759 871.307 L 29.500 874.500 340.978 874.755 C 624.152 874.986, 652.956 874.864, 657.965 873.408 C 665.253 871.289, 670.540 868.092, 676.331 862.301 C 681.143 857.489, 687.941 845.511, 688.070 841.616 C 688.139 839.547, 688.160 839.545, 689 841.500 C 689.481 842.619, 689.782 665.706, 689.683 440 C 689.586 218.075, 689.368 99.950, 689.198 177.500 C 688.889 318.408, 688.888 318.496, 686.959 312.500 C 685.898 309.200, 685.023 305.824, 685.015 304.999 C 684.997 303.192, 384.036 2, 382.249 2 C 381.562 2, 381 1.550, 381 1 C 381 -0.303, 43.150 -0.186, 37.585 1.119 M 0.495 441 C 0.495 662.925, 0.610 753.712, 0.750 642.750 C 0.890 531.787, 0.890 350.212, 0.750 239.250 C 0.610 128.287, 0.495 219.075, 0.495 441 M 227.500 421.399 C 213.784 424.077, 198.452 430.376, 185.925 438.480 C 177.903 443.669, 160.925 460.090, 153.671 469.676 C 138.715 489.439, 133.148 510.754, 134.276 543.931 C 134.885 561.826, 136.086 567.189, 142.453 580.455 C 153.156 602.756, 176.279 626.505, 198.801 638.329 C 209.082 643.727, 221.947 647.859, 232.745 649.229 C 243.701 650.621, 273.183 649.003, 284.318 646.400 C 297.997 643.202, 325.201 627.447, 337.713 615.478 L 344.333 609.144 341.006 605.322 C 339.176 603.220, 333.011 596.615, 327.306 590.644 L 316.934 579.788 308.717 587.650 C 290.772 604.822, 276.029 611, 253 611 C 238.409 611, 229.045 608.801, 216 602.311 C 207.995 598.328, 204.990 596.082, 196.909 588.042 C 188.427 579.602, 186.725 577.287, 182.178 568 C 173.807 550.900, 171.910 533.748, 176.483 516.500 C 183.157 491.328, 205.272 469.161, 232 460.852 C 242.808 457.493, 262.196 457.494, 273 460.854 C 284.542 464.443, 295 470.394, 305.948 479.602 C 311.440 484.221, 316.280 488, 316.704 488 C 317.128 488, 323.628 481.858, 331.149 474.351 L 344.825 460.702 335.662 452.729 C 314.645 434.439, 301.019 427.135, 280 422.893 C 267.270 420.323, 237.367 419.473, 227.500 421.399 M 354 423.477 C 354 423.739, 360.344 440.277, 368.098 460.227 C 375.852 480.177, 395.009 529.575, 410.669 570 C 426.328 610.425, 439.475 643.843, 439.883 644.262 C 440.291 644.681, 448.898 645.476, 459.011 646.028 C 473.580 646.823, 477.658 646.768, 478.650 645.765 C 479.800 644.604, 515.041 552.001, 542.686 477.500 C 560.978 428.203, 562.016 425.133, 560.684 424.268 C 560.033 423.846, 550.475 423.349, 539.444 423.164 C 523.577 422.898, 519.175 423.107, 518.370 424.164 C 517.811 424.899, 504.786 460.094, 489.427 502.376 C 474.067 544.657, 460.907 579.479, 460.183 579.758 C 459.458 580.037, 458.417 579.817, 457.870 579.270 C 457.322 578.722, 444.111 543.798, 428.511 501.661 C 412.911 459.524, 399.863 424.587, 399.515 424.024 C 398.888 423.010, 354 422.470, 354 423.477"
                fillRule="evenodd"
              />
            </svg>
          </button>

          <a
            href="mailto: albert.lnz.rio@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex mx-4 my-1 rounded-2xl items-center place-content-center fill-[#626366] hover:fill-white dark:fill-white bg-[#d1d5db] dark:bg-[#0f0f11] hover:bg-[#e84f4b] hover:dark:bg-[#e84f4b] hover:inner-border-2 hover:inner-border-[#be3b27]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail-filled w-7 rounded-md"
              viewBox="0 0 24 24"
            >
              <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297" />
              <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14" />
            </svg>
          </a>

          <a
            href="https://github.com/AlbertLnz"
            target="_blank"
            rel="noreferrer"
            className="flex mx-4 rounded-2xl items-center place-content-center fill-[#626366] hover:fill-white dark:fill-white bg-[#d1d5db] dark:bg-[#0f0f11] hover:bg-[#272829] hover:dark:bg-[#272829] hover:inner-border-2 hover:inner-border-[#454545]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github-filled w-6 rounded-md"
              viewBox="0 0 24 24"
            >
              <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.120l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.010 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.030"></path>
            </svg>
          </a>

          <a
            href="https://discord.com/users/818193746872762388"
            target="_blank"
            rel="noreferrer"
            className="flex mx-4 rounded-2xl items-center place-content-center fill-[#626366] hover:fill-white dark:fill-white bg-[#d1d5db] dark:bg-[#0f0f11] hover:bg-[#5865f2] hover:dark:bg-[#5865f2] hover:inner-border-2 hover:inner-border-[#292841]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-discord-filled w-6 rounded-md"
              viewBox="0 0 24 24"
            >
              <path d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.732 0 -1.693 -.968 -2.328 -2.045a21.512 21.512 0 0 0 2.103 -.493a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.717 .204 1.416 .37 2.103 .494c-.635 1.075 -1.596 2.044 -2.328 2.044c-1.788 0 -3.391 -1.548 -4.428 -3.629c-.888 -2.217 -.39 -6.89 1.485 -12.204a1 1 0 0 1 .371 -.488c1.439 -1.001 2.952 -1.459 4.966 -1.673a1 1 0 0 1 .935 .435l.063 .107l.651 1.285l.137 -.016a12.97 12.97 0 0 1 2.643 0l.134 .016l.65 -1.284a1 1 0 0 1 .754 -.54l.122 -.009zm-5.983 7a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z"></path>
            </svg>
          </a>

          <a
            href="https://stackoverflow.com/users/22852088/albertlnz"
            target="_blank"
            rel="noreferrer"
            className="flex mx-4 rounded-2xl items-center place-content-center stroke-[#626366] hover:stoke-white dark:stroke-white bg-[#d1d5db] dark:bg-[#0f0f11] hover:bg-[#f6cd63] hover:dark:bg-[#f6cd63] hover:inner-border-2 hover:inner-border-[#f1b739]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-stackoverflow w-7 rounded-md"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke=""
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1" />
              <path d="M8 16h8" />
              <path d="M8.322 12.582l7.956 .836" />
              <path d="M8.787 9.168l7.826 1.664" />
              <path d="M10.096 5.764l7.608 2.472" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NameComponent;
