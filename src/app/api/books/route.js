import { NextResponse } from 'next/server';

export async function GET() {
  const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || process.env.NEXT_PUBLIC_WORDPRESS_API_URL || '';

  if (!WORDPRESS_API_URL) {
    return NextResponse.json({ 
      error: 'WORDPRESS_API_URL is not configured in environment variables.' 
    }, { status: 404 });
  }

  try {
    const query = `
      query GetAllBooks {
        books(first: 100) {
          nodes {
            id
            slug
            title
            bookDetails {
              author
              availability
              bookCategory
              bookDescription
              borrowMessage
              bookCover {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
      }
    `;

    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 10 } // Cache results for 10 seconds
    });

    if (!res.ok) {
      return NextResponse.json({ 
        error: `WordPress responded with HTTP status ${res.status}` 
      }, { status: res.status });
    }

    const json = await res.json();
    if (json.errors) {
      return NextResponse.json({ error: json.errors }, { status: 500 });
    }

    return NextResponse.json(json.data);
  } catch (err) {
    console.error("WordPress Proxy Error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
