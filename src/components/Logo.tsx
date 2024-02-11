import React from "react";
interface Props extends React.ComponentProps<"svg"> {}

export const Logo = ({ ...rest }: Props) => {
  return (
    <svg
      {...rest}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_152_790)" fill="none">
        <rect width="50" height="50" rx="5" fill="#406ABF"></rect>
        <path
          opacity="0.4"
          d="M15.4779 54.2459L6.6001 24.9391C16.2475 33.9196 23.1664 36.9425 27.234 37.7819C30.4881 38.4533 47.3581 19.5765 54.5249 10.1714V55L15.4779 54.2459Z"
          fill="#406ABF"
        ></path>
        <path
          d="M57.3744 5.16243C59.2417 7.02972 59.2417 10.0572 57.3744 11.9245L31.6668 37.6322L24.9047 30.8701L50.6124 5.16243C52.4797 3.29514 55.5071 3.29514 57.3744 5.16243Z"
          fill="#9FB5DF"
        ></path>
        <path
          d="M8.00056 20.726C9.86785 18.8588 12.8953 18.8588 14.7626 20.726L31.6677 37.6312L28.2867 41.0122C26.4194 42.8795 23.392 42.8795 21.5247 41.0122L8.00056 27.4881C6.13328 25.6208 6.13328 22.5933 8.00056 20.726Z"
          fill="#D9E1F2"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_152_790">
          <rect width="50" height="50" rx="5" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};
