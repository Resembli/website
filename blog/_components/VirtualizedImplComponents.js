import { useMemo, useState } from "react"

export function EmptyWindow() {
  return (
    <div style={{ height: 250, overflow: "auto", border: "1px solid grey" }}>
      <div style={{ height: 20_000 }}></div>
    </div>
  )
}

const ITEM_HEIGHT = 20
const WINDOW_HEIGHT = 250

export function OffsetAdjustedWindow() {
  const [topOffset, setTopOffset] = useState(0)

  const data = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => i)
  }, [])

  const startIndex = Math.floor(topOffset / ITEM_HEIGHT)
  const endIndex = Math.ceil(WINDOW_HEIGHT / ITEM_HEIGHT + startIndex) + 1

  return (
    <div>
      <code>Scroll Top Offset: {topOffset}</code>
      <code>
        Start Index: {startIndex}, End Index: {endIndex}
      </code>
      <div
        style={{ height: WINDOW_HEIGHT, overflow: "auto" }}
        onScroll={(e) => setTopOffset(e.currentTarget.scrollTop)}
      >
        <div style={{ height: 20_000 }}>
          {data.slice(startIndex, endIndex).map((row, i) => {
            return (
              <div
                style={{
                  height: ITEM_HEIGHT,
                  maxHeight: ITEM_HEIGHT,
                  minHeight: ITEM_HEIGHT,
                  display: "flex",
                  border: "1px solid grey",
                  boxSizing: "border-box",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={i + startIndex}
              >
                {row}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function VirtualizedWindow() {
  const [topOffset, setTopOffset] = useState(0)

  const data = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => i)
  }, [])

  const startIndex = Math.floor(topOffset / ITEM_HEIGHT)
  const endIndex = Math.ceil(WINDOW_HEIGHT / ITEM_HEIGHT + startIndex) + 1

  return (
    <div>
      <code>Scroll Top Offset: {topOffset}</code>
      <code>
        Start Index: {startIndex}, End Index: {endIndex}
      </code>

      <div
        style={{
          height: WINDOW_HEIGHT,
          overflow: "auto",
        }}
        onScroll={(e) => setTopOffset(e.currentTarget.scrollTop)}
      >
        <div style={{ height: 20_000 }}>
          <div style={{ height: ITEM_HEIGHT * startIndex }}></div>
          {data.slice(startIndex, endIndex).map((row, i) => {
            return (
              <div
                style={{
                  height: ITEM_HEIGHT,
                  minHeight: ITEM_HEIGHT,
                  maxHeight: ITEM_HEIGHT,
                  border: "1px solid grey",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={i + startIndex}
              >
                {row}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function StickyExample() {
  return (
    <div>
      <div
        style={{
          height: WINDOW_HEIGHT,
          overflow: "auto",
          border: "1px solid grey",
        }}
      >
        <div style={{ height: 20_000 }}>
          <div style={{ position: "sticky", top: 0, left: 0 }}>
            <div style={{ height: 200, width: 200, background: "red" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function VirtualizedWindowStickyBroken() {
  const [topOffset, setTopOffset] = useState(0)

  const data = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => i)
  }, [])

  const startIndex = Math.floor(topOffset / ITEM_HEIGHT)
  const endIndex = Math.ceil(WINDOW_HEIGHT / ITEM_HEIGHT + startIndex) + 1

  return (
    <div>
      <code>Scroll Top Offset: {topOffset}</code>
      <code>
        Start Index: {startIndex}, End Index: {endIndex}
      </code>

      <div
        style={{
          height: WINDOW_HEIGHT,
          overflow: "auto",
        }}
        onScroll={(e) => setTopOffset(e.currentTarget.scrollTop)}
      >
        <div style={{ height: 20_000 }}>
          <div style={{ position: "sticky", top: 0, left: 0 }}>
            <div style={{ height: ITEM_HEIGHT * startIndex }}></div>
            {data.slice(startIndex, endIndex).map((row, i) => {
              return (
                <div
                  style={{
                    height: ITEM_HEIGHT,
                    minHeight: ITEM_HEIGHT,
                    maxHeight: ITEM_HEIGHT,
                    border: "1px solid grey",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={i + startIndex}
                >
                  {row}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export function VirtualizedWindowStickyBroken2() {
  const [topOffset, setTopOffset] = useState(0)

  const data = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => i)
  }, [])

  const startIndex = Math.floor(topOffset / ITEM_HEIGHT)
  const endIndex = Math.ceil(WINDOW_HEIGHT / ITEM_HEIGHT + startIndex) + 1

  return (
    <div>
      <code>Scroll Top Offset: {topOffset}</code>
      <code>
        Start Index: {startIndex}, End Index: {endIndex}
      </code>

      <div
        style={{
          height: WINDOW_HEIGHT,
          overflow: "auto",
        }}
        onScroll={(e) => setTopOffset(e.currentTarget.scrollTop)}
      >
        <div style={{ height: 20_000 }}>
          <div style={{ position: "sticky", top: 0, left: 0 }}>
            <div style={{ transform: `translate3d(0px, ${-topOffset}px, 0px)` }}>
              <div style={{ height: ITEM_HEIGHT * startIndex }}></div>
              {data.slice(startIndex, endIndex).map((row, i) => {
                return (
                  <div
                    style={{
                      height: ITEM_HEIGHT,
                      minHeight: ITEM_HEIGHT,
                      maxHeight: ITEM_HEIGHT,
                      border: "1px solid grey",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    key={i + startIndex}
                  >
                    {row}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function VirtualizedWindowSticky() {
  const [topOffset, setTopOffset] = useState(0)

  const data = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => i)
  }, [])

  const startIndex = Math.floor(topOffset / ITEM_HEIGHT)
  const endIndex = Math.ceil(WINDOW_HEIGHT / ITEM_HEIGHT + startIndex) + 1

  return (
    <div>
      <code>Scroll Top Offset: {topOffset}</code>
      <code>
        Start Index: {startIndex}, End Index: {endIndex}
      </code>

      <div
        style={{
          height: WINDOW_HEIGHT,
          overflow: "auto",
        }}
        onScroll={(e) => setTopOffset(e.currentTarget.scrollTop)}
      >
        <div style={{ height: 20_000 }}>
          <div style={{ position: "sticky", top: 0, left: 0 }}>
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: 0,
                transform: `translate3d(0px, ${-topOffset}px, 0px)`,
              }}
            >
              <div style={{ height: ITEM_HEIGHT * startIndex }}></div>
              {data.slice(startIndex, endIndex).map((row, i) => {
                return (
                  <div
                    style={{
                      height: ITEM_HEIGHT,
                      minHeight: ITEM_HEIGHT,
                      maxHeight: ITEM_HEIGHT,
                      border: "1px solid grey",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    key={i + startIndex}
                  >
                    {row}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
