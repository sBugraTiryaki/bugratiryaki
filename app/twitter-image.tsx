import { ImageResponse } from 'next/og'

export const runtime = 'edge'
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
          background: 'linear-gradient(135deg, #18181b 0%, #27272a 50%, #18181b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-100px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {/* Avatar circle with initials */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
            }}
          >
            <span
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              BT
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 16px 0',
              letterSpacing: '-1px',
            }}
          >
            Buğra Tiryaki
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: '28px',
              color: '#a1a1aa',
              margin: '0 0 40px 0',
            }}
          >
            Software Developer & AI Builder
          </p>

          {/* Tech tags */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
            }}
          >
            {['Laravel', 'Next.js', 'React', 'AI'].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '8px 20px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  color: '#d4d4d8',
                  fontSize: '18px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Website URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontSize: '20px',
              color: '#71717a',
            }}
          >
            bugratiryaki.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
