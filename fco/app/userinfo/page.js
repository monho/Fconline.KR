// `app/page.tsx` is the UI for the `/` URL
import "./main.css";
import SearchForm from "../components/SearchForm/SearchForm";



function Header() {
  return (
      <div className="Warp">
          <svg width="243" height="47" viewBox="0 0 243 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.664 46C1.19467 46 0.810667 45.8507 0.512 45.552C0.256 45.2107 0.170667 44.8053 0.256 44.336L9.088 2.864C9.17333 2.39466 9.408 2.01066 9.792 1.712C10.2187 1.37066 10.6667 1.2 11.136 1.2H41.92C42.3893 1.2 42.752 1.37066 43.008 1.712C43.3067 2.01066 43.4133 2.39466 43.328 2.864L41.536 10.992C41.4507 11.4187 41.216 11.8027 40.832 12.144C40.448 12.4853 40.0213 12.656 39.552 12.656H20.544L19.008 19.696H36.736C37.2053 19.696 37.568 19.8667 37.824 20.208C38.08 20.5067 38.1653 20.8907 38.08 21.36L36.352 29.424C36.2667 29.8933 36.0107 30.2987 35.584 30.64C35.2 30.9387 34.7733 31.088 34.304 31.088H16.576L13.76 44.336C13.6747 44.8053 13.44 45.2107 13.056 45.552C12.672 45.8507 12.2453 46 11.776 46H1.664ZM60.7255 46.64C57.8242 46.64 55.1575 46.2987 52.7255 45.616C50.2935 44.8907 48.2242 43.824 46.5175 42.416C44.8535 40.9653 43.6802 39.152 42.9975 36.976C42.3148 34.8 42.2082 32.24 42.6775 29.296C42.9762 27.5467 43.3388 25.6693 43.7655 23.664C44.2348 21.6587 44.6828 19.7387 45.1095 17.904C46.1335 14.064 47.6695 10.864 49.7175 8.304C51.7655 5.70133 54.3255 3.76 57.3975 2.48C60.5122 1.2 64.1388 0.559998 68.2775 0.559998C70.9228 0.559998 73.4615 0.901332 75.8935 1.584C78.3255 2.224 80.4375 3.20533 82.2295 4.528C84.0642 5.85066 85.4082 7.51466 86.2615 9.52C87.1148 11.4827 87.2855 13.808 86.7735 16.496C86.6882 16.88 86.4748 17.2 86.1335 17.456C85.8348 17.712 85.4935 17.84 85.1095 17.84H74.2295C73.6322 17.84 73.1842 17.712 72.8855 17.456C72.6295 17.2 72.4588 16.752 72.3735 16.112C72.3308 14.32 71.8188 13.104 70.8375 12.464C69.8988 11.7813 68.6615 11.44 67.1255 11.44C65.2482 11.44 63.6268 11.952 62.2615 12.976C60.9388 13.9573 59.9788 15.7067 59.3815 18.224C58.4855 21.7227 57.7175 25.3067 57.0775 28.976C56.6082 31.4933 56.8002 33.264 57.6535 34.288C58.5495 35.2693 59.9362 35.76 61.8135 35.76C63.3495 35.76 64.7362 35.4187 65.9735 34.736C67.2535 34.0533 68.3202 32.8373 69.1735 31.088C69.5148 30.4053 69.8562 29.9573 70.1975 29.744C70.5815 29.488 71.0935 29.36 71.7335 29.36H82.6135C82.9975 29.36 83.2962 29.488 83.5095 29.744C83.7655 30 83.8508 30.32 83.7655 30.704C83.0828 33.3493 82.0588 35.6747 80.6935 37.68C79.3708 39.6427 77.7068 41.3067 75.7015 42.672C73.6962 43.9947 71.4348 44.9973 68.9175 45.68C66.4002 46.32 63.6695 46.64 60.7255 46.64ZM106.474 46.64C103.701 46.64 101.119 46.2773 98.73 45.552C96.3407 44.8267 94.2927 43.7387 92.586 42.288C90.8793 40.8373 89.642 39.0453 88.874 36.912C88.1487 34.736 88.042 32.1973 88.554 29.296C88.8527 27.504 89.194 25.6693 89.578 23.792C90.0047 21.872 90.4313 19.9733 90.858 18.096C92.266 12.464 94.826 8.13333 98.538 5.104C102.293 2.07466 107.455 0.559998 114.026 0.559998C116.799 0.559998 119.381 0.943998 121.77 1.712C124.159 2.48 126.186 3.61066 127.85 5.104C129.557 6.55466 130.794 8.38933 131.562 10.608C132.33 12.784 132.458 15.28 131.946 18.096C131.647 19.9733 131.285 21.872 130.858 23.792C130.474 25.6693 130.047 27.504 129.578 29.296C128.127 35.056 125.546 39.3867 121.834 42.288C118.122 45.1893 113.002 46.64 106.474 46.64ZM107.626 35.76C109.461 35.76 111.061 35.2267 112.426 34.16C113.834 33.0507 114.815 31.3013 115.37 28.912C115.839 27.0773 116.266 25.3067 116.65 23.6C117.034 21.8507 117.375 20.08 117.674 18.288C118.101 15.8987 117.866 14.1707 116.97 13.104C116.117 11.9947 114.773 11.44 112.938 11.44C111.103 11.44 109.503 11.9947 108.138 13.104C106.773 14.1707 105.77 15.8987 105.13 18.288C104.703 20.08 104.298 21.8507 103.914 23.6C103.573 25.3067 103.231 27.0773 102.89 28.912C102.463 31.3013 102.677 33.0507 103.53 34.16C104.383 35.2267 105.749 35.76 107.626 35.76ZM133.518 46C133.049 46 132.686 45.8507 132.43 45.552C132.174 45.2107 132.089 44.8053 132.174 44.336L134.222 34.736C134.307 34.2667 134.542 33.8613 134.926 33.52C135.353 33.1787 135.801 33.008 136.27 33.008H145.87C146.339 33.008 146.702 33.1787 146.958 33.52C147.214 33.8613 147.299 34.2667 147.214 34.736L145.166 44.336C145.081 44.8053 144.825 45.2107 144.398 45.552C144.014 45.8507 143.609 46 143.182 46H133.518ZM153.352 46C152.882 46 152.498 45.8507 152.2 45.552C151.944 45.2107 151.858 44.8053 151.944 44.336L160.776 2.864C160.861 2.39466 161.096 2.01066 161.48 1.712C161.864 1.37066 162.29 1.2 162.76 1.2H172.936C173.405 1.2 173.768 1.37066 174.024 1.712C174.28 2.01066 174.365 2.39466 174.28 2.864L171.464 16.176L183.56 2.544C183.816 2.24533 184.157 1.94666 184.583 1.648C185.053 1.34933 185.629 1.2 186.312 1.2H198.28C198.92 1.2 199.304 1.456 199.432 1.968C199.56 2.48 199.453 2.928 199.112 3.312L181 23.728L191.304 43.888C191.602 44.4427 191.538 44.9333 191.112 45.36C190.685 45.7867 190.237 46 189.768 46H178.44C177.757 46 177.245 45.872 176.904 45.616C176.562 45.3173 176.306 44.976 176.136 44.592L168.583 29.68L165.448 44.336C165.362 44.8053 165.128 45.2107 164.744 45.552C164.402 45.8507 163.997 46 163.528 46H153.352ZM197.934 46C197.507 46 197.166 45.8507 196.91 45.552C196.654 45.2107 196.568 44.8053 196.654 44.336L205.422 2.864C205.507 2.39466 205.763 2.01066 206.19 1.712C206.616 1.37066 207.043 1.2 207.47 1.2H225.71C231.512 1.2 235.779 2.52266 238.51 5.168C241.283 7.81333 242.158 11.504 241.134 16.24C240.494 19.2267 239.256 21.7653 237.422 23.856C235.63 25.9467 233.518 27.5893 231.086 28.784L236.142 43.888C236.184 44.016 236.206 44.144 236.206 44.272C236.248 44.3573 236.248 44.464 236.206 44.592C236.12 44.976 235.907 45.3173 235.566 45.616C235.267 45.872 234.926 46 234.542 46H223.726C222.915 46 222.339 45.808 221.998 45.424C221.699 44.9973 221.507 44.6133 221.422 44.272L217.838 31.088H213.23L210.414 44.336C210.328 44.8053 210.072 45.2107 209.646 45.552C209.262 45.8507 208.835 46 208.366 46H197.934ZM215.47 20.528H221.55C223.043 20.528 224.238 20.1227 225.134 19.312C226.072 18.4587 226.67 17.4133 226.926 16.176C227.182 14.896 227.032 13.808 226.478 12.912C225.966 12.016 224.942 11.568 223.406 11.568H217.326L215.47 20.528Z" fill="white"/>
</svg>
          <SearchForm/>
      </div>
     
  );
}
export default Header;