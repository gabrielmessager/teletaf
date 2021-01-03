import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import React from 'react';
import { Flex } from '../JobPostForm/JobPostForm.styles';

export function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* <span> */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 18 14"
        style={{ borderRadius: '4px' }}
      >
        <path
          fillRule="evenodd"
          d="M18 1.663a7.655 7.655 0 0 1-2.124.546A3.555 3.555 0 0 0 17.497.262c-.708.405-1.507.7-2.34.854A3.758 3.758 0 0 0 12.46 0c-2.045 0-3.69 1.586-3.69 3.533 0 .273.035.547.092.81-3.061-.154-5.79-1.554-7.607-3.698a3.394 3.394 0 0 0-.502 1.783c0 1.225.65 2.308 1.644 2.942a3.84 3.84 0 0 1-1.667-.448v.044c0 1.717 1.268 3.139 2.958 3.467-.308.076-.64.12-.97.12a4.85 4.85 0 0 1-.697-.055c.468 1.4 1.827 2.418 3.449 2.45a7.598 7.598 0 0 1-4.58 1.51c-.309 0-.594-.011-.891-.044A10.762 10.762 0 0 0 5.665 14c6.784 0 10.496-5.381 10.496-10.052 0-.153 0-.306-.011-.459A7.757 7.757 0 0 0 18 1.663z"
        />
      </svg>
      {/* </span> */}
      {/* <span> */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 17 17"
        style={{ borderRadius: '4px' }}
      >
        <path
          fillRule="evenodd"
          d="M16.06 0H.94A.94.94 0 0 0 0 .94v15.12c0 .52.42.94.94.94h8.136v-6.585H6.862V7.847h2.214V5.954c0-2.191 1.35-3.386 3.309-3.386.93 0 1.737.066 1.97.1v2.29l-1.35.011c-1.074 0-1.273.498-1.273 1.24v1.638h2.534l-.332 2.568h-2.202V17h4.327c.52 0 .941-.42.941-.94V.94a.94.94 0 0 0-.94-.94z"
        />
      </svg>
      {/* </span> */}
      <span>
        <div
          style={{
            backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtOTUyLjM2MjE4KSI+PHBhdGggc3R5bGU9InRleHQtaW5kZW50OjA7dGV4dC10cmFuc2Zvcm06bm9uZTtkaXJlY3Rpb246bHRyO2Jsb2NrLXByb2dyZXNzaW9uOnRiO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO2NvbG9yOiMwMDAwMDA7ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZTsiIGQ9Im0gMTYsOTczLjM2MjE4IGMgLTQuNDM4NSwwIC03Ljk5OTk5OTksMy43MzMzIC03Ljk5OTk5OTksOC4yMTg4IGwgMCw0MS41MzEyMiBjIDAsNC40ODU0IDMuNTYxNDk5OSw4LjI1IDcuOTk5OTk5OSw4LjI1IGwgNjgsMCBjIDQuNDM4NywwIDgsLTMuNzY0NiA4LC04LjI1IGwgMCwtNDEuNTMxMjIgYyAwLC00LjQ4NTUgLTMuNTYxMywtOC4yMTg4IC04LC04LjIxODggbCAtNjgsMCB6IG0gMCw0IDY4LDAgYyAwLjU4NjcsMCAxLjE1NDQsMC4xNDMyIDEuNjU2MywwLjM3NSBMIDUyLjU5MzgsMTAwOC4zMzEgYyAtMS41Mjc2LDEuNDEzMSAtMy41NjM0LDEuNDEzMyAtNS4wOTM4LDAgTCAxNC4zNzUsOTc3LjczNzE4IGMgMC40OTU1LC0wLjIyNDUgMS4wNDgxLC0wLjM3NSAxLjYyNSwtMC4zNzUgeiBtIC0zLjkzNzQsMy42ODc1IDIzLjQ2ODcsMjEuNjg3NTIgLTIzLjAzMTMsMjIuNDA2MiBjIC0wLjMwMzksLTAuNjAwMyAtMC41LC0xLjI4MDcgLTAuNSwtMi4wMzEyIGwgMCwtNDEuNTMxMjIgYyAwLC0wLjE4MzggMC4wNDMsLTAuMzU1MiAwLjA2MywtMC41MzEzIHogbSA3NS44NzUsMC4wMzEgYyAwLjAxOCwwLjE2NjIgMC4wNjIsMC4zMjY5IDAuMDYyLDAuNSBsIDAsNDEuNTMxMjIgYyAwLDAuNzM0OCAtMC4xNzY1LDEuNDA4NCAtMC40Njg3LDIgbCAtMjIuOTY4NywtMjIuNDA2MiAyMy4zNzUsLTIxLjYyNTAyIHogbSAtMjYuMjgxMywyNC4zMTI0MiAyMi40Njg3LDIxLjk2ODggYyAtMC4wNDIsMCAtMC4wODMsMCAtMC4xMjUsMCBsIC02OCwwIGMgLTAuMDMyLDAgLTAuMDYyLDdlLTQgLTAuMDk0LDAgbCAyMi41NjI1LC0yMS45Mzc1IDYuMzEyNSw1Ljg0MzcgYyAyLjk2NzUsMi43NDA4IDcuNTY0NCwyLjc0NDYgMTAuNTMxMywwIGwgNi4zNDM3LC01Ljg3NSB6IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgbWFya2VyPSJub25lIiB2aXNpYmlsaXR5PSJ2aXNpYmxlIiBkaXNwbGF5PSJpbmxpbmUiIG92ZXJmbG93PSJ2aXNpYmxlIj48L3BhdGg+PC9nPjwvc3ZnPg==)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '30px',
            height: '30px',
          }}
        />
      </span>
    </div>
  );
}
