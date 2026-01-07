import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'Buğra Tiryaki - Software Developer & AI Builder'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const profileImagePath = join(process.cwd(), 'public', 'profile-large.jpg')
  const profileImageData = readFileSync(profileImagePath)
  const profileImageBase64 = `data:image/jpeg;base64,${profileImageData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          gap: '60px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Profile Photo */}
        <div
          style={{
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexShrink: 0,
          }}
        >
          <img
            src={profileImageBase64}
            alt="Buğra Tiryaki"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Text Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 16px 0',
              lineHeight: 1.1,
            }}
          >
            Buğra Tiryaki
          </h1>
          <p
            style={{
              fontSize: '28px',
              color: '#a1a1aa',
              margin: '0 0 24px 0',
            }}
          >
            Software Developer & AI Builder
          </p>
          <p
            style={{
              fontSize: '20px',
              color: '#71717a',
              margin: '0',
            }}
          >
            bugratiryaki.com
          </p>
        </div>
      </div>
    ),
    { ...size }
  )
}
