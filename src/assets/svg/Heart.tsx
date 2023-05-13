import { SvgType } from ".";

export const Heart = ({ onClick }: SvgType) => (
  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" onClick={onClick}>
    <path
      d="M50.625 19.8281C50.625 34.5937 28.7318 46.5455 27.7995 47.0391C27.5537 47.1713 27.279 47.2404 27 47.2404C26.721 47.2404 26.4463 47.1713 26.2005 47.0391C25.2682 46.5455 3.375 34.5937 3.375 19.8281C3.37891 16.3608 4.75803 13.0366 7.20981 10.5848C9.66159 8.13303 12.9858 6.75391 16.4531 6.75C20.809 6.75 24.6227 8.62312 27 11.7893C29.3773 8.62312 33.191 6.75 37.5469 6.75C41.0142 6.75391 44.3384 8.13303 46.7902 10.5848C49.242 13.0366 50.6211 16.3608 50.625 19.8281Z"
      fill="#FF0000"
    />
  </svg>
);
