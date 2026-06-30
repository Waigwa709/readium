import { NextResponse } from 'next/server';

export async function GET() {
  const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://skillflowhospitality.com/graphql';

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
      next: { revalidate: 300 } // Cache results for 5 minutes (300 seconds)
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
