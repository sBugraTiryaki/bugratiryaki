import { ImageResponse } from 'next/og'

export const alt = 'Buğra Tiryaki - Software Developer & AI Builder'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
          }}
        >
          <span
            style={{
              fontSize: '40px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            BT
          </span>
        </div>
        <h1
          style={{
            fontSize: '56px',
            fontWeight: 'bold',
            color: 'white',
            margin: '0 0 12px 0',
          }}
        >
          Buğra Tiryaki
        </h1>
        <p
          style={{
            fontSize: '24px',
            color: '#a1a1aa',
            margin: '0',
          }}
        >
          Software Developer & AI Builder
        </p>
      </div>
    ),
    { ...size }
  )
}
