import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'StudentSuite: open-source tools that help students plan less and learn more';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          background: '#ffffff',
          backgroundImage:
            'radial-gradient(circle at 26px 26px, rgba(79,70,229,0.12) 2px, transparent 0)',
          backgroundSize: '52px 52px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              background: '#4F46E5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 34,
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            S
          </div>
          <div style={{ display: 'flex', fontSize: 32, fontWeight: 600, color: '#1A1A2E' }}>
            Student<span style={{ color: '#4F46E5' }}>Suite</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 52,
            fontSize: 68,
            fontWeight: 700,
            color: '#1A1A2E',
            lineHeight: 1.08,
          }}
        >
          <span>Plan less.</span>
          <span style={{ color: '#4F46E5' }}>Learn more.</span>
        </div>

        <div style={{ display: 'flex', marginTop: 28, fontSize: 26, color: '#3f3f52', maxWidth: 760 }}>
          Free, open tools built around one idea: students deserve better software.
        </div>
      </div>
    ),
    { ...size },
  );
}
