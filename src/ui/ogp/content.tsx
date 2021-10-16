export const OGPContent = (props): JSX.Element => (
  <html>
    <head>
      <style>{styles}</style>
    </head>
    <body>
      <div>
        <div className="card-box">
          <img src="https://yamakenji.vercel.app/logo.png" width="200px" height="200px" />

          <div className="profile">
            <p className="key-title">Detail</p>
            <ProfileData tag="name" name="Kenji Yamashita" />
            <ProfileData tag="id" name="@yamakenji24" />

            <p className="key-title">Site</p>
            <ProfileData tag="Website" name="https://yamakenji.vercel.app" />
            <ProfileData tag="Where" name={props.title} />

            <p className="key-title">Social</p>
            <ProfileData tag="github" name="yamakenji24" />
            <ProfileData tag="zenn" name="yamakenji24" />
          </div>
        </div>
      </div>
    </body>
  </html>
);

const ProfileData = ({ tag, name }: { tag: string; name: string }) => (
  <div className="key-detail">
    <p className="key">{tag}</p>
    <p className="detail">{name}</p>
  </div>
);

const styles = `
  html, body {
    height: 100%;
    background-color: #222222;
  }
  .card-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: white;
  }
  .profile {
    padding-left: 8rem;
  }
  .key-detail {
    display: flex;
    font-size: 1rem;
    font-weight: bold;
    line-height: 0;
  }
  .key-title {
    color: #FF00FF
  }
  .key {
    color: #00CCFF;
    margin-right: 1rem;
  }
  .detail {
    color: #FFFF33;
  }
`;
