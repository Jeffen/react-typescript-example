import React, { useEffect, useState } from 'react';
import sanitizeHtml from 'sanitize-html';

function EventContent({ event }) {
  const [content, setContent] = useState(null);
  useEffect(() => {
    const dirty = event ? event.info.content : '';
    const clean = sanitizeHtml(dirty, {
      allowedTags: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'blockquote',
        'p',
        'a',
        'ul',
        'ol',
        'nl',
        'li',
        'b',
        'i',
        'strong',
        'em',
        'strike',
        'code',
        'hr',
        'br',
        'div',
        'table',
        'thead',
        'caption',
        'tbody',
        'tr',
        'th',
        'td',
        'pre',
        'iframe',
        'img',
        'span'
      ],
      allowedAttributes: {
        '*': ['style'],
        img: ['src']
      },
      allowedSchemes: ['data', 'http', 'https', 'ftp', 'mailto']
    });
    setContent(clean);
  }, [event]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '30px 0 60px' }}>活动详情</h1>
      <div
        style={{
          fontSize: '18px',
          color: '#4a4a4a',
          letterSpacing: '.5px',
          lineHeight: '35px'
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default EventContent;
