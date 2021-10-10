export const OGPContent = (props): JSX.Element => (
  <html>
    <head>
      <style>{styles}</style>
    </head>
    <body>
      <h1>yamakenji24 profile</h1>
      <h2>{props.title}</h2>
      <div className="logo">
        <img
          src="https://img.esa.io/uploads/production/attachments/15248/2021/10/10/80267/f6abde4a-217c-4a04-875a-674ca7084f8f.png"
          width="50"
          height="50"
        />
        <h2>yamakenji24</h2>
      </div>
    </body>
  </html>
);

const styles = `
  html, body {
    height: 100%;
    display: grid;
    color: #696969;
    background: #fffafa;
    border: double 8px #20b2aa;
  }
  .logo {
    margin: auto;
    display: flex;
  }
  h1 {
    margin: auto auto 0 auto;
    font-size: xxx-large;
    color: black;
  }
  h2 {
    margin: auto auto 0 auto;
    font-size: xx-large;
    color: black;
  }
`;
