import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            backgroundColor: '#222222',
            height: '100%',
            width: '100%',
            paddingLeft: '8rem',
          }}
        >
          <img src="https://yamakenji.com/me.png" width="200px" height="200px" alt="" />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: '12rem',
            }}
          >
            <Title title="Detail" />
            <ProfileData tag="Name" name="Kenji Yamashita" />
            <ProfileData tag="ID" name="@yamakenji24" />
            <ProfileData tag="Work" name="Software Engineer" />

            <Title title="Site" />
            <ProfileData tag="Website" name="https://yamakenji.com" />
            <ProfileData tag="Blog" name="https://blog.yamakenji.com" />

            <Title title="Social" />
            <ProfileData tag="GitHub" name="yamakenji24" />
            <ProfileData tag="Zenn" name="yamakenji24" />
          </div>
        </div>
      ),
    );
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

const Title = ({ title }: { title: string }) => <h2 style={{ color: '#FF00FF' }}>{title}</h2>;

const ProfileData = ({ tag, name }: { tag: string; name: string }) => (
  <div style={{ display: 'flex' }}>
    <p style={{ color: '#00CCFF', marginRight: '1rem' }}>{tag}</p>
    <p style={{ color: '#FFFF33' }}>{name}</p>
  </div>
);
