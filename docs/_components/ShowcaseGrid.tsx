import BrowserOnly from "@docusaurus/BrowserOnly"

import type { RenderItem } from "@resembli/react-virtualized-window"
import { Grid } from "@resembli/react-virtualized-window"

const data = Array.from({ length: 1000 }, (_, row) => {
  return Array.from({ length: 100 }, (_, column) => {
    return [row, column]
  })
})

const CellItem: RenderItem<number[]> = ({
  data,
  style,
  cellMeta: { row, column, pinnedRow, pinnedColumn },
}) => {
  let background = (row + column) % 2 === 1 ? "#f8f8f0" : "white"

  if (pinnedRow === "top") background = "#839073"
  if (pinnedColumn === "left") background = "#4E4A59"

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background,
        color: pinnedColumn || pinnedRow ? "rgb(30, 255, 0)" : "black",
        ...style,
      }}
    >
      {data[0]},{data[1]}
    </div>
  )
}

export function ShowcaseGrid() {
  return (
    <BrowserOnly>
      {() => {
        const width = globalThis.innerWidth ?? 1280
        return (
          <Grid
            height={600}
            defaultRowHeight={width < 800 ? 120 : 60}
            defaultColumnWidth={width < 800 ? 120 : 60}
            pinnedTopCount={1}
            pinnedLeftCount={1}
            data={data}
          >
            {CellItem}
          </Grid>
        )
      }}
    </BrowserOnly>
  )
}
