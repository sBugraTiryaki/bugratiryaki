import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'Bugra Tiryaki - Vibe Coding Mentor'
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
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Subtle gold accent line at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #c9a962, transparent)',
          }}
        />

        {/* Profile Photo with gold ring */}
        <div
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid #c9a962',
            display: 'flex',
            flexShrink: 0,
            marginBottom: '48px',
          }}
        >
          <img
            src={profileImageBase64}
            alt="Bugra Tiryaki"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Name - elegant serif style */}
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 300,
            color: '#ffffff',
            margin: '0 0 16px 0',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'Georgia, serif',
          }}
        >
          Bugra Tiryaki
        </h1>

        {/* Role - minimal */}
        <p
          style={{
            fontSize: '20px',
            fontWeight: 400,
            color: '#c9a962',
            margin: 0,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}
        >
          Vibe Coding Mentor
        </p>

        {/* Subtle gold accent line at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #c9a962, transparent)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
