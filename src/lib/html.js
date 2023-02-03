import Head from 'next/head';

function template(title, content) {
    return `<!doctype html>
  <html lang="is">
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <link rel="stylesheet" href="../public/styles.css">
    </head>
    <body>${content}</body>
  </html>`;
  }

export default function index(props)
{
  const posts = props.posts;
  return (
      <div style={{ padding: 30 }}>
      <Head>
        <title>Kennsluskrá</title>
      </Head>
      <div>
        {posts.map(post =>
          <div
            key={post.id}
            style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>)}
      </div>
    </div>
  )
}

  export function indexTemplate(props) {
    return template('Kennsluskrá', index(props));
  }

  export function namskeidTemplate(title, result) {
    return template(title, result);
  }
