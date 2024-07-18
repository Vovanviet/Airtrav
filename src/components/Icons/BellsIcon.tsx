import React from "react";

const BellsIcon = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <div>
      <svg
        width={25}
        height={25}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.2364 17.085H8.2363V10.5848C8.2363 8.08467 10.2363 6.08459 12.7363 6.08459C15.2364 6.08459 17.2364 8.08467 17.2364 10.5848V17.085ZM19.2383 16.0851V10.5849C19.2383 7.51479 17.0983 4.9447 14.2383 4.26467V3.58465C14.2383 2.75619 13.5667 2.08459 12.7383 2.08459C11.9099 2.08459 11.2383 2.75619 11.2383 3.58465V4.26467C8.36828 4.9447 6.23828 7.51479 6.23828 10.5849V16.0851L4.23828 18.0852V19.0852H21.2383V18.0852L19.2383 16.0851ZM12.7382 22.0847C13.8428 22.0847 14.7382 21.1892 14.7382 20.0846H10.7382C10.7382 21.1892 11.6337 22.0847 12.7382 22.0847Z"
          fill="#777E91"
        />
      </svg>
    </div>
  );
};

export default BellsIcon;
