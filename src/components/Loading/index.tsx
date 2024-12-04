import './index.css'

export default function Loading(props?: { text?: string }) {
  return (
    <div className="wrapper-loader">
      <svg
        className="icon"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="spin"
          cx="50"
          cy="50"
          fill="none"
          r="35"
          strokeWidth="7"
          stroke="blue"
          strokeDasharray="100 30"
          strokeLinecap="round"
        />
      </svg>

      {props && props.text ? <div className="ml-5">{props.text}</div> : null}
    </div>
  )
}
