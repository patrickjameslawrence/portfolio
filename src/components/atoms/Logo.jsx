import { motion } from "framer-motion";

export default function Logo(props) {
  return (
    <motion.svg
      style={{ originX: "center", originY: "center" }}
      whileHover={{
        rotate: 180,
        scale: [1, 1.125, 1],
        transition: { type: "tween", duration: 0.75, ease: "backInOut" },
      }}
      whileTap={{ scale: 0.75 }}
      width="100%"
      height="auto"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/20np00/svg"
    >
      <circle
        cx="32"
        cy="32"
        r="32"
        fill={props.background ? "#FF4F4F" : "none"}
      />
      <path
        d="M49.847 15.2927C50.5788 9.61231 46.8227 9.96738 44.3585 13.5176C14.1716 57.008 35.6683 55.2331 44.8158 51.6828C53.9634 48.1326 57.6224 37.9255 46.188 42.8071C34.7536 47.6887 48.9323 22.3932 49.847 15.2927Z"
        fill={props.background ? "white" : "#000"}
      />
      <path
        d="M14.153 48.6153C13.4212 54.2819 17.1773 53.9277 19.6415 50.3861C49.8284 7.00092 28.3317 8.77152 19.1841 12.3132C10.0366 15.8548 6.37761 26.0372 17.812 21.1674C29.2464 16.2977 15.0677 41.532 14.153 48.6153Z"
        fill={props.background ? "white" : "#000"}
      />
    </motion.svg>
  );
}
