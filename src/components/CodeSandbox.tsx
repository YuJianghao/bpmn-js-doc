import React from "react"
export default function CodeSandbox(props: { src: string }) {
  const { src } = props
  return (
    <iframe
      src={src}
      style={{
        width: "100%",
        height: 500,
        border: 0,
        borderRadius: 4,
        overflow: "hidden",
      }}
      title="bpmn-custom-renderer"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  )
}
