import React from 'react'
import { TProps } from '../../model/Index'

const ValueIndex:React.FC<TProps> = ({ name, san }: TProps) => {
  return (
    <div className="index-value">
  <div className="flex justify-between">
    <button
      className="flex select-index-button max-w items-center hover:text-color-highlight"
      type="button"
    >
      <span className="ellipsis-wrap whitespace-nowrap overflow-hidden">
        VNINDEX
      </span>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        className="inline text-sm"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </svg>
    </button>
    <div className="flex items-center whitespace-nowrap text-color-down">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 20 20"
        className="inline"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      1,164.31 (-15.34 -1.30%)
    </div>
  </div>
  <div className="flex justify-between">
    <div>1,112,337,687 CP</div>
    <div>23,175.072 Tỷ</div>
  </div>
  <div className="stock-info flex justify-between">
    <div className="flex-1 flex items-center space-x-0.5">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 20 20"
        className="inline text-color-up"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span className="inline text-color-up">101</span>
      <span className="inline text-color-ceil"> (3)</span>
    </div>
    <div className="flex-1 text-color-ref flex items-center justify-center space-x-0.5">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        className="inline"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M464 352H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48z" />
      </svg>
      <span>62</span>
    </div>
    <div className="flex-1 flex items-center justify-center space-x-0.5">
      <span className="text-color-down inline-flex items-center">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 20 20"
          className="inline"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        393
      </span>
      <span className="inline text-color-floor"> (12)</span>
    </div>
    <div className="flex-1 text-right whitespace-nowrap pl-1">Phiên GDTT</div>
  </div>
</div>

  )
}

export default ValueIndex