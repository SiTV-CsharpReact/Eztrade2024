interface DownIndexIconProps {
  height?: string;
}

export const DownIndexIcon: React.FC<DownIndexIconProps> = ({ height = "1em" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="14px"
    height="16px"
    viewBox="0 0 24 24"
    version="1.1"
  >
    <title>Down</title>
    <g
      id="Iconly/Light/Arrow---Down"
      stroke="#F34859"
      strokeWidth={2}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g
        id="Arrow---Down"
        transform="translate(5.500000, 4.000000)"
        stroke="#F34859"
        strokeWidth={2}
      >
        <line x1="6.7743" y1="15.75" x2="6.7743" y2="0.75" id="Stroke-1" />
        <polyline
          id="Stroke-3"
          points="12.7987 9.7002 6.7747 15.7502 0.7497 9.7002"
        />
      </g>
    </g>
  </svg>
);
