import { theme } from '@styles/theme';

type Props = { theme: boolean };
export const LogoIcon = (props: Props) => {
  return (
    <svg
      width="33"
      height="10"
      viewBox="0 0 33 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.37 6.78C4.38333 6.82 4.39 6.86667 4.39 6.92C4.39667 6.97333 4.4 7.02333 4.4 7.07C4.4 7.19 4.38667 7.30333 4.36 7.41C4.33333 7.51667 4.29 7.61 4.23 7.69C4.17 7.77 4.09 7.83667 3.99 7.89C3.89667 7.93667 3.77667 7.96 3.63 7.96C3.49 7.96 3.35 7.93 3.21 7.87C3.07667 7.81 2.91 7.72333 2.71 7.61L0.56 6.37C0.386667 6.14333 0.3 5.84333 0.3 5.47C0.3 5.19 0.34 4.97333 0.42 4.82C0.5 4.66667 0.616667 4.54667 0.77 4.46L3.52 2.86C3.84667 2.94667 4.06667 3.06667 4.18 3.22C4.3 3.36667 4.36 3.52667 4.36 3.7C4.36 3.93333 4.3 4.11667 4.18 4.25C4.06667 4.37667 3.89667 4.49667 3.67 4.61L1.91 5.5L4.37 6.78ZM7.09703 6.7C7.17036 6.71333 7.26036 6.72667 7.36703 6.74C7.4737 6.74667 7.5737 6.75 7.66703 6.75C7.8937 6.75 8.10036 6.71667 8.28703 6.65C8.48036 6.58333 8.6437 6.48 8.77703 6.34C8.91703 6.2 9.0237 6.02 9.09703 5.8C9.17703 5.57333 9.21703 5.30333 9.21703 4.99C9.21703 4.39 9.07703 3.94 8.79703 3.64C8.51703 3.33333 8.1437 3.18 7.67703 3.18C7.5837 3.18 7.48703 3.18333 7.38703 3.19C7.2937 3.19667 7.19703 3.20667 7.09703 3.22V6.7ZM7.65703 8.16C7.5437 8.16 7.4137 8.15667 7.26703 8.15C7.12036 8.14333 6.96703 8.13 6.80703 8.11C6.6537 8.09 6.49703 8.06333 6.33703 8.03C6.1837 8.00333 6.04036 7.96333 5.90703 7.91C5.54036 7.77 5.35703 7.52667 5.35703 7.18V2.51C5.35703 2.37 5.3937 2.26333 5.46703 2.19C5.54703 2.11 5.6537 2.04667 5.78703 2C6.0737 1.90667 6.37703 1.84667 6.69703 1.82C7.01703 1.78667 7.3037 1.77 7.55703 1.77C8.07703 1.77 8.54703 1.83333 8.96703 1.96C9.3937 2.08667 9.75703 2.28333 10.057 2.55C10.3637 2.81 10.6004 3.14 10.767 3.54C10.9337 3.94 11.017 4.41333 11.017 4.96C11.017 5.49333 10.937 5.96 10.777 6.36C10.617 6.75333 10.387 7.08667 10.087 7.36C9.7937 7.62667 9.44036 7.82667 9.02703 7.96C8.6137 8.09333 8.15703 8.16 7.65703 8.16ZM14.4572 8.16C14.0639 8.16 13.6972 8.10667 13.3572 8C13.0239 7.88667 12.7305 7.72 12.4772 7.5C12.2305 7.28 12.0339 7.00333 11.8872 6.67C11.7472 6.33667 11.6772 5.94667 11.6772 5.5C11.6772 5.06 11.7472 4.68333 11.8872 4.37C12.0339 4.05 12.2239 3.79 12.4572 3.59C12.6905 3.38333 12.9572 3.23333 13.2572 3.14C13.5572 3.04 13.8639 2.99 14.1772 2.99C14.5305 2.99 14.8505 3.04333 15.1372 3.15C15.4305 3.25667 15.6805 3.40333 15.8872 3.59C16.1005 3.77667 16.2639 4 16.3772 4.26C16.4972 4.52 16.5572 4.80333 16.5572 5.11C16.5572 5.33667 16.4939 5.51 16.3672 5.63C16.2405 5.75 16.0639 5.82667 15.8372 5.86L13.3672 6.23C13.4405 6.45 13.5905 6.61667 13.8172 6.73C14.0439 6.83667 14.3039 6.89 14.5972 6.89C14.8705 6.89 15.1272 6.85667 15.3672 6.79C15.6139 6.71667 15.8139 6.63333 15.9672 6.54C16.0739 6.60667 16.1639 6.7 16.2372 6.82C16.3105 6.94 16.3472 7.06667 16.3472 7.2C16.3472 7.5 16.2072 7.72333 15.9272 7.87C15.7139 7.98333 15.4739 8.06 15.2072 8.1C14.9405 8.14 14.6905 8.16 14.4572 8.16ZM14.1772 4.23C14.0172 4.23 13.8772 4.25667 13.7572 4.31C13.6439 4.36333 13.5505 4.43333 13.4772 4.52C13.4039 4.6 13.3472 4.69333 13.3072 4.8C13.2739 4.9 13.2539 5.00333 13.2472 5.11L14.9572 4.83C14.9372 4.69667 14.8639 4.56333 14.7372 4.43C14.6105 4.29667 14.4239 4.23 14.1772 4.23ZM20.5864 7.87C20.4931 7.94333 20.3564 8.00333 20.1764 8.05C19.9964 8.09667 19.7931 8.12 19.5664 8.12C19.3064 8.12 19.0797 8.08667 18.8864 8.02C18.6997 7.95333 18.5697 7.84667 18.4964 7.7C18.4364 7.58667 18.3631 7.43 18.2764 7.23C18.1964 7.02333 18.1097 6.79667 18.0164 6.55C17.9231 6.29667 17.8264 6.02667 17.7264 5.74C17.6264 5.45333 17.5297 5.17 17.4364 4.89C17.3497 4.61 17.2697 4.34 17.1964 4.08C17.1231 3.82 17.0631 3.59 17.0164 3.39C17.1097 3.29667 17.2331 3.21667 17.3864 3.15C17.5464 3.07667 17.7197 3.04 17.9064 3.04C18.1397 3.04 18.3297 3.09 18.4764 3.19C18.6297 3.28333 18.7431 3.46333 18.8164 3.73L19.2064 5.26C19.2797 5.56 19.3497 5.83333 19.4164 6.08C19.4831 6.32 19.5331 6.50667 19.5664 6.64H19.6164C19.7431 6.14667 19.8764 5.6 20.0164 5C20.1564 4.4 20.2831 3.81 20.3964 3.23C20.5097 3.17 20.6364 3.12333 20.7764 3.09C20.9231 3.05667 21.0631 3.04 21.1964 3.04C21.4297 3.04 21.6264 3.09 21.7864 3.19C21.9464 3.29 22.0264 3.46333 22.0264 3.71C22.0264 3.81667 21.9997 3.97333 21.9464 4.18C21.8997 4.38 21.8364 4.61 21.7564 4.87C21.6831 5.12333 21.5931 5.39333 21.4864 5.68C21.3864 5.96667 21.2831 6.24667 21.1764 6.52C21.0697 6.79333 20.9631 7.05 20.8564 7.29C20.7564 7.52333 20.6664 7.71667 20.5864 7.87ZM28.0353 4.04C28.022 4 28.012 3.95333 28.0053 3.9C28.0053 3.84667 28.0053 3.79667 28.0053 3.75C28.0053 3.63 28.0186 3.51667 28.0453 3.41C28.072 3.30333 28.1153 3.21 28.1753 3.13C28.2353 3.05 28.312 2.98667 28.4053 2.94C28.5053 2.88667 28.6286 2.86 28.7753 2.86C28.9153 2.86 29.052 2.89 29.1853 2.95C29.3253 3.01 29.4953 3.09667 29.6953 3.21L31.8453 4.45C32.0186 4.67667 32.1053 4.97667 32.1053 5.35C32.1053 5.63 32.0653 5.84667 31.9853 6C31.9053 6.15333 31.7886 6.27333 31.6353 6.36L28.8853 7.96C28.5586 7.87333 28.3353 7.75667 28.2153 7.61C28.102 7.45667 28.0453 7.29333 28.0453 7.12C28.0453 6.88667 28.102 6.70667 28.2153 6.58C28.3353 6.44667 28.5086 6.32333 28.7353 6.21L30.4953 5.32L28.0353 4.04Z"
        fill={props.theme ? '#222222' : '#fff'}
      />
      <path
        d="M25.6776 9.06C25.5842 9.07333 25.4942 9.08 25.4076 9.08C25.3209 9.08667 25.2409 9.09 25.1676 9.09C24.8876 9.09 24.6709 9.03 24.5176 8.91C24.3709 8.79 24.2976 8.59667 24.2976 8.33C24.2976 8.15 24.3242 7.97 24.3776 7.79C24.4309 7.60333 24.4776 7.44 24.5176 7.3L26.2776 0.95C26.3776 0.936666 26.4709 0.93 26.5576 0.93C26.6442 0.923333 26.7242 0.92 26.7976 0.92C27.0642 0.92 27.2742 0.976666 27.4276 1.09C27.5876 1.20333 27.6676 1.38667 27.6676 1.64C27.6676 1.83333 27.6409 2.01667 27.5876 2.19C27.5342 2.36333 27.4842 2.53667 27.4376 2.71L25.6776 9.06Z"
        fill="#00C7AE"
      />
    </svg>
  );
};
